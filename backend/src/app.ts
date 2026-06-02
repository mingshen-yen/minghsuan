import "#db";
import express from "express";
import cors from "cors";
import path from "path";
import projectsRouter from "./routes/projects";
import aboutRouter from "./routes/about";

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: process.env.WEB_URL }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../public")));
app.get("/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/projects", projectsRouter);
app.use("/api/about", aboutRouter);

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
