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
                implementation to enhance user experience and performance and
                more on company demand.
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
                Assigned as the President of the official trading club Bears 'N' Bulls NITR
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
