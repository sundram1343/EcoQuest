import React, { useState,useEffect,useRef } from "react";
import './Profile.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
function Profile() {
  const inputRef = useRef(null);
  const {authUser}=useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [location,setLocation]=useState('');
  const maxExp=1000;
  const [currentExp,setCurrentExp]=useState(0);
  const [profilepic,setProfilepic]=useState('');
  const [bio,setBio]=useState('');
  const [level,setLevel]=useState(1);
  useEffect(()=>{
    const token=localStorage.getItem('token');
    try{
      async function getProfile(){
        const res=await axios.get(`${import.meta.env.VITE_BACKEND}/user/profile/${authUser?._id}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        setEmail(res.data.email);
        setPhone(res.data.phoneno);
        setLocation(res.data.location);
        setCurrentExp(res.data.points);
        setBio(res.data.bio);
        setLevel(res.data.level);
        setProfilepic(res.data.profileImage);
      } 
      getProfile();
    }catch(err){
      console.log(err);
    }
  },[])
  const percentage=(currentExp/maxExp)*100;
  const handleUpdate=async(e)=>{
    e.preventDefault();
    setIsEditing(false)
    try{
      const token=localStorage.getItem('token');
      const res=await axios.post(`${import.meta.env.VITE_BACKEND}/user/updateprofile/${authUser?._id}`,{
        email,
        phoneno:phone,
        location,
        bio
      },{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
    }catch(err){
      console.log(err);
    }
  }
  const handleclick=()=>{
    inputRef.current.click();
  }
  const handlefile=async(e)=>{
    e.preventDefault();
    const token=localStorage.getItem('token');
    try{
      const formData=new FormData();
      formData.append('profileImage',e.target.files[0]);
      const res=await axios.post(`${import.meta.env.VITE_BACKEND}/user/updateprofile/${authUser?._id}`,{
        profileImage:formData
      },{
        headers:{
          Authorization:`Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      setProfilepic(res.data.profileImage);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
      <div className="ProfileHeader">
        <div className="ProfileContainer">
          <div className="ProfileImageContainer" onClick={handleclick}>
            <img src={profilepic || null} alt="Profile" />
            <input
              type="file"
              accept="image/*"
              onChange={handlefile}
              ref={inputRef}
            />
          </div>
          <div className="ProfileInfoContainer" >
            <span className="ProfileMemberSince">Member Since June 2025</span> 
            <span className="ProfileName">{authUser}</span>
            <span className="ProfileBio">{bio || 'No bio added yet'}</span>
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
        <form className="ProfileForm" onSubmit={handleUpdate}>
          <div className="InputRow">
            <div className="InputGroup">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" defaultValue={authUser} disabled={!isEditing} />
            </div>
            <div className="InputGroup">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}  disabled={!isEditing} />
            </div>
          </div>
          <div className="InputRow">
            <div className="InputGroup">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter your Phone Number"  value={phone} onChange={(e)=>setPhone(e.target.value)} disabled={!isEditing} />
            </div>
            <div className="InputGroup">
              <label>Location</label>
              <input type="text" placeholder="Enter your Location"  value={location} onChange={(e)=>setLocation(e.target.value)} disabled={!isEditing} />
            </div>
          </div>
          <div className="InputRow">
            <div className="InputGroup">
              <label>Bio</label>
              <textarea 
                placeholder="Tell us about yourself..." 
                value={bio} 
                onChange={(e)=>setBio(e.target.value)} 
                disabled={!isEditing}
                className="BioTextArea"
              />
            </div>
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
