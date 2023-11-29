'use client'
import { auth } from './lib/firebaseConfig'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const isAuth = ({Dashboard}) => {
  const IsAuth = (props) => {
    const router = useRouter()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (!user) return router.push('/')
        })
      
        return () => unsubscribe()
      }, [])
      
    if(!auth) return null
    return <Dashboard {...props} />
  }
  return IsAuth
}

export default isAuth;