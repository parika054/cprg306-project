"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Skills() {
  const [articles, setArticles] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = 'cba5538c3d54445680bc4719f2105f2f';  // Your API key
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.articles);
        if (json.articles) {
          setArticles(json.articles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const nextArticle = () => {
    if (articles.length > 1) {
      setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }
  };

  const previousArticle = () => {
    if (articles.length > 1) {
      setCurrentArticleIndex((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    }
  };

  return (
    <div id="skills" className="bg-teal-300 text-white">
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center py-20">
        <p className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-blue-950 mb-11">
          Skills
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-11">
          {[
            { src: "/assets/skills/html.png", alt: "HTML", label: "HTML" },
            { src: "/assets/skills/css.png", alt: "CSS", label: "CSS" },
            { src: "/assets/skills/javascript.png", alt: "JavaScript", label: "JavaScript" },
            { src: "/assets/skills/react.png", alt: "React", label: "React" },
            { src: "/assets/skills/nextjs.png", alt: "Next.js", label: "Next.js" },
            { src: "/assets/skills/tailwind.png", alt: "Tailwind", label: "Tailwind" },
            { src: "/assets/skills/github1.png", alt: "Github", label: "Github" },
            { src: "/assets/skills/firebase.png", alt: "Firebase", label: "Firebase" },
            { src: "/assets/skills/python.png", alt: "Python", label: "Python" },
            { src: "/assets/skills/figma1.png", alt: "Figma", label: "Figma" },
          ].map((skill, index) => (
            <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-800 hover:bg-gray-700">
              <div className="grid grid-cols-2 items-center">
                <div className="m-auto">
                  <Image
                    src={skill.src}
                    alt={skill.alt}
                    width={100}
                    height={100}
                    layout="fixed"
                  />
                </div>
                <div className="text-2xl font-semibold">{skill.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-950 text-white">
        <div className="max-w-[1080px] mx-auto flex flex-col justify-center py-20 px-4">
          <p className="text-4xl font-serif font-medium my-4">
            Latest Tech News
          </p>
          <ul className="text-xl">
            {articles.length > 0 ? (
              <li>
                <a href={articles[currentArticleIndex].url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {articles[currentArticleIndex].title}
                </a>
                <div>
                  <button onClick={previousArticle} disabled={articles.length <= 1} className="mr-4">
                    Previous
                  </button>
                  <button onClick={nextArticle} disabled={articles.length <= 1}>
                    Next
                  </button>
                </div>
              </li>
            ) : <p>No news available.</p>}
          </ul>
        </div>
      </div>
    </div>
  );
}
