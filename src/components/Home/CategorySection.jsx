const CategorySection = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl">Our Category</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum vel
          nam voluptate, id blanditiis labore ipsum laborum nisi dolorum esse,
          rerum assumenda voluptatum iste voluptatibus animi et temporibus
          consectetur quaerat?
        </p>
      </div>
      {/* category card */}
      <div
        className="relative flex items-end justify-start text-left bg-center hover:scale-105 transition-all duration-300 bg-cover w-96 h-96"
        style={{
          backgroundImage: "url(https://i.ibb.co/1s8vQ2D/290964065.jpg)",
        }}
      >
        <div className="hero-overlay absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b"></div>
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <a className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-white dark:bg-violet-600">
            Landscape
          </a>
          <div className="flex flex-col justify-start text-center text-white">
            <span className="text-3xl font-semibold leading-none tracking-wide">
              04
            </span>
            <span className="leading-none uppercase">Aug</span>
          </div>
        </div>
        <h2 className="z-10 p-5">
          <a className="font-medium text-md hover:underline text-white">
            Autem sunt tempora mollitia magnam non voluptates
          </a>
        </h2>
      </div>
    </div>
  );
};

export default CategorySection;
