import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoieGVsYXlhaHNrYSIsImEiOiJjbG5veGJ3cTgwangwMmlvYzVoeXhwYmllIn0._KM46bLhKZUpWp3pOf0i9A';

const Map = (props) => 
{
  //console.log(props)
    useEffect(() => 
    {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [76.267303, 9.931233],
        zoom: 10
        })
        if(props.pickupCoordinates)
        {
          addToMap(map,props.pickupCoordinates)
        }
        if(props.dropoffCoordinates)
        {
          addToMap(map,props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates)
        {
          map.fitBounds([
            props.pickupCoordinates,
            props.dropoffCoordinates
          ],
          {
            padding: 60
          }
          )
        }
    },[props.pickupCoordinates, props.dropoffCoordinates])

        const addToMap = (map,coordinates) =>
        {
          const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);
        }
  return (
    <Wrapper id='map'>
      
    </Wrapper>
  )
}
const Wrapper = tw.div`
flex-1 h-1/2 flex
`


export default Map
