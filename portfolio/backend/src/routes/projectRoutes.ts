import express from "express";
import { getProjects } from "../controllers/projectController";

const router = express.Router();
router.get("/", getProjects);

export default router;