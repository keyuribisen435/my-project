import React, { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import ShareButtons from "../components/ShareButtons";
import FavoriteButton from "../components/FavoriteButton";

function Home() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://dummyjson.com/quotes/random"
      );

      const data = await response.json();

      const currentQuote = {
        text: data.quote,
        author: data.author,
      };

      setQuote(currentQuote);

      const history =
        JSON.parse(localStorage.getItem("history")) || [];

      history.push({
        quote: data.quote,
        author: data.author,
        date: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "history",
        JSON.stringify(history)
      );
    } catch (error) {
      alert("Unable to fetch quotes.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const copyQuote = () => {
    navigator.clipboard.writeText(
      `"${quote.text}" — ${quote.author}`
    );

    alert("Quote copied successfully.");
  };

  const addFavorite = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(quote);

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

    alert("Added to favorites.");
  };

  return (
    <div className="home-container">
      <h1>💬 Random Quote Generator</h1>

      <QuoteCard
        quote={quote.text}
        author={quote.author}
      />

      <div className="button-group">
        <button
          onClick={fetchQuote}
          disabled={loading}
        >
          {loading
            ? "Loading..."
            : "🔄 New Quote"}
        </button>

        <button onClick={copyQuote}>
          📋 Copy Quote
        </button>

        <FavoriteButton
          onFavorite={addFavorite}
        />
      </div>

      <hr className="share-line" />

      <ShareButtons
        quote={quote.text}
        author={quote.author}
      />
    </div>
  );
}

export default Home;