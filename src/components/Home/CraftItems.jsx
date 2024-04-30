import { useEffect, useState } from "react";
import ArtAndCraftCard from "./ArtAndCraftCard";
import { Typewriter } from "react-simple-typewriter";

const CraftItems = () => {
  const [artAndCrafts, setArtAndCraft] = useState([]);

  useEffect(() => {
    fetch("https://drawing-den-server.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setArtAndCraft(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-16 space-y-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-normal">
          <Typewriter
            cursor
            cursorStyle="|"
            typeSpeed={70}
            delaySpeed={1000}
            words={["Crafted Creations Unveiling", "Our Artistic Endeavors"]}
          ></Typewriter>
        </h2>
        <p className="text-sm md:text-base">
          Indulge in a showcase of our meticulously crafted creations, each a
          testament to our passion for artistry. Explore <br /> a gallery filled
          with the heart and soul of our artisans, where creativity knows no
          bounds.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artAndCrafts.map((artAndCraft) => (
          <ArtAndCraftCard key={artAndCraft._id} artAndCraft={artAndCraft} />
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
