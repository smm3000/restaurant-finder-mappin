import { useEffect, useState }from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import "./app.css"
import axios from "axios";

function App() {
  const [pins, setPins] = useState([]); 
  const [viewPort, setViewport] = useState({
    latitude: 51.5007,
    longitude: -0.1246,
    zoom: 12,
  });

  useEffect(() => {
     const getPins = async () => {
      try {
        const allPins = await axios.get("/api/pins");
        setPins(allPins.data);
      } catch (err) {
        console.log(err);
      }
     };
     getPins();
  }, []);  

  return (
    <div className="App" style={{ width: '100vw', height: '100vh' }}>
      <ReactMapGL
        {...viewPort}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(viewPort) => setViewport(viewPort)}
      >
        {pins.map(p=> (
          <>
        <Marker longitude={p.long} 
        latitude={p.lat}>
        <PlaceIcon style={{ color: 'slateblue' }} />
        </Marker>
        <Popup
          longitude={p.long} 
          latitude={p.lat}
          closeButton={true}
          closeOnClick={false}
          anchor="left" >
            <div className="card">
              <label>Place</label>
              <h4 className="place">{p.title}</h4>
              <label>Review</label>
              <p className="desc"> {p.desc}</p>
              <label>Rating</label>
              <div className="stars">
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              <StarIcon className="star"/>
              </div>
              <label>Information</label>
              <span className="username"> Created by <b>{p.username}</b></span>
              <span className="date"> 1 hour ago <b></b></span>
            </div>
          </Popup> </>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default App;