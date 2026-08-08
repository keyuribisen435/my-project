const express = require("express");
const router = express.Router();

const {
  getRandomQuote,
  searchQuotes,
  createQuote,
} = require("../controllers/quoteController");

router.get("/random", getRandomQuote);
router.get("/search", searchQuotes);
router.post("/", createQuote);

module.exports = router;