import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';  // or fetch API

const ProfileList = ({ onProfileSelect }) => {
  const [profiles, setProfiles] = useState([
    {
      "id": 1,
      "name": "Amazatic Solutions",
      "photoUrl": "https://th.bing.com/th/id/OIP.3PjhH0N8NccYBWtcAArLkQHaB9?rs=1&pid=ImgDetMain",
      "description": "A brief description about Amazatic.",
      "address": "Spot 18 Mall, 716, 7th, Rahatani, Pune, Maharashtra 411017"
    },
    {
      "id": 2,
      "name": "IACSD",
      "photoUrl": "https://1.bp.blogspot.com/-uH6RT1foSUk/XUh6II6EB2I/AAAAAAAATrQ/xOV6IM73lWQHL9w_f_h7XdYD8YhaVynYQCLcBGAs/s320/CDAC-PUNE-IACSD.png",
      "description": "A brief description about IACSD.",
      "address": "IACSD, Ravet Village Road Near Akurdi Railway Station Sector 29, Nigdi, Pradhikaran, Akurdi, Pimpri-Chinchwad, Maharashtra 411044"
    }
  ]);

//   useEffect(() => {
//     axios.get('/api/profiles')  // Fetch profiles from the backend API
//       .then(response => setProfiles(response.data))
//       .catch(error => console.error("Error fetching profiles:", error));
//   }, []);

  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard 
          key={profile.id} 
          profile={profile} 
          onViewSummary={onProfileSelect} 
        />
      ))}
    </div>
  );
};

export default ProfileList;
