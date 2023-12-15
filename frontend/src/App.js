import * as React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import "./app.css"


function App() {
  const [viewPort, setViewport] = useState({
    latitude: 51.5007,
    longitude: -0.1246,
    zoom: 12,
  });

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <ReactMapGL
        {...viewPort}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewPort) => setViewport(viewPort)}
      >
        <Marker longitude={-0.1246} latitude={51.5007}>
        <PlaceIcon style={{ color: 'slateblue' }} />
        </Marker>
        <Popup
          longitude={-0.1246} 
          latitude={51.5007}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
            <div className="card">
              <label>Place</label>
              <h4 className="place">Big Ben</h4>
              <label>Review</label>
              <p className="desc"> Nice place </p>
              <label>Rating</label>
              <div className="stars">
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              </div>
              <label>Information</label>
              <span className="username"> Created by <b>samir</b></span>
              <span className="date"> 1 hour ago <b></b></span>
            </div>
          </Popup>

      </ReactMapGL>
    </div>
  );
}

export default App;