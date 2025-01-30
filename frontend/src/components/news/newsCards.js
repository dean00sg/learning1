import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const sampleNews = [
  {
    news_id: 1,
    header: "Breaking News: React 19 Released!",
    detail: "React 19 introduces exciting new features including improved concurrent rendering, better server-side components, and more!",
    link: "https://reactjs.org",
    imageURL: "https://media.geeksforgeeks.org/wp-content/uploads/20240501164842/React-19-New-features-and-Updates.webp",
  },
  {
    news_id: 2,
    header: "Tailwind CSS v4.0 Announced!",
    detail: "Tailwind CSS 4.0 comes with performance improvements and new utility classes to make styling even more flexible.",
    link: "https://tailwindcss.com",
    imageURL: "https://picperf.io/https://laravelnews.s3.amazonaws.com/featured-images/tailwind-v4-featured.png",
  },
  {
    news_id: 3,
    header: "JavaScript: The Future of Web Development",
    detail: "Experts predict that JavaScript will continue to dominate the web development industry with new frameworks and libraries emerging.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imageURL: "https://media.licdn.com/dms/image/v2/D4D12AQF5D3Ki560RPw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684846238890?e=2147483647&v=beta&t=eWzyWNHo0J5_AZytc05IFm1azxyjeFryvP2K0MPH_wY",
  },
];

const CardNews = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (id) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col items-center space-y-5 p-6 mt-5 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleNews.map((news) => (
          <div
            key={news.news_id}
            className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={news.imageURL}
              alt={news.header}
              className="w-full h-40 object-cover"
            />
            <div className="mt-4 p-2"> 
              <h3 className="text-xl font-semibold text-gray-800">
                {news.header}
              </h3>
              <p className="text-gray-600 mt-2">
                {expandedCards[news.news_id]
                  ? news.detail
                  : `${news.detail.slice(0, 100)}...`}
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => toggleReadMore(news.news_id)}
                >
                  {expandedCards[news.news_id] ? "Read Less" : "Read More"}
                </button>
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => openLink(news.link)}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNews;