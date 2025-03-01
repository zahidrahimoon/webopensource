// src/controllers/aboutController.ts
import { prisma } from "../config/db";

export async function getAboutContent() {
  try {
    const aboutContent = await prisma.about.findFirst();
    return aboutContent;
  } catch (error) {
    console.error('Error fetching About content:', error);
    throw error;
  }
}
