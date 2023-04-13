/* import { motion } from 'framer-motion'; */
import Card from "../Cards/Card";
import cardData from "../data/cardData.json";

function Projects() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="m-auto w-fit p-10">
        <h1 className="p-6 text-center font-bold text-3xl">Projects</h1>
        <p className="text-center">
          alskdnasol iaosdj oais jdoais joai jsodi ajsodiajsoidjaosid jaosidj
          oaijd oiasjflkjxcnvkjnesado hoai oai sodij
        </p>
        <Card cardData={cardData} />
      </div>
    </div>
  );
}

export default Projects;
