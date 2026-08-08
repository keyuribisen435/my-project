import React from "react";

function FavoriteButton({ onFavorite }) {
  return (
    <button onClick={onFavorite}>
      ❤️ Favorite
    </button>
  );
}

export default FavoriteButton;