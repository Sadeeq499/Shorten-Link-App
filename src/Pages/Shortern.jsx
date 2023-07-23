import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { shortenUrl } from "../APIs/ShortenApi";
import { Link } from "react-router-dom";

function Shorten() {
  //-------------------------- states-------------------------
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(false);

  // --------------------------functions-------------------------
  const { data, mutate, isLoading } = useMutation({
    mutationKey: "shorten",
    mutationFn: (url) => shortenUrl(url), // Call shortenUrl function and return the Promise
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(url);
    setUrl("");
    setResult(true);
  };

  return (
    <>
      {/* // Shorten Section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* Shorten Container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* form */}
          <form
            id="form"
            className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-DarkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
            onSubmit={handleSubmit}
          >
            <input
              type="url"
              className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
              placeholder="Shorten a link here..."
              required
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />

            <button
              type="submit"
              className="flex-shrink-0 p-3 text-white bg-Cyan rounded-lg md:w-40 md:text-lg"
            >
              Shorten It!
            </button>
          </form>

          {/* link 1 */}
          <div
            className={` ${
              result != true
                ? "hidden"
                : " flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row "
            }`}
          >
            <p className="font-bold text-center text-VeryDarkViolet md:text-left">
              {data?.original_link}
            </p>

            {/* button and shorten */}
            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <Link to={data?.full_short_link} className="font-bold text-Cyan">
                {data?.full_short_link}
              </Link>

              {
                // if loading show loading else show copy button
                isLoading ? (
                  <button
                    type="button"
                    className="flex-shrink-0 p-3 text-white bg-Cyan rounded-lg md:w-40 md:text-lg"
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(data?.full_short_link);
                      alert("Copied to clipboard");
                    }}
                    className="flex-shrink-0 p-3 text-white bg-Cyan rounded-lg md:w-40 md:text-lg"
                  >
                    Copy
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </section>
      {/* // state section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
    </>
  );
}

export default Shorten;
