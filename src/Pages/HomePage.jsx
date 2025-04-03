import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import MapComponent from '../components/MapComponent';
import "../components/CSS/homePage.css"

const HomePage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div id="homepage">
      <ProfileList onProfileSelect={handleProfileSelect} />
      {selectedProfile && (
        <div  style={{Width:'85%'}}>
          <h3>{selectedProfile.name}'s Location</h3>
          <MapComponent address={selectedProfile.address} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
