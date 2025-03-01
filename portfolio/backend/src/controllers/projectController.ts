// src/controllers/projectController.ts
import { Request, Response } from "express";
import { prisma } from "../config/db";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projectContent = await prisma.project.findMany();
    if (!projectContent) {
      res.status(404).json({ message: 'Projects not found' });
    } else {
      res.status(200).json(projectContent);
    }
  } catch (error) {
    console.error('Error fetching Projects:', error);
    res.status(500).json({ message: 'Error fetching Projects' });
  }
};