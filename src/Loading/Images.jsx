

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Images = () => {
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
        // const apiKey = "AIzaSyA-J4yEB8KMsexjgQow5LkPoefYQC-mxoQ"; // replace with your API key
        // const cx = "90820dffb60b54e86"; // replace with your CSE ID
      const apiKey = import.meta.env.VITE_GOOGLE_SEARCH_API_KEY;
const cx = import.meta.env.VITE_SEARCH_ENGINE_ID;

        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(
          searchTerm
        )}&searchType=image`;

        const response = await axios.get(url);
        setResults(response.data.items || []);
      } catch (error) {
        console.error("Error fetching image results:", error);
        setResults([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  if (!searchTerm) return <p className="text-gray-400">Type something to search.</p>;
  if (loading) return <p className="text-gray-400">Loading images...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Image Results for "{searchTerm}"
      </h2>
      {results.length === 0 && <p className="text-gray-400">No images found.</p>}

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {results.map((item, index) => (
          <a
            key={index}
            href={item.image?.contextLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <img
              src={item.image?.thumbnailLink || item.link}
              alt={item.title}
              className="rounded-lg w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105 shadow-md bg-gray-800"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200x150?text=No+Image";
              }}
            />
            <p className="text-sm text-gray-300 mt-2 truncate group-hover:text-blue-400">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Images;
