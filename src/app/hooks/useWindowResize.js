import { useEffect, useState } from "react";

export const useWindowResize = () => {

    const [windowSize, setWindowSize] = useState(()=> {
      if(typeof window !== 'undefined') {
        return ({
          width: window.innerWidth,
          height: window.innerHeight
        })
      } else return ({width: 0, height: 0})
    })

    useEffect(() => {
      if(typeof window !== 'undefined' && window.screen) {
        const handleResize = () => {
          setWindowSize({width: window.innerWidth, height: window.innerHeight})
        }
  
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }
    }, [])

    return windowSize;
}
