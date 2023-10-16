import React from 'react'
import { useEffect,useState } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const { pickup,dropoff } = router.query 

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])
    const getPickupCoordinates  = (pickup) =>
    {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoieGVsYXlhaHNrYSIsImEiOiJjbG5veGJ3cTgwangwMmlvYzVoeXhwYmllIn0._KM46bLhKZUpWp3pOf0i9A",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data =>{
            if(data.features[0] != null)
            {
                setPickupCoordinates(data.features[0].center)
            }       
        })
    }
    const getDropOffCoordinates  = (dropoff) =>
    {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoieGVsYXlhaHNrYSIsImEiOiJjbG5veGJ3cTgwangwMmlvYzVoeXhwYmllIn0._KM46bLhKZUpWp3pOf0i9A",
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data =>{
            if(data.features[0] != null)
            {
                setDropoffCoordinates(data.features[0].center)
            }         
        })
    }
    useEffect(()=>{
        getPickupCoordinates (pickup);
        getDropOffCoordinates (dropoff);
    },[pickup,dropoff])
  return (
    <Wrapper>
        <ButtonContainer>
            <Link href="/search" passHref legacyBehavior>
                <BackButton src="\BackArrow.png"/>
            </Link>
        </ButtonContainer>
      <Map
        pickupCoordinates = {pickupCoordinates}
        dropoffCoordinates = {dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
         pickupCoordinates = {pickupCoordinates}
         dropoffCoordinates = {dropoffCoordinates}
        />
        <ConfirmButtonContainer>
            <ConfirmButton>
                Confirm
            </ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}
const Wrapper = tw.div`
flex flex-col h-screen bg-white
`
const RideContainer = tw.div`
flex flex-1 flex-col h-1/2
`
const ButtonContainer = tw.div`
h-20 w-20 z-10 rounded-full absolute top-4 left-4  bg-white shadow-md cursor-pointer
` 
const BackButton = tw.img`
h-full object-contain p-4 bg-red transform hover:scale-105 transition cursor-pointer
`
const ConfirmButtonContainer = tw.div`
border-t-2 
`
const ConfirmButton = tw.div `
text-white bg-black my-4 mx-4 font-bold text-xl py-4 text-center cursor-pointer
`

export default Confirm
