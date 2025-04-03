import React from 'react';
import "../components/CSS/profileCard.css"

const ProfileCard = ({ profile, onViewSummary }) => {
    return (
        <div id="profile-card">
            <img src={profile.photoUrl} alt={profile.name} className='profile-image' />
            <div>
                <h2>{profile.name}</h2>
                <p>{profile.description}</p>
                <button onClick={() => onViewSummary(profile)}
                className='button glow-button'    
                >View Summary</button>
            </div>
        </div>
    );
};

export default ProfileCard;
