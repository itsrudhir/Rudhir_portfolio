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