import React, { useContext } from 'react'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './Map.scss'
import { AppContext } from '../../App'

const Map = () => {
  const { height } = useContext(AppContext)

  const position = [50.06143, 19.93658]

  const styles = {
    width: '100%',
    height: `calc(100vh - ${height}px)`
  }

  if (!height) {
    return(
      <h1>Loading...</h1>
    )
  }
  return (
    <section>
      <MapContainer style={styles} center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url='https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiZGlsYXJhMjYiLCJhIjoiY2ttaTNrdWk1MGRkZjJwcTRpY29ibXIzNCJ9.xwEFwyG8Pru6CPBwpUBEEQ'
        />
        <Marker position={position}></Marker>
      </MapContainer>
    </section>

  )
}

export default Map
