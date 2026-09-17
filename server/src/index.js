import express from "express";
import cors from "cors";
import { servicesRouter } from "./routes/services.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use("/api/services", servicesRouter);

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});

export default app;
