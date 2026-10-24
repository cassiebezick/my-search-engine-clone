import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function BraveSearch() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function search() {
      setError("");
      setResults([]);
      setHasSearched(false);
      setLoading(false);

      if (!query) return;

      setLoading(true);

      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "The search failed.");
        }

        setResults(data.items ?? []);
        setHasSearched(true);
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    search();

    return () => controller.abort();
  }, [query]);

  return (
    <section aria-label="Search results">
      <div role="status">
        {loading && <p>Loading results…</p>}

        {hasSearched && results.length === 0 && (
          <p>No results found.</p>
        )}
      </div>

      {error && <p role="alert">{error}</p>}

      {results.map((result) => (
        <article key={result.link}>
          <h2>
            <a href={result.link}>{result.title}</a>
          </h2>

          <p>{result.link}</p>
          <p>{result.snippet}</p>
        </article>
      ))}
    </section>
  );
}