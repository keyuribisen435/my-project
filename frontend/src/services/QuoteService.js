import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Get Random Quote
export const getRandomQuote = async () => {
  const response = await axios.get(
    `${API_URL}/quote/random`
  );

  return response.data;
};

// Search Quotes
export const searchQuotes = async (query) => {
  const response = await axios.get(
    `${API_URL}/quotes/search?query=${query}`
  );

  return response.data;
};

// Get Favorites
export const getFavorites = async () => {
  const response = await axios.get(
    `${API_URL}/favorites`
  );

  return response.data;
};

// Add Favorite
export const addFavorite = async (quoteData) => {
  const response = await axios.post(
    `${API_URL}/favorites`,
    quoteData
  );

  return response.data;
};

// Delete Favorite
export const deleteFavorite = async (id) => {
  const response = await axios.delete(
    `${API_URL}/favorites/${id}`
  );

  return response.data;
};

// Get History
export const getHistory = async () => {
  const response = await axios.get(
    `${API_URL}/history`
  );

  return response.data;
};