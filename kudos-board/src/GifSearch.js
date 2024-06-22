import React, { useState } from "react";

function GifSearch({ setGifURL, gifURL }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "S2V8uMuPf9AvJqc56P4QxWOMRSzUlJE7";

  const fetchGifs = async () => {
    if (!searchTerm) {
      alert("Please enter a search term");
      return;
    }
    setLoading(true);
    setError("");
    const url = new URL("https://api.giphy.com/v1/gifs/search");
    url.search = new URLSearchParams({
      api_key: apiKey,
      q: searchTerm,
      limit: 10,
    }).toString();

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setGifs(data.data);
      } else {
        throw new Error(data.message || "Failed to fetch GIFs");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error fetching GIFs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={fetchGifs} disabled={loading}>
        {loading ? "Loading..." : "Search GIFs"}
      </button>
      <div>
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height_small.url}
            alt={gif.title}
            onClick={() => setGifURL(gif.images.original.url)}
            style={{ margin: "10px", cursor: "pointer" }}
          />
        ))}
      </div>
      {gifURL && (
        <div>
          <h3>Selected GIF:</h3>
          <img src={gifURL} alt="Selected GIF" />
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default GifSearch;
