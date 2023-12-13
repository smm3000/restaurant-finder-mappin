import * as React from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';

function App() {
  const [viewPort, setViewport] = useState({
    latitude: 51.5007,
    longitude: -0.1246,
    zoom: 12,
  });

  return (
    <div className="App" style={{ width: '70vw', height: '70vh' }}>
      <ReactMapGL
        {...viewPort}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewPort) => setViewport(viewPort)}
      >
       <Marker longitude={-0.1246} latitude={51.5007}>
        <PlaceIcon style={{ color: 'slateblue' }} />
      </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;