const express = require("express");
const router = express.Router();

const {
  addFavorite,
  getFavorites,
  deleteFavorite,
} = require("../controllers/favoriteController");

// POST Add Favorite
router.post("/", addFavorite);

// GET All Favorites
router.get("/", getFavorites);

// DELETE Favorite
router.delete("/:id", deleteFavorite);

module.exports = router;