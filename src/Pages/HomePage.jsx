import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import MapComponent from '../components/MapComponent';

const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="homepage">
      <ProfileList onProfileSelect={handleProfileSelect} />
      {selectedProfile && (
        <div className="map-summary">
          <h3>{selectedProfile.name}'s Location</h3>
          <MapComponent address={selectedProfile.address} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
