import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [Profile, setProfile] = useState(null);
  const [suggestions,setSuggestions] = useState([]);

  useEffect(()=>{

    fetch('http://localhost:3000/profile')
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch(err => console.log(err))

    fetch('http://localhost:3000/suggestions')
    .then(data => data.json())
    .then(data => setSuggestions(data))
    .catch(err => console.log(err))

  },[]);
   const handleFollow = async (id, username) => {
        axios.post('http://localhost:3000/profile',{"id":id,"username":username})
        .then(alert("Followers"))
        .catch(err => console.log(err))
    }

  return (
    <div>
      <div className="suggestions w-75 m-4">
        { Profile ?
      <div className='d-flex'>
        <img  className="db rounded-circle" src={Profile.profileImage} alt="" />
        <h5>{Profile.username}</h5>
        <small className='ms-auto text-primary'>Switch</small>
      </div>
      : <p>Loading</p>}

      <div className='d-flex'>
        <p >Suggested for you</p>
        <b className='ms-auto'>See All</b>
      </div>

      { suggestions.length > 0 ?(
            <div>
                {
                    suggestions.map((suggestions)=>(
                     <div  className="my-1" key={suggestions.id}>
                         <div className='d-flex'>
                            <img  className="db rounded-circle" src={suggestions.profileImage} alt="" />
                            <h5>{suggestions.username}</h5>
                            <a  onClick={()=>handleFollow(suggestions.id,suggestions.username)}className='text-primary ms-auto '>Follow</a>
                         </div>
                    </div>
                    ))
                }
            </div>
        ) : (
            <div>
                Loading suggestions
            </div>
        )}
      </div>
      
    </div>
  )
}

export default Suggestions