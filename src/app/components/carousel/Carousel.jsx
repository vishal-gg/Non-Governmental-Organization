"use client";

import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import picture from "../../../../public/assets/car.jpeg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import {useWindowResize} from '../../hooks/useWindowResize'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Carousel = () => {
  const slides = [picture, picture, picture, picture, picture]
  const [activeIndex, setActiveIndex] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const {width} = useWindowResize()
  const IsMobile = width > 578;

  return (
    <div className="carousel-container">
      <Swiper
        onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        onSlideChangeTransitionStart={() => setShouldAnimate(true)}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={0}
        pagination={{ clickable: false, dynamicBullets: "true" }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              placeholder="blur"
              loading="lazy"
              alt="image"
              fill
            />
            <div className="textContent">
              <motion.div
                animate={i === activeIndex && shouldAnimate ? {opacity: [0, 1,], y: IsMobile ? [20, 0] : 0} : {}}
                transition={{ delay: 0.1, duration: 0.3}}
              >
                <h1>New Hope New Future</h1>
                <motion.p
                animate={i === activeIndex && shouldAnimate ? {opacity: [0, 1,], y: IsMobile ? [20, 0] : 0} : {}}
                  transition={{ delay: 0.15, duration: 0.3}}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </motion.p>
                <motion.button
                animate={i === activeIndex && shouldAnimate ? {opacity: [0, 1,], y: IsMobile ? [30, 0] : 0} : {}}
                  transition={{ delay: 0.2, duration: 0.3}}
                >
                  learn more
                </motion.button>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="controls-group">
        <button className="swiper-button-next"><MdOutlineKeyboardArrowRight/></button>
        <button className="swiper-button-prev"><MdOutlineKeyboardArrowLeft /></button>
      </div>
    </div>
  )
}

export default Carousel;
