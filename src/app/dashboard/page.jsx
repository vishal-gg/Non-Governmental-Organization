'use client'
import Image from "next/image";
import src from '../../../public/assets/dashboard.svg'
import isAuth from '../isAuth'

const page = () => {
  return (
    <div style={{display: 'grid', placeContent: 'center', height: '100%'}}>
        <h2 style={{textAlign: 'center'}}>Dashboard</h2>
        <Image src={src} width={700} height={500} alt="dashboard" style={{objectFit: 'contain'}} />
    </div>
  )
}

export default isAuth({Dashboard: page});
