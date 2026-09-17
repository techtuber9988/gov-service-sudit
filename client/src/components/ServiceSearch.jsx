import { useEffect, useId, useState } from "react";

/**
 * Searches and lists public services by free-text query and category.
 *
 * Accessibility choices here are direct remediations of the audit findings
 * in docs/accessibility-audit-report.csv:
 *  - WEB-001: every image/icon here ships real alt text set at render time,
 *    never a placeholder like "Loading...".
 *  - WEB-003: each result's link states its own destination
 *    ("View details for <service name>"), never a bare, repeated "View All".
 *  - WEB-004: a single <h2> owns this section; each result name is an <h3>
 *    one level below it, so heading levels stay consistent and predictable.
 *  - WEB-005: the search field is a plain native <input>, not a custom
 *    virtual keyboard overlay, so it never risks trapping keyboard focus.
 */
export function ServiceSearch({ apiBaseUrl = "" }) {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | error | done

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");

    const timeout = setTimeout(async () => {
      try {
        const params = new URLSearchParams(query ? { query } : {});
        const res = await fetch(`${apiBaseUrl}/api/services?${params}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const body = await res.json();
        setResults(body.results);
        setStatus("done");
      } catch (err) {
        if (err.name !== "AbortError") setStatus("error");
      }
    }, 250); // debounce

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [query, apiBaseUrl]);

  return (
    <section className="search-section" aria-labelledby={`${inputId}-heading`}>
      <h2 id={`${inputId}-heading`}>Search public services</h2>

      <div className="input-group">
        <label htmlFor={inputId}>Search by service name or keyword</label>
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
        />
      </div>

      <p className="status-message" role="status" aria-live="polite">
        {status === "loading" && "Searching..."}
        {status === "error" && "Something went wrong. Please try again."}
        {status === "done" &&
          `${results.length} service${results.length === 1 ? "" : "s"} found`}
      </p>

      <ul className="results-list">
        {results.map((service) => (
          <li key={service.id} className="result-item">
            <img
              src={service.thumbnail}
              alt={service.thumbnailAlt}
              width="64"
              height="64"
              className="result-thumbnail"
            />
            <div className="result-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href={service.url} className="result-link" aria-label={`View details for ${service.name}`}>
                View details
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
