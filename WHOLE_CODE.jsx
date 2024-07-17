// app.jsx

import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import ScrollToTop from './component/ScrollToTop';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import AnimatedRoutes from './component/AnimatedRoutes';

function App() {
  return (
    <div className="h-screen text-white bg-slate-800">
      <Router>
        <Navbar />
        <ScrollToTop/>
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;


// app.css
#root {
    /* max-width: 1280px; */
    margin: 0 auto;
    /* padding: 2rem; */
    text-align: center;
    
  }
  
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  
  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
  
  .card {
    padding: 2em;
  }
  
  .read-the-docs {
    color: #888;
  }
  

//   index.css

@tailwind base;
@tailwind components;
@tailwind utilities;


// main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// Home.jsx
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import TopMatePopup from "../component/TopMatePopup"; // Import the TopMatePopup component
import About from './src/pages/About';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const topMateUrl = "https://topmate.io/rudhir_mahalik"; // Replace with your TopMate URL

  return (
    <>
      <motion.div
        id="outershell"
        className="bg-gray-800 p-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div
          id="mainIntro"
          className="my-20 text-8xl font-bold text-center"
          data-aos="fade-up"
        >
          <div className="py-3">
            <h1>こんにちわ</h1>
          </div>
          <div className="py-3">
            <h1>Welcome 🙇🏻‍♂️</h1>
          </div>
          <div className="py-3">
            <h1> to my Portfolio !!! 😊 </h1>
          </div>
        </div>

        <div className="my-6 text-center text-4xl">
          <div data-aos="fade-up">
            <h1>I am :</h1>
          </div>
          <br />
          <div data-aos="fade-up" className="text-5xl font-bold">
            <h1>- AI researchist at NIT</h1>
            <br />
          </div>
          <div data-aos="fade-up" className="text-5xl font-bold">
            <h1>- Summer intern @IISC</h1>
            <br />
          </div>
          <div data-aos="fade-up" className="text-5xl font-bold">
            <h1>- Frontend Dev</h1>
            <br />
          </div>
          <div data-aos="fade-up" className="text-5xl font-bold">
            <h1>- Intraday trader</h1>
            <br />
          </div>
          <div data-aos="fade-up" className="text-5xl font-bold">
            <h1>- President @B'n'B</h1>
            <br />
          </div>
          <div data-aos="fade-up" className="text-5xl font-bold">
            <h1>- & a proud NITian</h1>
            <br />
          </div>
        </div>
        <div data-aos="zoom-in-down" className="text-6xl font-bold">
          <h1>I am Rudhir Chandra Mahalik</h1>
        </div>

        <div className="flex justify-center my-8">
          <div
            className="relative w-full max-w-md md:w-3/4 lg:w-1/2 mx-auto overflow-hidden"
            data-aos="fade-up"
            id="cv_button"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-cyan-900 via-cyan-950 to-cyan-900 opacity-0 hover:opacity-100 transition-opacity duration-500 ${
                hovered ? "pointer-events-auto" : "pointer-events-none"
              }`}
            ></div>
            <NavLink
              // to="/about#CV_div" // Navigate to '/about' and scroll to element with id 'cv'
              to="https://drive.google.com/file/d/1RLKsD6FWIc0BSQLG3074rxfm_kRhBRg_/view?usp=sharing" // Navigate to '/about' and scroll to element with id 'cv'
              activeClassName="text-white"
              className="relative z-10 flex items-center justify-center w-full h-full bg-cyan-950 p-6 md:p-8 rounded-3xl shadow-lg overflow-hidden"
              style={{ minHeight: "120px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-gray-300 text-xl md:text-2xl lg:text-3xl transition-colors duration-300">
                {hovered ? "Let's check my CV" : "Want to Hire Me?"}
              </span>
            </NavLink>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="w-72 h-72 relative">
            <img
              src="rudhir.jpg"
              alt="Heyitsme"
              className="object-cover rounded-full w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center py-2">
              <p className="text-white text-lg">Rudhir Chandra Mahalik</p>
            </div>
          </div>
        </div>

        <div className="text-center text-xl">
          <p className="max-w-2xl mx-auto">
            Good things take time. Life is just like a bamboo plant you gotta
            water it every day it will show results but it would take a lot of
            determination and a lot of unconditional love and efforts towards
            it.
          </p>
          <br />
          <p className="max-w-2xl mx-auto">
            Life becomes simple once you STOP EXPECTING MUCH. It doesn't mean
            not expecting things at all rather, expecting it according to the
            efforts you gave and be natural and real to the nature.
          </p>
          <br />
          <p className="max-w-2xl mx-auto">
            Just think like if someone gave the same efforts to you would you
            be satisfied with it??? Simple isn't it.
          </p>
          <br />
          <p className="max-w-2xl mx-auto">peace ✌🏻</p>
        </div>

        <div className="h-36"></div>
      </motion.div>
      <TopMatePopup topMateUrl={topMateUrl} /> {/* Add the TopMatePopup component */}
    </>
  );
}




// About.jsx

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <>
      <motion.div
        id="outershell"
        className="bg-gray-800 p-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div id="mainIntro" className="my-24 text-center">
          <div data-aos="fade-up" className="flex items-center justify-center">
            <div className="text-7xl font-bold text-white">
              <h1>こんにちは ✌🏻, I'm Rudhir Chandra Mahalik</h1>
              <h1>Welcome to My Bio</h1>
            </div>
          </div>

          <br />
          <br />

          <div
            id="links"
            className="bg-cyan-950 p-6 rounded-3xl shadow-lg"
            data-aos="fade-up"
          >
            <div className="mb-5 pb-6" id="link heading">
              <h2 className="text-4xl text-white">
                Find relevant links to my Profiles 🌐
              </h2>
            </div>

            <div id="buttons" className="mx-24">
              <ul className="flex justify-around">
                <li>
                  <div className="text-center">
                    <a
                      href="https://www.linkedin.com/in/rudhir-mahalik/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition transform hover:scale-110"
                    >
                      <img
                        src="https://img.icons8.com/color/96/000000/linkedin.png"
                        alt="Linkedin"
                        className="w-24 h-24 mx-auto"
                      />
                    </a>
                    <h3 className="text-2xl text-white">Linkedin</h3>
                  </div>
                </li>

                <li>
                  <div className="text-center">
                    <a
                      href="https://github.com/itsrudhir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition transform hover:scale-110"
                    >
                      <img
                        src="https://assets-global.website-files.com/61d1b6e84887f53fef1dcdf2/631b45e07d98cfb364e5951f_github-white.png"
                        alt="Github"
                        className="w-24 h-24 mx-auto"
                      />
                    </a>
                    <h3 className="text-2xl text-white">Github</h3>
                  </div>
                </li>

                <li>
                  <div className="text-center">
                    <a
                      href="https://www.kaggle.com/rudhirmahalik"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition transform hover:scale-110"
                    >
                      <img
                        src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-color-tal-revivo.png"
                        alt="Kaggle"
                        className="w-24 h-24 mx-auto"
                      />
                    </a>
                    <h3 className="text-2xl text-white">Kaggle</h3>
                  </div>
                </li>

                <li>
                  <div className="text-center">
                    <a
                      href="mailto:Kcmahalik1@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition transform hover:scale-110"
                    >
                      <img
                        src="https://icons.iconarchive.com/icons/dtafalonso/win-10x/256/Email-icon.png"
                        alt="Email"
                        className="w-24 h-24 mx-auto"
                      />
                    </a>
                    <h3 className="text-2xl text-white">E-Mail</h3>
                  </div>
                </li>

                <li>
                  <div className="text-center">
                    <a
                      href="https://api.whatsapp.com/send?phone=916295752571"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition transform hover:scale-110"
                    >
                      <img
                        src="https://img.icons8.com/color/96/000000/whatsapp.png"
                        alt="Whatsapp"
                        className="w-24 h-24 mx-auto"
                      />
                    </a>
                    <h3 className="text-2xl text-white">Whatsapp</h3>
                  </div>
                </li>

                <li>
                  <div className="text-center">
                    <a
                      href="https://www.facebook.com/share/Q3rW3Sve7e9nNwXW/?mibextid=qi2Omg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition transform hover:scale-110"
                    >
                      <img
                        src="https://img.icons8.com/color/96/000000/facebook.png"
                        alt="Facebook"
                        className="w-24 h-24 mx-auto"
                      />
                    </a>
                    <h3 className="text-2xl text-white">Facebook</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />

          <div
            className="my-6 w-1/2 mx-auto bg-cyan-950 p-8 rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            id="CV_div"
          >
            <a
              href="https://drive.google.com/file/d/1RLKsD6FWIc0BSQLG3074rxfm_kRhBRg_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-evenly items-center">
                <div>
                  <img
                    src="cv.png"
                    alt="CV"
                    className="object-contain transition transform hover:scale-110"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <div className="flex items-center justify-center ml-4">
                  <h2 className="text-2xl text-white transition transform hover:text-cyan-300">
                    1 Page CV
                  </h2>
                </div>
              </div>
            </a>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="text-5xl text-center my-12 font-bold">
            <h2
              className="text-white"
              style={{
                textShadow: "0px 25px 35px rgba(254, 243, 199, 0.7)",
              }}
            >
              Learn with me 📖
            </h2>
          </div>

          <div className="flex justify-evenly">
            <div
              id="mlcourse"
              className="w-5/12 rounded-3xl shadow-lg"
              data-aos="fade-right"
            >
              <a
                href="https://api.whatsapp.com/send?phone=+916295752571&text=Hello+!!!+i+saw+your+Machine+Learning+course.+I+want+to+know+more."
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="Learn with me-min - Copy.png"
                  alt="My ds course"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </a>
            </div>

            <div
              id="topmate"
              className="w-5/12 rounded-3xl shadow-lg"
              data-aos="fade-left"
            >
              <a
                href="https://topmate.io/rudhir_mahalik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="77.jpg"
                  alt="My ds course"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </a>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="text-5xl text-left px-8">
            <div className="">
              <div className="mx-auto justify-around">
                <div className="flex justify-around">
                  <div>
                    <div className="text-3xl pb-5">
                      <h2>⭐ Education - NIT Rourkela</h2>
                    </div>

                    <div data-aos="fade-left">
                      <h2 className="text-2xl text-white">
                        Pursuing B.Tech in Computer Science at NIT Rourkela
                        since 2021, specializing in Artificial Intelligence (AI)
                        and Machine Learning (ML). My journey here has been a
                        fascinating exploration into the realms of cutting-edge
                        technology.
                      </h2>
                      <br />
                    </div>

                    <div data-aos="fade-left">
                      <h2 className="text-2xl text-white">
                        Engaging in AI research and delving into complex
                        algorithms and data analysis techniques has fueled my
                        passion for innovation. Beyond academics, I've mentored
                        fellow students and shared my knowledge through online
                        platforms, fostering a community of learning.
                      </h2>
                      <br />
                    </div>

                    <div data-aos="fade-left">
                      <h2 className="text-2xl text-white">
                        As I near the completion of my degree in 2025, I'm
                        excited to leverage my skills and contribute
                        meaningfully to the ever-evolving field of AI and ML.
                      </h2>
                      <br />
                    </div>
                  </div>

                  <div
                    className="w-full items-end justify-end"
                    data-aos="fade-right"
                  >
                    <img
                      src="33.jpg"
                      alt="my image"
                      className="w-9/12 object-contain"
                    />
                  </div>
                </div>

                <br />
                <br />

                <div className="flex justify-around">
                  <div
                    data-aos="fade-left"
                    className="w-full items-start justify-start"
                  >
                    <img
                      src="2.jpg"
                      alt="my image"
                      className="w-9/12 object-contain"
                    />
                  </div>
                  <div>
                    <div>
                      <div className="text-3xl pb-5">
                        <h1>
                          ⭐ High Schooling - ODM Public School, Bhubaneshwar
                        </h1>
                      </div>

                      <div data-aos="fade-right">
                        <h2 className="text-2xl text-white">
                          My journey into academia continued at ODM Public
                          School in Bhubaneshwar, where I completed my higher
                          secondary education. This phase of my life was marked
                          by discovery and growth, as I explored various
                          academic disciplines and honed my interests.
                        </h2>
                      </div>
                    </div>

                    <br />
                    <br />

                    <div>
                      <div className="text-3xl pb-5">
                        <h1>⭐ Early Years - Kendriya Vidyalaya Kalaikunda</h1>
                      </div>
                      <div data-aos="fade-right">
                        <h2 className="text-2xl text-white">
                          My educational journey began at Kendriya Vidyalaya
                          Kalaikunda, an institution nestled amidst the serene
                          surroundings of an Air Force base. Here, I was exposed
                          to a diverse cultural tapestry and developed a thirst
                          for knowledge that continues to drive me forward.
                        </h2>
                        <br />
                      </div>

                      <div data-aos="fade-right">
                        <h2 className="text-2xl text-white">
                          Kendriya Vidyalaya provided not just an academic
                          foundation, but also a nurturing environment that
                          fostered holistic development. From engaging in
                          extracurricular activities to building lasting
                          friendships, my early schooling years laid the
                          groundwork for my future endeavors.
                        </h2>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>

        <div className="h-72"></div>
      </motion.div>
    </>
  );
}


// Work.jsx

// ...work


import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

import VSlider from "../component/V_Slider";
import { NavLink } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Button } from "@material-tailwind/react";


export default function Work() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Example: Set default animation duration to 800ms
    });
  }, []);

  return (
    <>
      <motion.div
        id="outershell"
        className="bg-gray-800 p-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div id="mainIntro" className="my-19">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center pt-4"
          >
            <div
              className="font-bold w-6/12 mx-auto py-12"
            >
              <br />
              <h1 className="text-6xl">My Work Experience</h1>
              <hr />
              <br />
            </div>


            <div className="pt-3">
              <VSlider />
            </div>

            <br />
            <div className="h-72"></div>
          </div>

        </div>

        <div className="h-72"></div>
      </motion.div>
    </>
  );
}



// Contact.jsx

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Example: Set default animation duration to 800ms
    });
  }, []);

  return (
    <>
      <motion.div
        id="outershell"
        className="bg-gray-800 pt-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div id="mainIntro" className="my-10">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center pt-4"
          >
            <div className="text-center text-6xl font-bold">
              <h1>ありがとうございます 🙇🏻‍♂</h1>
              <div>Thank you very much!</div>
            </div>

            <div className="text-center text-3xl mt-4 py-10">
              <div>ご連絡お待ちしております!</div>
              <div>Looking forward to hearing from you!</div>
            </div>

            <div className="h-44"></div>

            <div className="flex justify-evenly w-full">


              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://api.whatsapp.com/send?phone=916295752571"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/color/96/000000/whatsapp.png"
                    alt="WhatsApp"
                    href='https://api.whatsapp.com/send?phone=916295752571'
                    className="w-36 h-36"
                  />
                </a>
                <h2>Whatsapp / ワッツアップ</h2>
              </div>



              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://www.linkedin.com/in/rudhir-mahalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/color/96/000000/linkedin.png"
                    alt="LinkedIn"
                    href='https://www.linkedin.com/in/rudhir-mahalik/'
                    className="w-36 h-36"
                  />
                </a>
                <h2>LinkedIn / リンクトイン</h2>
              </div>




              <div className="flex flex-col items-center justify-center">
                <a
                  href="mailto:youremail@example.com"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="https://icons.iconarchive.com/icons/dtafalonso/win-10x/256/Email-icon.png"
                    alt="Email"
                    href='mailto:Kcmahalik1@gmail.com'
                    className="w-36 h-36"
                  />
                </a>
                <h2>Email / イーメール</h2>
              </div>



            </div>

            <div className="h-72"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="pt-3 flex flex-col items-center justify-center">
              <img
                src="th.jpg"
                alt="Arigatou Gozaimasu"
                className="object-contain w-full max-w-4xl"
              />
            </div>

            <div className="h-36"></div>

            <br />
            <div className="h-36"></div>
          </div>
        </div>
            <div className="flex justify-center">
              <img
                src="jp.png"
                alt="Japanese Background"
                className="object-cover h-72 w-full"
              />
            </div>
      </motion.div>
    </>
  );
}




// AnimatedRoutes.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
// import Work from '../pages/Work';
import Contact from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Work from '../pages/Work'

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;


// navbar.jsx


import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black p-4 fixed w-full z-9999">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-white text-lg font-semibold">
          Rudhir Mahalik
        </NavLink>

        {/* Navbar Links */}
        <div className="hidden md:block">
          <NavLink
            exact
            to="/"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            About
          </NavLink>
          
          <NavLink
            to="/work"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Work
          </NavLink>
          
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <NavLink
            exact
            to="/"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            work
          </NavLink>
          <NavLink
            to="/work"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-white"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// TopMatePopup.jsx


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TopMatePopup = ({ topMateUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <motion.button
        onClick={togglePopup}
        className="bg-gradient-to-r from-orange-500 to-cyan-400 text-white p-4 rounded-full shadow-lg focus:outline-none"
        whileHover={{ scale: 1.2 }}
        animate={{ 
          y: ["0%", "-60%", "0%", "18%", "0%"], 
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        Get Free Mentorship
      </motion.button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 h-5/6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none text-2xl"
            >
              &times;
            </button>
            <iframe
              src={topMateUrl}
              title="TopMate Profile"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TopMatePopup;


// vslider.jsx

// ...vslider
import React, { useState } from "react";
import Ribbon from "./Ribbon";

const VSlider = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    {
      title: "Internships / Positions",
      content: " ",
      links: [
        { text: "RBCCPS, IISC", targetId: "section1" },
        { text: "Tech Lead, SlateLabs", targetId: "section6" },
        { text: "President @BnB", targetId: "section8" },
      ],
    },

    {
      title: "Publications",
      content: " ",
      links: [{ text: "Hierarchical Time Series", targetId: "section2" }],
    },

    {
      title: "ML Projects",
      content: " ",
      links: [
        { text: "Lung Sound Classification", targetId: "section3" },
        { text: "Real Time Emotion Detection", targetId: "section7" },
        { text: "Stock Price Prediction", targetId: "section10" },
      ],
    },
    {
      title: "WebDev Projects",
      content: "",
      links: [{ text: "Website for Slatelabs", targetId: "section5" }],
    },
    {
      title: "Certifications",
      content: "",
      links: [
        { text: "Gen AI by AWS", targetId: "section4" },
        { text: "EDA & supervised ML by IBM ", targetId: "section9" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 flex">
      <div className="w-1/4 p-4">
        <div className="sticky top-28">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full text-left p-4 bg-gray-700 text-white font-semibold rounded-t-lg focus:outline-none"
              >
                {item.title}
              </button>
              <div
                className={`transition-all duration-1000 ${
                  expandedIndex === index
                    ? "opacity-100 max-h-full"
                    : "opacity-0 max-h-0"
                }`}
                style={{
                  maxHeight: expandedIndex === index ? "1000px" : "0px",
                }}
              >
                <div className="p-4 bg-gray-600">
                  <p>{item.content}</p>
                  <ul className="mt-2">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <button
                          onClick={() => handleScroll(link.targetId)}
                          className=" font-semibold  cursor-pointer"
                        >
                          {link.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-3/4 p-4">
        <div
          id="section1"
          className="relative h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
        >
          <Ribbon text={"Ongoing"} /> {/* Add the Ribbon component here */}
          <div className="text-white font-bold w-1/6 text-3xl pr-3">
            <h2>
              May <br /> 2024
            </h2>
          </div>
          <div className="text-white font-bold w-5/6 p-5 text-justify">
            <h2>
              <b className="text-4xl">Speed Breaker Audit :</b> (Ongoing) This
              was the problem statement assigned during the{" "}
              <u>
                <i>
                  <b className="text-xl">internship at IISC</b>
                </i>
              </u>{" "}
              Our project focuses on developing an algorithm that utilizes
              mobile accelerometer data to audit speed breakers. By leveraging
              this technology, we ensure compliance with legal standards while
              accurately pinpointing the geographical locations of speed
              breakers within the time series domain.
            </h2>
          </div>
        </div>

        <div
          id="section2"
          className="relative h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
        >
          <Ribbon text={"Ongoing"} /> {/* Add the Ribbon component here */}
          <div className="text-white font-bold w-1/6 text-3xl pr-3">
            <h2>
              Feb <br /> 2024
            </h2>
          </div>
          <div className="text-white font-bold w-5/6 p-5 text-justify ">
            <h2>
              <b className="text-4xl">Hierarchical Time Series :</b> (Ongoing)
              Investigating hierarchical time series modelling to improve the
              efficiency of real‐world problem‐solving using advanced
              statistical techniques such as ARIMA , by exploiting
              interdependencies among various entities.
            </h2>
          </div>
        </div>

        {/* <div
          id="section2"
          className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
        >
          
          <div className="text-white font-bold w-1/6 text-3xl pr-3">
            <h2>
              May <br /> 2024
            </h2>
          </div>

          <div className="text-white font-bold w-5/6 p-5 text-justify ">
            <h2>
              <b className="text-4xl">
                 Hierarchical Time Series:
                </b>
                  (Ongoing) Investigating hierarchical
              time series modelling to improve the efficiency of real‐world
              problem‐solving using advanced statistical techniques such as
              ARIMA , by exploiting interdependencies among various entities.
            </h2>
          </div>

        </div> */}

        <a href="https://github.com/itsrudhir/Lung-sound-multiclass-classification.git">
          <div
            id="section3"
            className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
          >
            <div className="text-white font-bold w-1/6 text-3xl pr-3">
              <h2>
                Mar <br /> 2024
              </h2>
            </div>

            <div className="text-white font-bold w-5/6 p-5 text-justify ">
              <h2>
                <b className="text-4xl">Lung Sound Classification :</b>Designed
                a Multilayered CNN architecture & 5 ML models for multiclass
                classification of Lung sound based on supervised feature‐label
                training paradigm to recognize diseased lungs and normal lungs
                from the sound collected as Dataset.{" "}
              </h2>
            </div>
          </div>
        </a>

        <a href="https://drive.google.com/drive/folders/1L-dp-u6ysWBf5iWQ2jGS-r7hxroj7n6W?usp=sharing">
          <div
            id="section4"
            className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
          >
            <div className="text-white font-bold w-1/6 text-3xl pr-3">
              <h2>
                Feb <br /> 2024
              </h2>
            </div>

            <div className="text-white font-bold w-5/6 p-5 text-justify ">
              <h2>
                <b className="text-4xl">AwS certification on Gen AI</b>
              </h2>
            </div>
          </div>
        </a>

        <a href="https://slate-labs.com/">
          <div
            id="section5"
            className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
          >
            <div className="text-white font-bold w-1/6 text-3xl pr-3">
              <h2>
                Jan <br /> 2024
              </h2>
            </div>

            <div className="text-white font-bold w-5/6 p-5 text-justify ">
              <h2>
                <b className="text-4xl">Website for "SlateLabs" :</b> Developed
                and deployed the landing page for SLATELABS on AWS. Enhanced the
                landing page by adding functionalities such as a login dashboard
                and database integration in response to company requests,
                resulting in a 24 % increase in company reach
              </h2>
            </div>
          </div>
        </a>

        <div
          id="section6"
          className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
        >
          <div className="text-white font-bold w-1/6 text-3xl pr-3">
            <h2>
              Dec <br /> 2023
            </h2>
          </div>

          <div className="text-white font-bold w-5/6 p-5 text-justify ">
            <h2>
              <b className="text-4xl">
                Assigned as Tech Lead at "SlateLabs" :{" "}
              </b>
              As an Ed Tech startup's Technical Lead, I am assigned to manage
              website development, technical requirements, and SEO
              implementation to enhance user experience and performance and more
              on company demand.
            </h2>
          </div>
        </div>

        <a href="https://github.com/itsrudhir/Real-Time-emotion-detection-.git">
          <div
            id="section7"
            className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
          >
            <div className="text-white font-bold w-1/6 text-3xl pr-3">
              <h2>
                Aug <br /> 2023
              </h2>
            </div>

            <div className="text-white font-bold w-5/6 p-5 text-justify ">
              <h2>
                <b className="text-4xl">Real Time Emotion Detection :</b> I
                created a real-time emotion detection model using DeepFace and
                Haar-Cascades, achieving 99.94% accuracy. It analyzes live
                camera feeds to accurately identify emotions like happiness,
                sadness, anger, and surprise, demonstrating advanced computer
                vision capabilities.
              </h2>
            </div>
          </div>
        </a>

        <div
          id="section8"
          className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
        >
          <div className="text-white font-bold w-1/6 text-3xl pr-3">
            <h2>
              Jul <br /> 2023
            </h2>
          </div>

          <div className="text-white font-bold w-5/6 p-5 text-justify ">
            <h2>
              <b className="text-4xl">
                Assigned as the President of the official trading club Bears 'N'
                Bulls NITR
              </b>
            </h2>
          </div>
        </div>

        <a href="https://drive.google.com/drive/folders/1fYXfa6UaLy_ao-vzNBVxhLKkBwB87ST4?usp=sharing">
          <div
            id="section9"
            className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
          >
            <div className="text-white font-bold w-1/6 text-3xl pr-3">
              <h2>
                Jun <br /> 2023
              </h2>
            </div>

            <div className="text-white font-bold w-5/6 p-5 text-justify ">
              <h2>
                <b className="text-4xl">
                  Assesed by IBM in Supervised ML & EDA
                </b>
              </h2>
            </div>
          </div>
        </a>

        <a href="https://github.com/itsrudhir/Real-Time-emotion-detection-.git">
          <div
            id="section10"
            className="h-64 bg-gray-700 mb-4 flex items-center justify-center rounded-lg"
          >
            <div className="text-white font-bold w-1/6 text-3xl pr-3">
              <h2>
                May <br /> 2024
              </h2>
            </div>

            <div className="text-white font-bold w-5/6 p-5 text-justify ">
              <h2>
                <b className="text-4xl">Stock Price Prediction :</b> I compared
                two performance of 2 paradigms on stocks like Google and Tesla,
                analyzing volatility, trading volume, and market trends to
                evaluate their effectiveness.
              </h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default VSlider;



// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;






