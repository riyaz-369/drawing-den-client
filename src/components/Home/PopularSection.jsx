import { Typewriter } from "react-simple-typewriter";

const PopularSection = () => {
  return (
    <section className="">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            <Typewriter
              cursor
              cursorStyle="|"
              typeSpeed={70}
              delaySpeed={1000}
              words={["Popular Right Now"]}
            ></Typewriter>
          </h2>
          <p className="text-sm lg:text-base">
            Discover the latest trends and most talked-about artworks
            captivating the art community today. Explore what is trending <br />{" "}
            in the world of art and crafts, from vibrant paintings to intricate
            drawings.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col shadow-md transition-all lg:hover:-translate-y-4 duration-300">
            <a>
              <img
                className="object-cover w-full h-52"
                src="https://i.ibb.co/zZrKvD8/photo-1661862369353-4067af42a6c3-q-80-w-1972-auto-format-fit-crop-ixlib-rb-4-0.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a></a>
              <a className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
                Mountain View Canvas
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Mountain View Canvases that Take Your Crafts
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>June 1, 2024</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col shadow-md transition-all lg:hover:-translate-y-4 duration-300">
            <a>
              <img
                className="object-cover w-full h-52"
                src="https://i.ibb.co/vXB7rf7/photo-1612036782180-6f0b6cd846fe-q-80-w-2070-auto-format-fit-crop-ixlib-rb-4-0.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a></a>
              <a className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
                Superhero Cartoon Drawing
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Dynamic Superhero Cartoon Designs to Inspire and Amaze
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>January 1, 2024</span>
                <span>2.8K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col shadow-md transition-all lg:hover:-translate-y-4 duration-300">
            <a>
              <img
                className="object-cover w-full h-52"
                src="https://i.ibb.co/NWDrHWc/6344595874-55519f0be5-c.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a></a>
              <a className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
                Pencil Sketch Portrait
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Pencil Sketch Portraits that Capture the Essence of Character
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>March 1, 2024</span>
                <span>1.8K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col shadow-md transition-all lg:hover:-translate-y-4 duration-300">
            <a>
              <img
                className="object-cover w-full h-52"
                src="https://i.ibb.co/84BFXV4/premium-photo-1667239426890-dc8bf557397a-q-80-w-1937-auto-format-fit-crop-ixlib-rb-4-0.jpg"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a></a>
              <a className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
                Animal Watercolor Portrait
              </a>
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                Animal Portraits that Capture Natures Majesty
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                <span>March 30, 2024</span>
                <span>1.8K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
