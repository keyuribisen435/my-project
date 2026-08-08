const Quote = require("../models/quote");

// ===============================
// Get Random Quote
// ===============================
exports.getRandomQuote = async (req, res) => {
  try {
    const totalQuotes = await Quote.countDocuments();

    if (totalQuotes === 0) {
      return res.status(404).json({
        success: false,
        message: "No quotes found",
      });
    }

    const random = Math.floor(Math.random() * totalQuotes);

    const quote = await Quote.findOne().skip(random);

    res.status(200).json({
      success: true,
      quote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Search Quotes
// Search by Category, Author, Quote
// ===============================
exports.searchQuotes = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const quotes = await Quote.find({
      $or: [
        { category: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { quote: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      total: quotes.length,
      quotes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// Create Quote
// ===============================
exports.createQuote = async (req, res) => {
  try {
    const { quote, author, category } = req.body;

    if (!quote || !author || !category) {
      return res.status(400).json({
        success: false,
        message: "Quote, Author and Category are required",
      });
    }

    const newQuote = await Quote.create({
      quote,
      author,
      category,
    });

    res.status(201).json({
      success: true,
      message: "Quote Added Successfully",
      quote: newQuote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};