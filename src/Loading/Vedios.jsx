
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Vedios = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get the search query from the URL (?search=keyword)
  const searchTerm = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        // ✅ Use Vite env variable
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

        // ✅ Build request URL
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          searchTerm
        )}&type=video&maxResults=10&key=${apiKey}`;

        const response = await axios.get(url);

        console.log("Fetched videos:", response.data.items); // Debugging
        setResults(response.data.items || []);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error.response?.data || error.message);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  if (!searchTerm) return <p className="text-gray-400">Type something to search.</p>;
  if (loading) return <p className="text-gray-400">Loading videos...</p>;

  // ✅ Format the video date
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Video Results for "{searchTerm}"
      </h2>

      {results.length === 0 && !loading && (
        <p className="text-gray-400">No videos found.</p>
      )}

      <ul className="space-y-6">
        {results.map((item, index) => {
          // ✅ Handle cases where some results aren't videos
          const videoId = item.id?.videoId;
          const snippet = item.snippet;
          if (!videoId || !snippet) return null;

          return (
            <li key={videoId || index} className="flex space-x-4">
              {/* Thumbnail */}
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={snippet.thumbnails?.medium?.url}
                  alt={snippet.title}
                  className="rounded-lg w-60"
                />
              </a>

              {/* Video Info */}
              <div>
                <a
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  <h3 className="text-lg font-semibold">{snippet.title}</h3>
                </a>
                <p className="text-sm text-gray-400">{snippet.channelTitle}</p>
                <p className="text-sm text-gray-400">{formatDate(snippet.publishedAt)}</p>
                <p className="text-gray-300">{snippet.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Vedios;
