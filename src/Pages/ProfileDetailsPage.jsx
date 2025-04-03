import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileDetailsPage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get(`/api/profiles/${id}`)
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile details:', error));
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-details">
      <h1>{profile.name}</h1>
      <img src={profile.photoUrl} alt={profile.name} />
      <p>{profile.description}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
    </div>
  );
};

export default ProfileDetailsPage;
