"use client"
import { toast } from "sonner"
import { ref, deleteObject, listAll, getDownloadURL } from "firebase/storage"
import { storage } from "../lib/firebaseConfig"
import { useGalleryContext } from "../contexts/GalleryProvider"
import { useState, useEffect, useRef } from "react"
import Image from 'next/image'

const Gallery = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const {imageList, setImageList } = useGalleryContext()

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
          toast.error(err.message)
        } finally {setLoading(false)}
    }

     if(imageList.length === 0) fetchImages()
  }, [imageList.length, setImageList])


  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <div className="masonary-wrapper">
          {loading ? (
            <div className="skeleton-wrapper">
              loading...
            </div>
            
          ) : error ? (
            <div className='gallery-error'>{error.message}</div>
          ) : (
           <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            {imageList.map((src, i) => (
              <div key={i} style={{position: 'relative', width: '300px', aspectRatio: 1}}>
                <Image src={src} alt="image" fill sizes="(max-width: 600px) 100vw, 600px" style={{objectFit: 'cover'}} />
              </div>
            ))}
           </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gallery
