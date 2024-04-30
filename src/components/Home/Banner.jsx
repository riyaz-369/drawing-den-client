import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import banner1 from "./../../assets/banner/banner1.png";
import banner2 from "./../../assets/banner/banner2.svg";
import banner3 from "./../../assets/banner/banner3.png";
import banner4 from "./../../assets/banner/banner4.svg";

import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
        }}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      >
        <SwiperSlide>
          <section className="">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left p-6 lg:p-0">
                <h1 className="text-2xl md:text-3xl font-bold leading-none lg:text-5xl">
                  Inspiration
                  <span className="dark:text-violet-600">Everywhere</span>
                  <br />
                  Artistry in Everyday{" "}
                  <span className="text-violet-600">Moments</span>
                </h1>
                <p className="mt-6 mb-8 text-sm lg:text-base sm:mb-12">
                  Transforming blank pages into vibrant characters: Join us to
                  explore the art of sketching!
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a className="banner-btn">Explore</a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner1}
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left p-6 lg:p-0">
                <h1 className="text-2xl md:text-3xl font-bold leading-none lg:text-5xl">
                  Sketching Dreams
                  <span className="dark:text-violet-600">Where</span>
                  <br />
                  Imagination Takes{" "}
                  <span className="text-violet-600">Shapes</span>
                </h1>
                <p className="mt-6 mb-8 text-sm lg:text-base sm:mb-12">
                  Discover artistry in the mundane where every glance sparks
                  creativity. Join our inspirational community today!
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a className="banner-btn">Explore</a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner2}
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left p-6 lg:p-0">
                <h1 className="text-2xl md:text-3xl font-bold leading-none lg:text-5xl">
                  Visionaries Unite
                  <span className="dark:text-violet-600">Discover</span>
                  <br />
                  the Beauty of Art in
                  <span className="text-violet-600">Every Stroke</span>
                </h1>
                <p className="mt-6 mb-8 text-sm lg:text-base sm:mb-12">
                  See art in every stroke, Join us to celebrate diverse
                  creativity and endless inspiration!
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a className="banner-btn">Explore</a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner3}
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="">
            <div className="container max-w-7xl mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left p-6 lg:p-0">
                <h1 className="text-2xl md:text-3xl font-bold leading-none lg:text-5xl">
                  Worlds Collide
                  <span className="dark:text-violet-600">Where</span>
                  <br />
                  Three
                  <span className="text-violet-600">Artistic Fusion</span>
                </h1>
                <p className="mt-6 mb-8 text-sm lg:text-base sm:mb-12">
                  Three worlds unite, Explore diverse art forms and boundless
                  creativity in our vibrant community!
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a className="banner-btn">Explore</a>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner4}
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
