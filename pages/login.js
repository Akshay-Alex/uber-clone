import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import {auth,provider} from '../firebase'

const Login = () => {
    const router = useRouter()
    useEffect(()=>{
        onAuthStateChanged(auth,user =>{
          if(user)
          {
            router.push('/')
          }  
        })
    })
  return (
    <Wrapper>
        <UberLogo src='\taxi-sign.svg'/>
        <Title>Log in to access your account</Title>
        <DriverImage src='driver.png'/>
      <SignInButton onClick={() => signInWithPopup(auth,provider)}>
        Sign in with google
      </SignInButton>
    </Wrapper>
  )
}
const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`
const SignInButton = tw.button`
bg-black text-white text-center p-4 mt-8 self-center w-full
`
const UberLogo = tw.img`
h-28 self-start
`
const Title = tw.div`
text-5xl pt-4 text-gray-500
`
const DriverImage = tw.img`

`
export default Login
