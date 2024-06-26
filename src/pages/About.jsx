// ...about us


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

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
        <div id="mainIntro" className="my-18 text-7xl ">
          <div
            data-aos="fade-up"
            className="flex items-center justify-center h-screen "
          >
            <div className="text-7xl font-bold">
              <h1>Hi✌🏻, I'm Rudhir Chandra Mahalik</h1>
              <h1> Welcome to My Bio</h1>
            </div>
          </div>

          <br />
          <br />

          <div
            id="links"
            className=" bg-cyan-950 p-6 rounded-3xl  shadow-[0px_0px_60px_0.5px] shadow-blue-400  "
            data-aos="fade-up"
          >
            <div className="mb-5 pb-16" id="link heading">
              <h2 className="text-4xl">
                Find relevent links to my Profiles 🌐
              </h2>
            </div>

            <div id="buttons" className="mx-24 ">
              <ul className=" flex justify-around">
                <li>
                  <div>
                    <div className="flex justify-center">
                      {" "}
                      <a href="https://www.linkedin.com/in/rudhir-mahalik/">
                        <FaLinkedin />
                      </a>{" "}
                    </div>
                    <div>
                      <h3 className="text-2xl">Linkedin</h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <div className="flex justify-center">
                      {" "}
                      <a href="https://github.com/itsrudhir">
                        <FaGithub />
                      </a>{" "}
                    </div>
                    <div>
                      <h3 className="text-2xl">Github</h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <div className="flex justify-center">
                      {" "}
                      <a href="https://www.kaggle.com/rudhirmahalik">
                        <FaKaggle />
                      </a>{" "}
                    </div>
                    <div>
                      <h3 className="text-2xl">Kaggle</h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <div className="flex justify-center">
                      {" "}
                      <a href="mailto:Kcmahalik1@gmail.com">
                        <MdEmail />
                      </a>{" "}
                    </div>
                    <div>
                      <h3 className="text-2xl">E-Mail</h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <div className="flex justify-center">
                      {" "}
                      <a href="https://api.whatsapp.com/send?phone=916295752571">
                        <FaWhatsapp />
                      </a>{" "}
                    </div>
                    <div>
                      <h3 className="text-2xl">Whatsapp</h3>
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <div className="flex justify-center">
                      {" "}
                      <a href="https://www.facebook.com/share/Q3rW3Sve7e9nNwXW/?mibextid=qi2Omg">
                        <FaFacebook />
                      </a>{" "}
                    </div>
                    <div>
                      <h3 className="text-2xl">Facebook</h3>
                    </div>{" "}
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
            className=" my-6  w-1/2 mx-auto  bg-cyan-950 p-8 rounded-3xl  shadow-[0px_0px_80px_0.5px] shadow-red-400 "
            data-aos="fade-up"
            id="cv"
          >
            <a href="https://drive.google.com/file/d/1uAov1OnvB8woE26oa8IUz0ZQS_prP59s/view?usp=sharing">
              <div className="flex justify-evenly ">
                <div className="">
                  <img src="cv.png" alt="CV" className="object-contain" />
                </div>
                <div className="flex items-center justify-center">
                  <h2> 1 Page CV</h2>
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

          <div className="flex items-center justify-center" data-aos="fade-up">
            <div className="text-5xl font-bold">
              <h2
                className=""
                style={{
                  textShadow: "0px 25px 35px rgba(254, 243, 199, 0.7)",
                }}
              >
                Learn with me 📖
              </h2>
            </div>
          </div>

          <br />
          <br />

          <div className="flex justify-evenly">
            <div
              id="mlcourse"
              className="w-5/12 rounded-3xl shadow-[0px_0px_40px_0.5px] shadow-yellow-100"
              data-aos="fade-right"
            >
              <a href="https://api.whatsapp.com/send?phone=+916295752571&text=Hello+!!!+i+saw+your+Machine+Learning+course.+I+want+to+know+more.">
                <div className="w-full h-full">
                  <img
                    src="Learn with me-min - Copy.png"
                    alt="My ds course"
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>

            <div
              id="topmate"
              className="w-5/12 rounded-3xl shadow-[0px_0px_40px_0.5px] shadow-yellow-100"
              data-aos="fade-left"
            >
              <a href="https://topmate.io/rudhir_mahalik">
                <div>
                  <img
                    src="77.jpg"
                    alt="My ds course"
                    className="rounded-3xl w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="text-5xl  text-left px-8">
            <div className="">
              <div className="mx-auto justify-around">
                <div className="flex justify-around">
                  <div>
                    {/* college */}
                    <div className="text-3xl pb-5">
                      <h2>⭐ Education - NIT Rourkela</h2>
                    </div>

                    <div data-aos="fade-left">
                      <div data-aos="fade-left">
                        <h2 className="text-2xl">
                          Pursuing B.Tech in Computer Science at NIT Rourkela
                          since 2021, specializing in Artificial Intelligence
                          (AI) and Machine Learning (ML). My journey here has
                          been a fascinating exploration into the realms of
                          cutting-edge technology.
                        </h2>
                        <br />
                      </div>

                      <div data-aos="fade-left">
                        <h2 className="text-2xl">
                          Engaging in AI research and delving into complex
                          algorithms and data analysis techniques has fueled my
                          passion for innovation. Beyond academics, I've
                          mentored fellow students and shared my knowledge
                          through online platforms, fostering a community of
                          learning.
                        </h2>
                        <br />
                      </div>

                      <div data-aos="fade-left">
                        <h2 className="text-2xl">
                          As I near the completion of my degree in 2025, I'm
                          excited to leverage my skills and contribute
                          meaningfully to the ever-evolving field of AI and ML.
                        </h2>
                        <br />
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full items-end justify-end"
                    data-aos="fade-right"
                  >
                    <img
                      src="2.jpg"
                      alt="my image"
                      className="  w-9/12 object-contain "
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
                      src="rudhir.jpg"
                      alt="my image"
                      className="w-9/12 object-contain"
                    />
                  </div>
                  <div>
                    <div>
                      {/* high school */}
                      <div className="text-3xl pb-5">
                        <h1>
                          ⭐ High Schooling - ODM Public School, Bhubaneshwar
                        </h1>
                      </div>

                      <div data-aos="fade-right">
                        <h2 className="text-2xl">
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
                      {/* early schooling */}
                      <div className="text-3xl pb-5">
                        <h1>⭐ Early Years - Kendriya Vidyalaya Kalaikunda</h1>
                      </div>
                      <div data-aos="fade-right">
                        <h2 className="text-2xl">
                          My educational journey began at Kendriya Vidyalaya
                          Kalaikunda, an institution nestled amidst the serene
                          surroundings of an Air Force base. Here, I was exposed
                          to a diverse cultural tapestry and developed a thirst
                          for knowledge that continues to drive me forward.
                        </h2>
                        <br />
                      </div>

                      <div data-aos="fade-right">
                        <h2 className="text-2xl">
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
