import React from "react";
import { SiCodersrank } from "react-icons/si";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center">
      {props.cardData.map((content) => (
        <motion.div
          key={content.id}
          className="inline-block bg-gray-100 text-black w-72 h-96 rounded-lg m-10 cursor-pointer shadow-xl"
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.1,
          }}
        /* style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }} */
        >
          <SiCodersrank color='black' size={64} className="m-auto w-fit" />

          <div key={content.id} className="m-6">
            <h1 className="text-4xl mb-2">{content.title}</h1>
            <h2 className="text-2xl mb-2">{content.subtitle}</h2>
            <p className="text-base">{content.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;
