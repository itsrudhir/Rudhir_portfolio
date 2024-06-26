import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";

export default function Home() {
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
        <div id="mainIntro" className="my-20 text-8xl font-bold">
          <div
            data-aos="fade-up"
            classname="flex items-center justify-center h-screen"
          >
            <br />

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

          <br />
          <br />
          <br />
          <div
            data-aos="fade-up"
            classname="flex items-center justify-center h-screen"
          >
            <h1>I am Rudhir Chandra Mahalik </h1>
          </div>
          <br />
          <br />
          <br />
          <br />

          <div
            className=" my-6  w-1/2 mx-auto  bg-cyan-950 p-8 rounded-3xl  hover:shadow-[0px_0px_80px_0.5px] hover:shadow-red-400 "
            data-aos="fade-up"
            id="cv"
          >

<NavLink
            to="/about"
            activeClassName="text-white"
            className="text-gray-300 hover:text-white px-3 py-2"
          >
            About
          </NavLink>

            {/* <a href="https://drive.google.com/file/d/1uAov1OnvB8woE26oa8IUz0ZQS_prP59s/view?usp=sharing">
              <div className="flex justify-evenly ">
                <div className="">
                  <img src="cv.png" alt="CV" className="object-contain" />
                </div>
                <div className="flex items-center justify-center">
                  <h2> 1 Page CV</h2>
                </div>
              </div>
            </a> */}


          </div>

          <div className="h-80"></div>

          <div className="text-8xl">
            <div data-aos="fade-up">
              <h1>I am :</h1>
            </div>
            <br />
            <div data-aos="fade-up">
              <h1>- AI researchist</h1>
            </div>
            <div data-aos="fade-up">
              <h1>- Frontend Dev</h1>
            </div>
            <div data-aos="fade-up">
              <h1>- Intraday trader</h1>
            </div>
            <div data-aos="fade-up">
              <h1>- & an NITian</h1>
            </div>
          </div>
        </div>

        <div className="h-36"></div>


        <div className="h-56"></div>

        <div id="pic" className="flex justify-evenly text-xl">
          <div className="w-72 h-64 px-5">
            <img
              src="rudhir.jpg"
              alt="Heyitsme"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/5 text-justify">
            Good things take time. Life is just like a bamboo plant you gotta
            water it every day it will show results but it would take a lot of
            determination and a lot of unconditional love and efforts towards
            it. <br /> <br />
            Life becomes simple once you STOP EXPECTING MUCH. It doesn't mean
            not expecting things at all rather, expecting it according to the
            efforts you gave and be natural and real to the nature.
            <br /> <br />
            Just think like if someone gave the same efforts to you would you be
            satisfied with it??? Simple isn't it.
            <br />
            <br /> peace ✌🏻
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </motion.div>
    </>
  );
}
