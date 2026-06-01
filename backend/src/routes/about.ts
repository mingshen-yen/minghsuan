import { Router } from "express";
import aboutData from "../data/about.json";

const router = Router();

router.get("/", (_req, res) => {
  res.json(aboutData);
});

export default router;
