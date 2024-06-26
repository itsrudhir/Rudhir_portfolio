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

        <div className="flex justify-center my-8">
          <div
            className="w-1/2 mx-auto bg-cyan-950 p-8 rounded-3xl shadow-lg hover:shadow-xl"
            data-aos="fade-up"
            id="cv"
          >
            <NavLink
              to="/about"
              activeClassName="text-white"
              className="text-gray-300 hover:text-white text-3xl"
            >
              Want to Hire Me?
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
    </>
  );
}
