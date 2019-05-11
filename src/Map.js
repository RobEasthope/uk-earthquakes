import React from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends React.Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8,
    },
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

export default Map;
