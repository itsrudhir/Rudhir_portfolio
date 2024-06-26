import React from "react";

export default function Contact() {
  return (
    <>
      <div className="pt-24 bg-gray-900 text-white">
        <div className="text-center text-6xl font-bold">
          <h1>ありがとうございます 🙇🏻‍♂️</h1>
          <div>Thank you very much!</div>
        </div>

        <div className="text-center text-3xl mt-4 py-10">
          <div>ご連絡お待ちしております!</div>
          <div>Looking forward to hearing from you!</div>
        </div>

        <div className="h-44"></div>

        <div className="flex justify-evenly">
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

        <div className="flex justify-center">
          <img
            src="jp.png"
            alt="Japanese Background"
            className="object-cover h-80 w-full"
          />
        </div>
      </div>
    </>
  );
}
