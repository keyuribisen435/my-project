import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  const filteredHistory = history.filter(
    (item) =>
      item.quote.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="history-page">
      <h1 className="history-title">🕒 Quote History</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredHistory.length === 0 ? (
        <p className="empty-text">No history found.</p>
      ) : (
        filteredHistory.map((item, index) => (
          <div className="history-card" key={index}>
            <p className="quote-text">
              "{item.quote}"
            </p>

            <h4 className="author">
              — {item.author}
            </h4>

            <small className="date">
              Viewed: {item.date}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default History;