import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../components/CSS/mapComponent.css"

const MapComponent = ({ address }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(10);
  const [geocoder, setGeocoder] = useState(null);

  // Load Google Maps API and initialize the Geocoder
  const onLoad = useCallback((map) => {
    if (window.google) {
      setGeocoder(new window.google.maps.Geocoder());
    }
  }, []);

  useEffect(() => {
    if (address && geocoder) {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          setMapCenter(location);
          setZoom(15);
        } else {
          console.error('Geocode was not successful for the following reason: ', status);
        }
      });
    }
  }, [address, geocoder]);

  return (
    <div id='map-component'>
        <LoadScript
      googleMapsApiKey="AIzaSyDyNOUgoLQ9WA7hocfGu7sf_XULK3mMqR0"
      onLoad={() => console.log('Google Maps API loaded')}
    >
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        center={mapCenter}
        zoom={zoom}
        onLoad={onLoad}  // Ensures the map and API are fully loaded
      >
        {mapCenter.lat !== 0 && mapCenter.lng !== 0 && (
          <Marker position={mapCenter} />
        )}
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default MapComponent;
