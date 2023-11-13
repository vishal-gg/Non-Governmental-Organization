"use client"
import { createContext, useContext, useState } from "react"

const galleryContext = createContext()
 
export const GalleryProvider = ({children}) => {
    const [imageList, setImageList] = useState([])

    // I'm not fetching images here because they will be
    // invoked as soon as the website loads.

  return (
    <galleryContext.Provider value={{imageList, setImageList}}>
      {children}
    </galleryContext.Provider>
  )
}

export const useGalleryContext = () => useContext(galleryContext)