import bgImage1 from "../assets/banner/draw-banner1.png";
import bgImage2 from "../assets/banner/draw-banner2.png";
import bgImage3 from "../assets/banner/draw-banner3.png";
import { useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[75vh] "
      >
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage1})`,
            }}
            className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center -z-10 rounded-3xl"
          >
            <h2
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px]"
            >
              Unleash Your Creativity: Explore, Express, Evolve
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="text-lg font-semibold md:max-w-[900px] text-center py-4"
            >
              A guide to enhancing your creative skills through exploration,
              expression, and personal growth, designed to inspire innovation
              and artistic development.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-easing="ease-in-out"
              className="flex items-center gap-8 mt-10"
            >
              <button className="px-4 py-2 md:px-7  bg-[#E76F51] border-2 border-[#E76F51] hover:bg-transparent hover:border-white rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">
                Discover
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage2})`,
            }}
            className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px]">
              Where Every Stroke Tells a Story
            </h2>
            <p className="text-lg font-semibold md:max-w-[900px] text-center px-8 py-4">
              A captivating exploration of art's power, highlighting personal
              tales and emotions captured in each meticulous, expressive
              brushstroke on canvas.
            </p>
            <div className="flex items-center gap-8 mt-10">
            <button className="px-4 py-2 md:px-7  bg-[#E76F51] border-2 border-[#E76F51] hover:bg-transparent hover:border-white rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">
                Discover
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage3})`,
            }}
            className=" flex flex-col items-center justify-center w-full h-full text-white  bg-cover bg-center rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold md:w-[600px] text-center leading-10 md:leading-[70px] px-2">
              Brush to Canvas, Dreams to Reality
            </h2>
            <p className="text-lg font-semibold md:max-w-[900px] text-center px-8 py-4">
              A vivid exploration of how artistic expression transforms abstract
              visions into tangible, visually stunning works of art on canvas.
            </p>
            <div className="flex items-center gap-8 mt-10">
              <button className="px-4 py-2 md:px-7 bg-[#E76F51] border-2 border-[#E76F51] hover:bg-transparent hover:border-white rounded-[50px] text-lg font-semibold md:font-bold ease-in-out duration-300">
                Discover
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
