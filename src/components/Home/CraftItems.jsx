import { useEffect, useState } from "react";
import ArtAndCraftCard from "./ArtAndCraftCard";

const CraftItems = () => {
  const [artAndCrafts, setArtAndCraft] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/crafts")
      .then((res) => res.json())
      .then((data) => {
        setArtAndCraft(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl">Our ART And CRAFTS</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum vel
          nam voluptate, id blanditiis labore ipsum laborum nisi dolorum esse,
          rerum assumenda voluptatum iste voluptatibus animi et temporibus
          consectetur quaerat?
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
