import React from "react";

function QuoteCard({ quote, author }) {
  return (
    <div className="quote-card">
      <p className="quote-text">
        "{quote}"
      </p>

      <h4 className="quote-author">
        — {author}
      </h4>
    </div>
  );
}

export default QuoteCard;