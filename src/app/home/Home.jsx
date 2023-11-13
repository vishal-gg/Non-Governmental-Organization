'use client'
import './Home.scss'
import Carousel from '../components/carousel/Carousel'
import ToggleTheme from '../components/toggleTheme/ToggleTheme'
import {useAuth} from '../contexts/AuthProvider'
import Programmes from '../components/programmes/Programmes'
import NonProfitCenter from '../components/nonProfitCenter/NonProfitCenter'

import Impact from '../components/impact/Impact'

const Home = () => {
  const {loading, handleSignIn, hadleSignOut, user, authStatus} = useAuth()
  return (
    <div className='home-container'>
      <div className="hero-section">
        <Carousel />
        <Programmes />
        <NonProfitCenter />
        <Impact />
      </div>
     <ToggleTheme />
     {authStatus === 'pending' ? (
      <div>Loading..</div>
     ) : (
      !user ? (
        <button disabled={loading} onClick={()=>handleSignIn('forfirebasestuff@gmail.com', 'password123')}>{!loading ? 'sign In' : 'loading..'}</button>
      ) : (
       <button onClick={hadleSignOut}>sign out</button>
      )
     )}
     
    </div>
  )
}

export default Home
