"use client";
  import Image from 'next/image';
  import React, { useRef, useState } from "react";
  import Navbar from "./components/navbar";
  import Menu from "./components/menu";
  import { Reveal } from "./components/reveal";
  import { IoMail } from "react-icons/io5";
  import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
  import { motion, useScroll, useSpring } from "framer-motion";
  

  export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });

    const [isOpen, setIsOpen] = useState(false);
    const contactRef = useRef(null);
    const homeRef = useRef(null);

    const scrollTo = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <main className="font-sans antialiased text-gray-800">
        <Menu isOpen={isOpen} />
        <Navbar toggleMenu={toggleMenu} isOpen={isOpen} onLogoClick={() => scrollTo(homeRef)} />

        {/* Scroll Progress Bar */}
        <motion.div className="h-1 bg-teal-500 fixed z-50" style={{ scaleX, transformOrigin: "0%" }} />

        {/* Hero Section */}
        <section ref={homeRef} className="relative flex items-center justify-center min-h-screen">
          <Image id='navs'
            src="https://ncube.com/wp-content/uploads/2020/02/Top-8-Software-Development-Models.jpg"
            alt="Software Development Models"
            layout="fill"
            objectFit="cover"
            className="absolute z-0"
          />
          <div className="relative z-10 backdrop-blur-sm bg-white/30 p-10 rounded-xl text-center shadow-xl">
            <Reveal>
              <h1 className="text-6xl font-bold text-teal-200">Hey, I'm Parika.</h1>
              <h2 className="mt-4 text-4xl font-bold text-gray-800">Full-Stack Developer</h2>
              <p className="mt-4 text-lg text-teal-300">
                Crafting beautiful applications with React.js, Node.js, and more. Design enthusiast and a learner for life.
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-teal-500 text-white font-medium px-8 py-3 rounded-lg shadow hover:bg-teal-600 transition-colors"
                onClick={() => scrollTo(contactRef)}
              >
                Get to know me!
              </motion.button>
            </Reveal>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-8">
            <Reveal>
              <h2 className="text-5xl font-bold text-gray-800">About Me</h2>
            </Reveal>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <Reveal>
                <p>
                I am a jr. software developer with a strong knack for coding and technology. I constantly strive to gain new experience among new trends and technologies.
                </p>
              </Reveal>
              <Reveal>
                <p>
                  Skills include: Python, C#, Java, React.js, Node.js, and Next.js, with a strong foundation in HTML, CSS, JavaScript, and strong background in backend development.
                </p>
              </Reveal>
              <Reveal>
              
          <span className=" text-teal-400 flex flex-row gap-2">My Links <FaArrowRight className=" relative top-1" /></span>
          <div className=" relative flex flex-row gap-2 top-1">
          <a href="https://www.linkedin.com/in/parika-singh-038127260/" target="_blank"><FaLinkedin className=" ease-in-out duration-200 hover:text-teal-400"/></a>
          <a href="https://github.com/parika054" target="_blank"><FaGithub className=" ease-in-out duration-200 hover:text-teal-400"/></a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
       

        {/* Contact Section */}
        <section ref={contactRef} className="bg-teal-500 text-white py-12">
          <div className="container mx-auto px-8 text-center">
            <Reveal>
              <h2 className="text-5xl font-bold">Get In Touch</h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-lg">
                Interested in collaborating or discussing a project? Feel free to reach out to me.
              </p>
            </Reveal>
            <Reveal>
              <a href="mailto:parika054@gmail.com" className="mt-6 inline-block bg-white text-teal-500 font-medium px-8 py-3 rounded-lg shadow hover:bg-gray-200 transition-colors">
                <IoMail className="inline-block mr-2 text-2xl" />
                parika054@gmail.com
              </a>
            </Reveal>
          </div>
        </section>
      </main>
    );
  }
