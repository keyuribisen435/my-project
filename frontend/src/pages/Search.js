import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

function Search() {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const history =
      JSON.parse(localStorage.getItem("history")) || [];

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setQuotes([...history, ...favorites]);
  }, []);

  const filteredQuotes = quotes.filter(
    (item) =>
      (item.quote || item.text)
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.author
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Search Quotes</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredQuotes.length === 0 ? (
        <p>No quotes found.</p>
      ) : (
        filteredQuotes.map((item, index) => (
          <div key={index}>
            <p>
              "
              {item.quote || item.text}
              "
            </p>

            <h4>— {item.author}</h4>
          </div>
        ))
      )}
    </div>
  );
}

export default Search;