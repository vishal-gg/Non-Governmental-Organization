import './NonProfitCenter.scss'
import {GiGraduateCap} from 'react-icons/gi' 
import {BiSolidDonateHeart} from 'react-icons/bi' 
import Image from 'next/image'
import volunteerPng from '../../../../public/assets/volunteer.png'

const NonProfitCenter = () => {
  return (
    <div className="profit-center-container">
      <div className="profit-center-wrapper">
        <div className="section-1">
          <div>
            <Image src={volunteerPng} fill alt='image'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="section-2">
          <p>Welcome to Charity Platform</p>
          <h3>Trushted Non-Profit<br /> Charity Center</h3>
          <p>Charity activities are taken place around the world.</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don&rsquo;t look even slightly believable.</p>
          <div className='childrens-eduction-wrapper'>
            <div><GiGraduateCap /></div>
            <div>
              <h5>Childrens Education</h5>
              <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor anagi icdunt ut</p>
            </div>
          </div>
          <div className='support-them-wrapper'>
            <div><BiSolidDonateHeart /></div>
            <div>
              <h5>Support Them</h5>
              <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor anagi icdunt ut</p>
            </div>
          </div>
          <button>Discover More</button>
        </div>
      </div>      
    </div>
  )
}

export default NonProfitCenter
