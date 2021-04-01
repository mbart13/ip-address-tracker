import React, { useContext, useEffect } from 'react'
import L from 'leaflet'
import './Map.scss'
import { AppContext } from '../../App'

const Map = () => {
  const { height, results } = useContext(AppContext)
  const { lat, lng } = results.location

  useEffect(() => {
    const position = [lat, lng]
    const map = L.map('map').setView(position, 12);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWJhcnQxMyIsImEiOiJja21tNDJic2UxaDAxMndrNWh3bGlyb3E3In0.VoxqmgavdRfP0DRPxpvidA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);

    L.marker(position).addTo(map);
  }, [lat, lng])


  return (
    <div style={{ width: '100%', height: `calc(100vh - ${height}px)`}} id="map">
    </div>
  )
}

export default Map
