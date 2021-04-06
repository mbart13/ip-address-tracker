import React, { useContext, useEffect } from 'react'
import L from 'leaflet'
import './Map.scss'
import { AppContext } from 'App'

const Map = () => {
  const { height, results } = useContext(AppContext)
  const { lat, lng } = results.location
  const { REACT_APP_ACCESS_TOKEN } = process.env;

  useEffect(() => {
    const position = [lat, lng]
    const map = L.map('map').setView(position, 12);
    L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${REACT_APP_ACCESS_TOKEN}`, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);

    L.marker(position).addTo(map);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lng])


  return (
    <div style={{ width: '100%', height: `calc(100vh - ${height}px)`}} id="map">
    </div>
  )
}

export default Map
