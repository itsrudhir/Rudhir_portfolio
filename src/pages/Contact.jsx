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
                  href="https://wa.me/yourwhatsappnumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/color/96/000000/whatsapp.png"
                    alt="WhatsApp"
                    className="w-36 h-36"
                  />
                </a>
                <h2>Whatsapp / ワッツアップ</h2>
              </div>



              <div className="flex flex-col items-center justify-center">
                <a
                  href="https://linkedin.com/in/yourlinkedinprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform"
                >
                  <img
                    src="https://img.icons8.com/color/96/000000/linkedin.png"
                    alt="LinkedIn"
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
                    className="w-36 h-36"
                  />
                </a>
                <h2>Email / イーメール</h2>
              </div>



            </div>

            <div className="h-72"></div>
            <br />
            <br />

            <div className="pt-3 flex flex-col items-center justify-center">
              <img
                src="th.jpg"
                alt="Arigatou Gozaimasu"
                className="object-contain w-full max-w-4xl"
              />
            </div>

            <div className="h-96"></div>

            <br />
            <div className="h-72"></div>
          </div>
        </div>
            <div className="flex justify-center">
              <img
                src="jp.png"
                alt="Japanese Background"
                className="object-cover h-80 w-full"
              />
            </div>
      </motion.div>
    </>
  );
}