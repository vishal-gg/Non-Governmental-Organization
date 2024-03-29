"use client";

import "./Carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../../../../public/assets/carousel-bg.jpg";
import bg2 from "../../../../public/assets/carousel-bg2.jpg";
import bg3 from "../../../../public/assets/carousel-bg3.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Carousel = () => {

  const slides = [
    { src: bg, title: 'Think & Give Charity', text: 'Inspire Positive Change with Small Acts, Creating Big Impact.' },
    { src: bg2, title: 'Empower Dreams', text: 'Empowering Lives Through Education and Opportunities' },
    { src: bg3, title: 'Nourish Hope', text: 'Nourishing Futures: Providing Meals for a Brighter Tomorrow' }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const router = useRouter()

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
        {slides.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              src={image.src}
              placeholder="blur"
              loading="lazy"
              alt="image"
              fill
            />
            <div className="textContent">
              <motion.div
                animate={i === activeIndex && shouldAnimate ? {opacity: [0, 1,], y: [20, 0]} : {}}
                transition={{ delay: 0.1, duration: 0.3}}
              >
                <h1>{image.title}</h1>
                <motion.p
                animate={i === activeIndex && shouldAnimate ? {opacity: [0, 1,], y: [20, 0]} : {}}
                  transition={{ delay: 0.15, duration: 0.3}}
                >
                  {image.text}
                </motion.p>
                <motion.button
                onClick={()=> router.push('/donate')}
                animate={i === activeIndex && shouldAnimate ? {opacity: [0, 1,], y: [30, 0]} : {}}
                  transition={{ delay: 0.2, duration: 0.3}}
                >
                  Help Them
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
