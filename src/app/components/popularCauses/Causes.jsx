import './Causes.scss'
import Link from 'next/link'
import Image from 'next/image'
import bg from '../../../../public/assets/carousel-bg.jpg'
import bg2 from '../../../../public/assets/carousel-bg2.jpg'
import bg3 from '../../../../public/assets/carousel-bg3.jpg'

const Causes = () => {
  return (
    <div className="causes-container">
        <div>
            <p>Start Donating Them</p>
            <h2>Find Popular Causes</h2>
        </div>
        <div className="causes-wrapper">
            <div className="card-1">
                <div>
                    <Image src={bg} fill alt="image" placeholder='blur' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <h5>Your little kindness can profoundly heal their pains.</h5>
                <p>Heal wounds with your support—making a difference, one donation at a time.</p>
                <div className='progress-bar'><span style={{transform: 'scaleX(.18)'}}></span></div>
                <div className='donate-target'>
                    <div>
                        <span>Achieved: <strong>₹70,000</strong></span> <br />
                        <span>Target: <strong>₹370,000</strong></span>
                    </div>
                    <div>
                        <p><span>18%</span><span>Pledged So Far</span></p>
                    </div>
                </div>
                <Link href="/donate">Donate</Link>
            </div>
            <div className="card-2">
                <div>
                    <Image src={bg2} fill alt="image" placeholder='blur' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <h5>Give poor childrens a good education</h5>
                <p>Empower children with education. Your support shapes brighter futures.</p>
                <div className='progress-bar'><span style={{transform: 'scaleX(.13)'}}></span></div>
                <div className='donate-target'>
                    <div>
                        <p>Achieved: <strong>₹50,000</strong></p>
                        <p>Target: <strong>₹370,000</strong></p>
                    </div>
                    <div>
                        <p><span>13%</span><span>Pledged So Far</span></p>
                    </div>
                </div>
                <Link href="/donate">Donate</Link>
            </div>
            <div className="card-3">
                <div>
                    <Image src={bg3} fill alt='image' placeholder='blur' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <h5>Raise funds for clean & healthy food</h5>
                <p>Fund clean, healthy food. Nourish lives with your generous support.</p>
                <div className='progress-bar'><span style={{transform: 'scaleX(.24)'}}></span></div>
                <div className='donate-target'>
                    <div>
                        <span>Achieved: <strong>₹90,000</strong></span> <br />
                        <span>Target: <strong>₹370,000</strong></span>
                    </div>
                    <div>
                        <p><span>24%</span><span>Pledged So Far</span></p>
                    </div>
                </div>
                <Link href="/donate">Donate</Link>
            </div>
        </div>
    </div>
  )
}

export default Causes
