export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Use a GET request." });
  }

  const query = typeof req.query.q === "string"
    ? req.query.q.trim()
    : "";

  if (!query || query.length > 400) {
    return res.status(400).json({
      error: "Enter a search between 1 and 400 characters.",
    });
  }

  const apiKey = process.env.BRAVE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "BRAVE_API_KEY is missing from the server settings.",
    });
  }

  try {
    const url = new URL(
      "https://api.search.brave.com/res/v1/web/search"
    );
    url.searchParams.set("q", query);
    url.searchParams.set("count", "10");

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "X-Subscription-Token": apiKey,
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const message = response.status === 429
        ? "The search request limit was reached. Try again later."
        : "Brave could not complete the search. Check the API key and plan.";

      console.error("Brave returned status:", response.status);
      return res.status(response.status === 429 ? 429 : 502)
        .json({ error: message });
    }

    const data = await response.json();
    const items = (data.web?.results ?? []).map((result) => ({
      title: result.title,
      link: result.url,
      snippet: result.description,
    }));

    return res.status(200).json({ items });
  } catch (error) {
    console.error("Search failed:", error.message);
    return res.status(502).json({
      error: "The search service is unavailable. Please try again.",
    });
  }
}