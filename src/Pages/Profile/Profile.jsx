import React, { useState } from "react";
import './Profile.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const maxExp=1200;
  const currentExp=1100;
  const percentage=(currentExp/maxExp)*100;
  const level=maxExp/100;
  return (
    <>
      <div className="ProfileHeader">
        <div className="ProfileContainer">
          <div className="ProfileImageContainer">
            <img src="https://wallpapers.com/images/hd/iron-man-without-mask-efho6tashj8t1qkb.jpg" />
          </div>
          <div className="ProfileInfoContainer">
            <span className="ProfileMemberSince">Member Since June 2025</span>
            <span className="ProfileName">Iron Man</span>
            <span className="ProfilePageRank">Rank</span>
            <span className="ProfileBio">Bio</span>
          </div>
        </div>
        <div className="ProfilePointsContainer">
          <div className="ProfileCircularProgressbarContainer">
            <CircularProgressbar
            variant="determinate"
            value={percentage}
            maxValue={100}
            text={`Level ${level}`}
            styles={{
              path: {
                stroke: '#1e5f3d',
              },
              text: {
                fill: '#1e5f3d',
              },
            }}
            />
          </div>
          <div className="ProfileExpContainer">
            <span className="Exp">{currentExp}xp</span>
            <span className="Exp">{maxExp}xp</span>
          </div>
          <progress value={currentExp} max={maxExp} className="ProfileProgressBar"/>
        </div>
      </div>
      <div className="ProfileFormContainer">
        <div className="ProfileFormHeader">
          <h2 className="ProfileFormTitle">Personal Information</h2>
          {!isEditing && (
            <button className="EditProfileBtn" onClick={() => setIsEditing(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>
              Edit Profile
            </button>
          )}
        </div>
        <form className="ProfileForm" onSubmit={(e) => { e.preventDefault(); setIsEditing(false); }}>
          <div className="InputRow">
            <div className="InputGroup">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" defaultValue="Iron Man" disabled={!isEditing} />
            </div>
            <div className="InputGroup">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" defaultValue="[EMAIL_ADDRESS]" disabled={!isEditing} />
            </div>
          </div>
          <div className="InputRow">
            <div className="InputGroup">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 234 567 890" defaultValue="+1 987 654 321" disabled={!isEditing} />
            </div>
            <div className="InputGroup">
              <label>Location</label>
              <input type="text" placeholder="City, Country" defaultValue="Malibu, CA" disabled={!isEditing} />
            </div>
          </div>
          <div className="InputGroup">
            <label>Street Address</label>
            <input type="text" placeholder="123 Main St" defaultValue="10880 Malibu Point, 90265" disabled={!isEditing} />
          </div>
          {isEditing && (
            <div className="ProfileFormActions">
              <button type="button" className="CancelBtn" onClick={() => setIsEditing(false)}>Cancel</button>
              <button type="submit" className="SaveProfileBtn">Save Changes</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Profile;
