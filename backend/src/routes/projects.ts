import { Router, Request, Response } from "express";
import projectsData from "../data/projects.json";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json(projectsData);
});

router.get("/:slug", (req: Request, res: Response) => {
  const project = projectsData.find((p) => p.slug === req.params.slug);
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.json(project);
});

export default router;
