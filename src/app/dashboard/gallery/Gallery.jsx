"use client";
import "./Gallery.scss";
import { toast } from "sonner";
import { ref, deleteObject, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../lib/firebaseConfig";
import { useGalleryContext } from "../../contexts/GalleryProvider";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const Gallery = () => {
  const [loading, setLoading] = useState(false)
  const [loadingForDeletetion, setLoadingForDeletetion] = useState(false)
  const [error, setError] = useState("")
  const { imageList, setImageList } = useGalleryContext()

  const handleDeleteImage = async (src) => {
    const imageName = decodeURIComponent(src).split("/").pop().split("?")[0]
    const imageRefToDelete = ref(storage, `gallery/${imageName}`)

    try {
      toast.loading("loading..")
      setLoadingForDeletetion(true)
      await deleteObject(imageRefToDelete)

      setImageList((prev) => prev.filter((url) => url !== src))
      toast.success("Image deleted successfully");
    } catch (err) {
      toast.error("Error deleting the image: " + err)
    } finally {
      toast.dismiss()
      setLoadingForDeletetion(false)
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const imageRef = await listAll(ref(storage, "gallery"));
        const images = await Promise.all(
          imageRef.items.map((item) => getDownloadURL(item))
        );

        setImageList(images);
      } catch (err) {
        console.log(err);
        setError(err);
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (imageList.length === 0) fetchImages()
  }, [imageList.length, setImageList])

  return (
    <div className="dashboard-gallery-container">
      <div className="dashboard-gallery-wrapper">
        <div className="dashboard-masonary-wrapper">
          {loading ? (
            <div className="skeleton-wrapper">loading...</div>
          ) : error ? (
            <div className="dashboard-gallery-error">{error.message}</div>
          ) : (
            <div className="gallery-wrapper">
              {imageList.map((src, i) => (
                <div key={i}>
                  <motion.div whileHover={{ scale: 1.1}}>
                    <motion.span whileHover={{backdropFilter: 'blur(10px)'}}>
                      <MdDelete onClick={() => handleDeleteImage(src)} style={{pointerEvents: loadingForDeletetion ? 'none' : 'initial'}} />
                    </motion.span>
                    <Image
                      src={src}
                      alt="image"
                      fill
                      sizes="(max-width: 600px) 100vw, 600px"
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Gallery;
