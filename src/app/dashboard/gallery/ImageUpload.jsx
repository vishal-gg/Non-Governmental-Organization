"use client"
import './ImageUpload.scss'
import { useState, useCallback } from "react";
import { storage } from "../../lib/firebaseConfig";
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { toast } from "sonner";
import {useGalleryContext} from '../../contexts/GalleryProvider'
import {useDropzone} from 'react-dropzone'
import {formatBytes} from '../../utils/formatBytes'
import { FaPlus, FaImage } from 'react-icons/fa6';

const ImageUpload = () => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(50)
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
    }
  }

  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length > 1) {
      toast.error('limit exceeded! 1 is the limit')
      setImage(null)
    } else {
      setImage(acceptedFiles[0])
    }
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (
    <div className="uploadImage-container">
      <div
        data-active={isDragActive && "true"}
        {...getRootProps()}
        className="dragzone-wrapper"
      >
        <span className="upload-placeholder">
          {image ? <FaImage /> : <FaPlus />}
        </span>
        <input {...getInputProps()} />
        {!image ? (
          isDragActive ? (
            <strong>Drop the file here ...</strong>
          ) : (
            <strong>Click or Drag & Drop</strong>
          )
        ) : loading ? (
          <div className="upload-progress-bar">
            <p>{uploadProgress}%</p>
            <span
              style={{ transform: `scaleX(${uploadProgress * 0.01})` }}
            ></span>
          </div>
        ) : (
          <>
            <strong style={{ color: "#ec2e58" }}>{image && image.name}</strong>
            <span style={{ fontSize: "12px", marginTop: "5px" }}>
              {image && formatBytes(image.size)}
            </span>
          </>
        )}
      </div>
      {image &&
        (!loading ? (
          <button className="image-upload" onClick={handleImageUpload}>
            upload
          </button>
        ) : (
          <button
            className="cancel-upload"
            onClick={() => uploadImageAction.cancel()}
          >
            cancel
          </button>
        ))}
    </div>
  );
}

export default ImageUpload;
