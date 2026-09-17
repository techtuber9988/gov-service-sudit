import { test } from "node:test";
import assert from "node:assert/strict";
import { listCategories } from "../../server/src/routes/services.js";

test("listCategories returns unique, sorted category names", () => {
  const services = [
    { category: "Jobs" },
    { category: "Health & Wellness" },
    { category: "Jobs" },
  ];

  const result = listCategories(services);

  assert.deepEqual(result, ["Health & Wellness", "Jobs"]);
});

test("listCategories returns an empty array for no services", () => {
  assert.deepEqual(listCategories([]), []);
});

// Integration-style test: start the app in-process and hit the real route.
// Run with: node --test test/server/services.route.test.js
test("GET /api/services filters by query text", async () => {
  const { default: app } = await import("../../server/src/index.js");
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const res = await fetch(`http://localhost:${port}/api/services?query=pension`);
    const body = await res.json();

    assert.equal(res.status, 200);
    assert.equal(body.count, 1);
    assert.match(body.results[0].name, /BHAVISHYA/);
  } finally {
    server.close();
  }
});
