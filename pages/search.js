import {React,useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';
const Search = () => {

  const [pickup,setPickup] = useState("");
  const [dropoff,setDropoff] = useState("");

  return (
    <Wrapper>
      <ButtonContainer>
      <Link href="/" passHref legacyBehavior>
        <BackButton src="\BackArrow.png"/>
      </Link>
      </ButtonContainer>
      <InputContainer>
      <FromToIcons>
        <Circle src='\CircleGray.png'/>
        <Line src='\VerticalLine.png'/>
        <Square src='\BlackSquare.png'/>
      </FromToIcons>
      <InputBoxes>

        <Input placeholder='Enter pickup location'
          value={pickup}
          onChange={(e)=>setPickup(e.target.value)}
        />
        <Input placeholder='Where to'
          value={dropoff}
          onChange={(e)=>setDropoff(e.target.value)}
        />
      </InputBoxes>
      <PlusIcon src="\plus.png"/>
      </InputContainer>
      <SavedPlaces>
        <StarIcon src='\Star.png'/>
        Saved Places
      </SavedPlaces>
      <ConfirmLocations>
      <Link href=
      {{pathname:"/confirm",
        query: {
          pickup: pickup,
          dropoff: dropoff
        }
       }} 
      passHref legacyBehavior>
        <ConfirmLocationsButton>
          Confirm Locations
        </ConfirmLocationsButton> 
      </Link>
      </ConfirmLocations>
    </Wrapper>
  )
}

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4 py-4
`
const BackButton = tw.img`
h-12 transform hover:scale-105 transition cursor-pointer
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2

`
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle = tw.img`
h-3
`
const Line = tw.img`
h-10 w-1 py-1
`
const Square = tw.img`
h-2 
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 mb-2
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmLocations = tw.div`
flex
`
const ConfirmLocationsButton = tw.div`
font-bold mx-8 my-4 bg-black text-white text-center py-2 transform hover:scale-105 transition flex-1 items-center cursor-pointer
`
export default Search
