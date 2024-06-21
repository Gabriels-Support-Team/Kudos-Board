const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
router.get("/boards/:boardId/cards", async (req, res) => {
  const { boardId } = req.params;
  try {
    const cards = await prisma.card.findMany({
      where: { boardId: parseInt(boardId) },
    });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});
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
router.get("/cards", async (req, res) => {
  const Cards = await prisma.card.findMany();
  res.json(Cards);
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
router.delete("/cards/:CardId", async (req, res) => {
  const { CardId } = req.params;
  const cards = await prisma.card.delete({
    where: {
      id: parseInt(CardId),
    },
  });
  res.json(cards);
});
router.post("/cards", async (req, res) => {
  const { title, description, owner, boardId, gifURL } = req.body;
  try {
    const newCard = await prisma.card.create({
      data: {
        title,
        description,
        owner,
        boardId,
        gifURL,
      },
    });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new board" });
    console.log(error);
  }
});
router.get("/boards/:BoardId", async (req, res) => {
  const { BoardId } = req.params;
  const board = await prisma.board.findUnique({
    where: { id: parseInt(BoardId) },
  });
  if (board) {
    res.json(board);
  } else {
    res.status(404).json({ error: "Board not found" });
  }
});
router.post("/cards/:cardId/upvote", async (req, res) => {
  const { cardId } = req.params;
  try {
    const updatedCard = await prisma.card.update({
      where: { id: parseInt(cardId) },
      data: {
        upvotes: {
          increment: 1,
        },
      },
    });
    res.json(updatedCard);
  } catch (error) {
    console.error("Failed to upvote card:", error);
    res.status(500).json({ error: "Failed to upvote card" });
  }
});
module.exports = router;
