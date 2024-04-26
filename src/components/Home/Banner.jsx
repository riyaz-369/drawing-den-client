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
        // autoplay={{
        //   delay: 2500,
        // }}
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
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-violet-600">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner1}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-violet-600">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner2}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-violet-600">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner3}
                  alt=""
                  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
              <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                  Ac mattis
                  <span className="dark:text-violet-600">senectus</span>erat
                  pharetra
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                  Dictum aliquam porta in condimentum ac integer
                  <br className="hidden md:inline lg:hidden" />
                  turpis pulvinar, est scelerisque ligula sem
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
                  >
                    Suspendisse
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
                  >
                    Malesuada
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img
                  src={banner4}
                  alt=""
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
