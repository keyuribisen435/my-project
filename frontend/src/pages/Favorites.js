import React, { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

  const removeFavorite = (index) => {
    const updated = favorites.filter((_, i) => i !== index);

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="history-page">
      <div className="favorite-header">
        🖤 Favorite Quotes
      </div>

      {favorites.length === 0 ? (
        <p className="empty-text">
          No favorite quotes found.
        </p>
      ) : (
        favorites.map((item, index) => (
          <div className="history-card" key={index}>
            <p className="quote-text">
              "{item.text}"
            </p>

            <h4 className="author">
              — {item.author}
            </h4>

            {item.date && (
              <p className="date">
                Added: {item.date}
              </p>
            )}

            <button
              className="remove-btn"
              onClick={() => removeFavorite(index)}
            >
              🗑 Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;