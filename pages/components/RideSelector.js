import {React,useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'
const RideSelector = ({pickupCoordinates,dropoffCoordinates}) => {
    const[rideDuration,setRideDuration] = useState(0)
    useEffect(()=>{
      fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoieGVsYXlhaHNrYSIsImEiOiJjbG5veGJ3cTgwangwMmlvYzVoeXhwYmllIn0._KM46bLhKZUpWp3pOf0i9A`
      ).then(res => res.json())
      .then(data => {
        if(data.routes[0] != null)
        {
          setRideDuration(data.routes[0].duration / 25)
        }
      })
    },[pickupCoordinates,dropoffCoordinates])
  return (
    <Wrapper>
      <Title>
        Choose a ride, or swipe up for more
      </Title>
      <CarList>
            { carList.map((car,index)=>(
                 <Car key={index}>
                 <CarImage src={car.imgUrl}/>
                 <CarDetails>
                     <Service>{car.service}</Service>
                     <Time>5 mins</Time>
                 </CarDetails>
                 <Price>Rs. {(rideDuration*car.multiplier).toFixed(2)}</Price>
             </Car>
            )) }
       
      </CarList>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`
const Title = tw.div`
 text-gray-500 text-center text-sm py-2 border-b text-semibold
`
const CarList = tw.div`
overflow-y-scroll
`
const Car = tw.div`
flex p-2 items-center font-semibold mr-2
`
const Service = tw.div`
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`
const CarDetails = tw.div`
flex-1 
`
const CarImage = tw.img`
h-14 mr-4 mt-2
`
export default RideSelector
