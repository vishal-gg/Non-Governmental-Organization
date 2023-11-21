"use client"
import './page.scss'
import { toast } from "sonner"
import { ref, listAll, getDownloadURL } from "firebase/storage"
import { storage } from "../lib/firebaseConfig"
import { useGalleryContext } from "../contexts/GalleryProvider"
import { useState, useEffect, useRef } from "react"
import Image from 'next/image'
import plane1 from '../../../public/assets/plane1.png'
import plane2 from '../../../public/assets/plane2.png'
import { motion } from 'framer-motion'
import Masonary, {ResponsiveMasonry} from 'react-responsive-masonry'
import Preview from './Preview'
import { useWindowResize } from '../hooks/useWindowResize'

const Gallery = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {imageList, setImageList } = useGalleryContext()
  const [preview, setPreview] = useState(null)
  const {width} = useWindowResize()


  useEffect(()=> {
    const fetchImages = async () => {
      try {
          setLoading(true)
          const imageRef = await listAll(ref(storage, "gallery"))
          const images = await Promise.all(imageRef.items.map(item => getDownloadURL(item)))
      
          setImageList(images)
        } catch (err) {
          console.log(err)
          setError(err)
          toast.error(err.message)
        } finally {setLoading(false)}
    }

     if(imageList.length === 0) fetchImages()
  }, [imageList.length, setImageList])

  const titleRef = useRef(null)
  const [mousePos, setMousePos] = useState({x: 0, y: 0})

  const handleMouseMove = (e) => {
    const {left, top, width, height} = titleRef.current.getBoundingClientRect()
    const x = e.clientX - (left + width / 2)
    const y = e.clientY - (top + height / 2)

    const speed = 0.02;
    setMousePos({x: x*speed, y: y*speed})
  }


    // // Function to shuffle images in the gallery
    // const shuffleImages = () => {
    //   const shuffledArray = [...imageList].sort(() => Math.random() - 0.5);
    //   setImageList(shuffledArray);
    // };
  
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     shuffleImages();
    //   }, 5000);
  
    //   return () => clearInterval(intervalId);
    // }, [imageList]);

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          className="gallery-header"
        >
          <h2 ref={titleRef}>Image Gallery</h2>
          <motion.div
            animate={{ x: mousePos.x, y: mousePos.y }}
            transition={{ type: "tween" }}
            className="plane-1"
          >
            <Image
              src={plane1}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder='blur'
              draggable={false}
            />
          </motion.div>
          <motion.div
            animate={{ x: -mousePos.x, y: -mousePos.y }}
            transition={{ type: "tween" }}
            className="plane-2"
          >
            <Image
              src={plane2}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder='blur'
              draggable={false}
            />
          </motion.div>
        </div>
        <div className="masonary-wrapper">
          {loading ? (
            <div className="skeleton-wrapper">
              <div>{Array.from({ length: 9 }).map((_, i) => (<div key={i} />))}</div>
            </div>
            
          ) : error ? (
            <div className='gallery-error'>{error.message}</div>
          ) : (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 400: 1, 578: 2, 768: 3 }}
            >
              <Masonary gutter="10px">
                {imageList.map((src, i) => (
                  <div key={i}>
                    <motion.img
                    layoutId={src}
                    // layout // this is related shuffle logic
                    whileHover={width > 578 ? {borderRadius: '50%'} : {}}
                    whileTap={width > 578 ? {scale: .95} : {}}
                    onClick={()=> setPreview(src)}
                      style={{ width: "100%", display: "block"}}
                      src={src}
                      alt="image"
                      loading='lazy'
                      draggable={false}
                    />
                  </div>
                ))}
              </Masonary>
            </ResponsiveMasonry>
          )}
        </div>
        {preview && width > 578 && <Preview preview={preview} setPreview={setPreview} />}
      </div>
    </div>
  );
}

export default Gallery
