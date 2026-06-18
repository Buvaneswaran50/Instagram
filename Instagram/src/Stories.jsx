import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

  const [Stories,setStories] = useState([]);

  const navigate = useNavigate();

  let tot =0;

  useEffect(()=>{
  
          fetch('http://localhost:3000/Story').
          then((data)=> data.json()).
          then((data => setStories(data))).
          catch(err=> console.log(err))
      },[]);

  return (
    <div className='story d-flex'>
      <div className='d-none'>
        {tot=Stories.length}
      </div>
      
      {Stories.length > 0 ?(
        Stories.map((Story)=>(
          <div key={Story.id} className='mx-1' onClick={()=>{navigate(`/Story/${Story.id}/${tot}`)}}> 
            <div className='gradient-border'>
              <img src={Story.profileImage}  className="Story-dp rounded-circle" alt="db" />
            </div>
              <p className='text-truncate' style={{width:"50px"}}>{Story.username}</p>
          </div>
        ))
      ):(
        <p>Loading</p>
      )}
    </div>
  )
}

export default Stories