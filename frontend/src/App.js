import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import { useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';

function App() {
  const [viewPort, setViewport] = useState({
    latitude: 51.5007,
    longitude: -0.1246,
    zoom: 12,
  });

  return (
    <div className="App">
      <ReactMapGL
      {...viewPort}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        style={{width: 1200, height: 1200}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewPort) => setViewport(viewPort)}
      >
        <Marker longitude={-0.1246} latitude={51.5007} offsetLeft={-20} offsetTop={-10}>
          <PlaceIcon style = {{fontSize: viewPort.zoom * 7, color:"slateblue"}}/>
      
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default App;