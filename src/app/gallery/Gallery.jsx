"use client"
import { toast } from "sonner"
import { ref, deleteObject, listAll, getDownloadURL } from "firebase/storage"
import { storage } from "../lib/firebaseConfig"
import DynamicBlurImage from "./DynamicBlurImage"
import { useGalleryContext } from "../contexts/GalleryProvider"
import { useState, useEffect } from "react"

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
        } finally {setLoading(false)}
    }

     if(imageList.length === 0) fetchImages()
  }, [imageList.length, setImageList])

  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        rowGap: "3rem",
        paddingBlock: "5rem",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
                flexBasis: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "lightcoral",
                }}
              ></div>
            </div>
          ))
        : !error ? (
          imageList.map((src, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                width: "300px",
                height: "300px",
                flexBasis: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <DynamicBlurImage src={src} />
              <button
                style={{
                  padding: "5px 10px",
                  position: "absolute",
                  zIndex: 999,
                }}
                onClick={() => handleDeleteImage(src)}
              >
                delete
              </button>
            </div>
          ))
        ) : (
          <pre>{JSON.stringify(error, null, 2)}</pre>
        ) }
    </div>
  )
}

export default Gallery
