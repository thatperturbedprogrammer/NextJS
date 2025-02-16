import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const notes = await prisma.note.findMany();
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else if (req.method === "POST") {
    const { title, content } = req.body;
    const newNote = await prisma.note.create({ data: { title, content } });

    res.status(201).json(newNote);
  }
}
