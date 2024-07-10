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
