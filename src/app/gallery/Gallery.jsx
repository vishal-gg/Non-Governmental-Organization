"use client"
import './Gallery.scss'
import { toast } from "sonner"
import { ref, deleteObject, listAll, getDownloadURL } from "firebase/storage"
import { storage } from "../lib/firebaseConfig"
import { useGalleryContext } from "../contexts/GalleryProvider"
import { useState, useEffect, useRef } from "react"
import Image from 'next/image'
import plane1 from '../../../public/assets/plane1.png'
import plane2 from '../../../public/assets/plane2.png'
import { motion } from 'framer-motion'
import Masonary, {ResponsiveMasonry} from 'react-responsive-masonry'
import Preview from './Preview'

const Gallery = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {imageList, setImageList } = useGalleryContext()
  const [preview, setPreview] = useState(null)

  const handleDeleteImage = async (src) => {
    const imageName = decodeURIComponent(src).split("/").pop().split("?")[0]
    const imageRefToDelete = ref(storage, `gallery/${imageName}`)

    try {
      toast.loading("loading..")
      await deleteObject(imageRefToDelete)

      setImageList((prev) => prev.filter((url) => url !== src))
      toast.success("Image deleted successfully")
    } catch (err) {
      toast.error("Error deleting the image: " + err)
    } finally { toast.dismiss() }
  }


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
    setMousePos({x, y})
  }

  const speed = 0.02;

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
            animate={{ x: mousePos.x * speed, y: mousePos.y * speed }}
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
            animate={{ x: -mousePos.x * speed, y: -mousePos.y * speed }}
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
          {!loading ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 400: 1, 578: 2, 768: 3 }}
            >
              <Masonary gutter="10px">
                {imageList.map((src, i) => (
                  <div key={i}>
                    <motion.img
                    layoutId={src}
                    // layout // this is related shuffle logic
                    whileHover={{borderRadius: '50%'}}
                    whileTap={{scale: .95}}
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
          ) : (
            <div className="skeleton-wrapper">
              <div>{Array.from({ length: 9 }).map((_, i) => (<div key={i} />))}</div>
            </div>
          )}
        </div>
        {preview && <Preview preview={preview} setPreview={setPreview} />}
      </div>
    </div>
  );
}

export default Gallery
