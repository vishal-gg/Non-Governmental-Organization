"use client"
import { useState, useRef } from "react";
import { storage } from "../lib/firebaseConfig";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { toast } from "sonner";
import {useGalleryContext} from '../contexts/GalleryProvider'

const ImageUpload = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef(null);
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadImageAction, setUploadImageAction] = useState(null)
  const { setImageList } = useGalleryContext()

  const handleImageUpload = async () => {
    if (!image) return toast.error("choose an Image")

    try {
      setLoading(true);
      const storageRef = ref(storage, `gallery/${image.name}`)
      const uploadTask = uploadBytesResumable(storageRef, image)

      uploadTask.on("state_changed", ({ bytesTransferred, totalBytes }) => {
        setUploadProgress(Math.floor((bytesTransferred / totalBytes) * 100))
      })
      // to cancel the uploading process later
      setUploadImageAction(uploadTask)

      await uploadTask;
      const url = await getDownloadURL(uploadTask.snapshot.ref)
      setImageList((prev) => [...prev, url])
    } catch (err) {
      if (err.code === "storage/canceled") {
        toast.warning("upload cancelled!", {duration: 2000})
      } else {
        toast.error("something went wrong! check console for details", {
          duration: 3000,
        })
      }
      console.log(err)
    } finally {
      setUploadProgress(0)
      setLoading(false)
      setImage(null);
      imageRef.current.value = "";
    }
  }

  return (
    <div>
      <input
        ref={imageRef}
        type="file"
        disabled={loading}
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={handleImageUpload} disabled={loading}>
        Upload Image
      </button>
      {loading && (
        <div>
          <h3>{uploadProgress}%</h3>
          <button onClick={() => uploadImageAction.cancel()}>cancel</button>
        </div>
      )}
    </div>
  )
}

export default ImageUpload;
