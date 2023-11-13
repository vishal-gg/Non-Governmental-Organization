'use client'
import './ScrollTop.scss'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'
import {useState, useEffect} from 'react'

const handleScrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const ScrollTop = () => {
    
    const [isVisible, setIsvisible] = useState(false)
    const [lastScrollPos, setLastScrollPos] = useState(0)

    
    useEffect(()=> {
        // should only visible when scrolling up

        const handleBtnVisibility = () => {
            const currentScrollPos = window.scrollY;

            if (lastScrollPos <= currentScrollPos)  setIsvisible(false) 
            else if (currentScrollPos === 0) setIsvisible(false)
            else setIsvisible(true)

            setLastScrollPos(currentScrollPos)
        }

        document.addEventListener('scroll', handleBtnVisibility)
        return () => document.removeEventListener('scroll', handleBtnVisibility)

    },[lastScrollPos])

  return (
    <div className='scroll-top-container' data-visible={`${isVisible}`}>
      <div className='scroll-top-wrapper'>
          <button className='scroll-top' onClick={handleScrollTop}>
            <MdOutlineKeyboardArrowUp />
          </button>
      </div>
    </div>
  )
}

export default ScrollTop
