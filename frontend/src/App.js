import * as React from 'react';
import Map from 'react-map-gl';

function App() {
  return (
    <Map
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      initialViewState={{
        longitude: -0.1276,
        latitude: 51.5071,
        zoom: 12
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default App;
