const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: [true, "Quote is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    category: {
      type: String,
      default: "Motivation",
    },
    isFavorite: {
      type: Boolean,
      default: true,
    },
    viewedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", favoriteSchema);