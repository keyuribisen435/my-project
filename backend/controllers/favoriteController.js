const Favorite = require("../models/Favorite");

// Add Favorite
exports.addFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.create(req.body);

    res.status(201).json({
      success: true,
      message: "Favorite added successfully",
      data: favorite,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to add favorite",
      error: error.message,
    });
  }
};

// Get Favorites
exports.getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: favorites.length,
      data: favorites,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch favorites",
      error: error.message,
    });
  }
};

// Delete Favorite
exports.deleteFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findById(
      req.params.id
    );

    if (!favorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite not found",
      });
    }

    await Favorite.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "Favorite deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete favorite",
      error: error.message,
    });
  }
};