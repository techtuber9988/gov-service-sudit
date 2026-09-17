import { Router } from "express";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_PATH = path.join(__dirname, "..", "data", "services.json");

export const servicesRouter = Router();

/**
 * GET /api/services?query=&category=
 *
 * Returns public services, optionally filtered by a free-text query
 * (matched against name + description) and/or an exact category match.
 * Kept deliberately simple for the vertical slice; a real implementation
 * would paginate and back this with a database.
 */
servicesRouter.get("/", async (req, res, next) => {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    const services = JSON.parse(raw);

    const query = String(req.query.query ?? "").trim().toLowerCase();
    const category = String(req.query.category ?? "").trim().toLowerCase();

    const filtered = services.filter((service) => {
      const matchesQuery =
        query.length === 0 ||
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query);

      const matchesCategory =
        category.length === 0 || service.category.toLowerCase() === category;

      return matchesQuery && matchesCategory;
    });

    res.json({ count: filtered.length, results: filtered });
  } catch (err) {
    next(err);
  }
});

export function listCategories(services) {
  return [...new Set(services.map((s) => s.category))].sort();
}
