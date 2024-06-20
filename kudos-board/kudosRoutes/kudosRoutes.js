const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/boards/", async (req, res) => {
  const { category } = req.query;
  let queryOptions = {};
  if (category) {
    queryOptions.where = {
      category: {
        startsWith: category,
        mode: "insensitive", // Case insensitive matching
      },
    };
  }
  const Boards = await prisma.board.findMany(queryOptions);
  res.json(Boards);
});
router.post("/boards", async (req, res) => {
  const { title, category, imageURL } = req.body;
  try {
    const newBoard = await prisma.board.create({
      data: {
        title,
        category,
        imageURL,
      },
    });
    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new board" });
  }
});
router.delete("/boards/:BoardId", async (req, res) => {
  const { BoardId } = req.params;
  const boards = await prisma.board.delete({
    where: {
      id: parseInt(BoardId),
    },
  });
  res.json(boards);
});
module.exports = router;
