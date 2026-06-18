import React, { useState } from 'react';
import axios from 'axios';
function Profile() {

    const [profile, setProfile] = useState(null);

    const [follows, setFollows] = useState([])


    useState(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data => {setProfile(data.data);console.log(data) })
        .catch(err=>console.log(err))

        axios.get('http://localhost:3000/follows')
        .then(data => {setFollows(data.data);console.log(data) })
        .catch(err=>console.log(err))

    },[])
    function HandleOnChange(e){
        setProfile(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handleUpdate = async () => {
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log("updated"))
        .catch(err => console.log(err))
    }
  return (
    <div className='m-5'>
        {profile ? (
                <div>
                    <img src={profile.profileImage} alt="" className='profile rounded-circle' />
                      <h5>{profile.username}</h5>
                      <input type="text" 
                         value={profile.username}
                         name='username'
                         className='form-control my-4 '
                         onChange={HandleOnChange}
                      />
                      <input type="text" 
                      name='profileImage' 
                      className='form-control my-4'
                      onChange={HandleOnChange}
                       value={profile.profileImage}/>
                      <button className='btn btn-primary my-4' onClick={handleUpdate} >
                        updata
                      </button>
                </div>
            ):(
                <div>
                  Loading
                </div>
            )
        }

        {
            follows.length > 0 ? (
                follows.map(follow => (
                    <div key={follow.id}>
                       {follow.username}
                  </div>
                ))
                  
            ):(
                <div>
                  Loading
                </div>
            )
        }
    </div>
  )
}

export default Profile