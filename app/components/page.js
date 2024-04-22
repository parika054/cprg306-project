import React from "react";
import Image from "next/image";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen bg-teal-300 text-white">
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center h-full py-20 ">
        <p className="my-4 text-3xl sm:text-5xl md:text-6xl font-serif font-medium text-blue-950">
          Skills
        </p>

        <div className="bg-teal-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-11">
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
    </div>
  );
}
