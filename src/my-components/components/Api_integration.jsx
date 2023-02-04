import React,{useState} from 'react'

export default function Api_integration() {
  const [content,setContent]=useState([])
function fecthData()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=> setContent(data))
  .catch();
}
  return (
    <>
        <ul>
        {
          content.map((user) =>{
            return(
              <li><p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}</p>
              <p>{user.address.zipcode}</p>
              <p>{user.address.geo.lat}</p>
              <p>{user.address.geo.lng}</p>
              </li>
            )
          })
         
        }
        </ul>
      <button onClick={()=>fecthData()}>Display</button>
    </>
  )
}
