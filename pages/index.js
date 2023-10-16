import { useEffect,useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import tw from "tailwind-styled-components"
import Map from './components/Map';
import Link from 'next/link';
import {auth} from '../firebase'
import {onAuthStateChanged,signOut } from 'firebase/auth';
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[user,setUser] = useState(null)
  const router = useRouter()
  useEffect(()=>{
    return onAuthStateChanged(auth, user=>{
      if(user)
      {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      }
      else
      {
        setUser(null)
        router.push('\login')
      }
    })
    },[])
 
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        <Header>
          <UberLogo src="\taxi-sign.svg"/>
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage src={user && user.photoUrl} onClick={()=> signOut(auth)}/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search" passHref legacyBehavior>
          <ActionButton>
            <ActionButtonImage src="\car.png"/>
            Ride</ActionButton>
            </Link>
          <ActionButton>
          <ActionButtonImage src="\cycle.png"/>
            Wheels</ActionButton>
          <ActionButton>
          <ActionButtonImage src="\reserve.png"/>
            Reserve</ActionButton>
        </ActionButtons>
        <InputButton>Where to</InputButton>
      </ActionItems>
   </Wrapper>
  )
}
const Wrapper = tw.div`
flex flex-col h-screen
`
const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`

const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 text-lg w-25 font-semibold 
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
`
const ActionButtons= tw.div`
flex
`
const ActionButton= tw.div`
bg-gray-400 flex-1 m-4 h-40 flex items-center flex-col justify-center font-bold rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`

const ActionButtonImage= tw.img`
h-3/5
`
const InputButton= tw.div`
h-20 bg-gray-400 text-2xl font-bold p-4 m-4 rounded-lg flex items-center
`