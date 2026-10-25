import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import '../App.css';

function plainText(value = "") {
  const document = new DOMParser().parseFromString(
    value,
    "text/html"
  );

  return document.body.textContent || "";
}

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
    <section className="search-results" aria-label="Search results">
      <div role="status">
        {loading && <p>Loading results…</p>}

        {hasSearched && results.length === 0 && (
          <p>No results found.</p>
        )}
      </div>

      {error && <p role="alert">{error}</p>}

{results.map((result) => {
  const url = new URL(result.link);
  const website = url.hostname.replace(/^www\./, "");

  return (
    <article className="search-result" key={result.link}>
      <a className="result-source" href={result.link}>
        <span className="result-icon" aria-hidden="true">
          {website.charAt(0).toUpperCase()}
        </span>

        <span className="result-source-text">
          <span className="result-site-name">
            {website}
          </span>

          <span className="result-address">
            {website}
            {url.pathname !== "/"
              ? ` › ${url.pathname.slice(1)}`
              : ""}
          </span>
        </span>
      </a>

      <h2 className="result-heading">
        <a href={result.link}>
          {plainText(result.title)}
        </a>
      </h2>

      <p className="result-description">
        {plainText(result.snippet)}
      </p>
    </article>
  );
})}
    </section>
  );
}