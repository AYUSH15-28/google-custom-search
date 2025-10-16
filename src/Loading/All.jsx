
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const All = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchTerm = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
       const apiKey = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
const cx = import.meta.env.VITE_SEARCH_ENGINE_ID;

        // const apiKey = "AIzaSyA-J4yEB8KMsexjgQow5LkPoefYQC-mxoQ"; // replace with your API key
        // const cx = "90820dffb60b54e86"; // replace with your CSE ID
         const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(searchTerm)}`;

        const response = await axios.get(url);
        setResults(response.data.items || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  if (!searchTerm) return <p>Type something to search.</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      {results.length === 0 && <p>No results found.</p>}
      <ul>
        {results.map((item, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <a    className="text-blue-500" href={item.link} target="_blank" rel="noopener noreferrer">
              <h3>{item.title}</h3>
            </a>
            <p>{item.snippet}</p>
            {item.pagemap?.cse_image?.[0]?.src && (
              <img
                src={item.pagemap.cse_image[0].src}
                alt={item.title}
                style={{ maxWidth: "200px", marginTop: "10px" }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default All;

