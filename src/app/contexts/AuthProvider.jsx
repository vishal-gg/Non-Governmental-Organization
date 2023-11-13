"use client"
import { createContext, useContext, useState, useEffect } from "react";
import {auth} from '../lib/firebaseConfig'
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import {toast} from 'sonner'

const authContext = createContext()

export const AuthProvider = ({ children }) => {
    
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState('pending')

  // signIn with email and password
  const handleSignIn = async (email, password) => {
   try {
      setLoading(true)
      await signInWithEmailAndPassword(auth, email, password)
      toast.success("Logged In successfully", {duration: 2000})
    } catch (err) {
      console.log(err)
      let filteredError = err.message.replace(/(Firebase|Error|auth|[^a-zA-Z0-9 ])/g, " ")
      toast.error(filteredError)

   } finally {setLoading(false)}
  }

  // logout current user
  const hadleSignOut = async () => {
    await signOut(auth)
    toast.success('See you next time!', {duration: 2000})
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser)
      setAuthStatus('resolved')
    })

    return () => unsubscribe()
  }, [user])

  return (
    <authContext.Provider value={{handleSignIn, hadleSignOut, loading, user, authStatus}}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext);
