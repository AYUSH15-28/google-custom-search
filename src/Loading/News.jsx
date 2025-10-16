
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const News = () => {
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
        const query = `${searchTerm} news`; // trick to fetch news-like results

        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(
          query
        )}`;

        const response = await axios.get(url);
        setResults(response.data.items || []);
      } catch (error) {
        console.error("Error fetching news results:", error);
        setResults([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  if (!searchTerm) return <p className="text-gray-400">Type something to search.</p>;
  if (loading) return <p className="text-gray-400">Loading news...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">
        News Results for "{searchTerm}"
      </h2>

      {results.length === 0 && <p className="text-gray-400">No news found.</p>}

      <div className="space-y-6">
        {results.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-[#1a1a1a] p-4 rounded-xl shadow-md hover:bg-[#222] transition"
          >
            {/* Thumbnail */}
            {item.pagemap?.cse_thumbnail?.[0]?.src ? (
              <img
                src={item.pagemap.cse_thumbnail[0].src}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 text-sm">
                No Img
              </div>
            )}

            {/* News Content */}
            <div className="flex-1">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-semibold text-blue-400 hover:underline"
              >
                {item.title}
              </a>

              <p className="text-gray-300 text-sm mt-1 line-clamp-3">
                {item.snippet}
              </p>

              {/* Optional date if available */}
              {item.pagemap?.metatags?.[0]?.["article:published_time"] && (
                <p className="text-gray-500 text-xs mt-2">
                  {new Date(
                    item.pagemap.metatags[0]["article:published_time"]
                  ).toDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
