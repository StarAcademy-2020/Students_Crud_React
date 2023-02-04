
import React,{useState} from 'react'

export default function Api_integration_using_axios() {
    const [content,setContent]=useState([])
    function fecthData()
    {
      fetch('http://localhost:3002/students')
      .then(respose =>respose.json())
      .then(data=> setContent(data))
      .catch(error=>console.log(error));
    }
    return (
      <>
            <table className='class="table table-bordered'>
            <thead className='thead-dark'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Street</th>
                    <th>Suite</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Lat</th>
                    <th>Lng</th>
                </thead>
            {
               
              content.map((user) =>{
                return(       
                  <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.address.suite}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                  <td>{user.address.geo.lat}</td>
                  <td>{user.address.geo.lng}</td>&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-primary">View</button>&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-info">Edit</button>&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-danger">Delete</button>
                  </tr>
                )
              })
             
            }
            </table>
          <button onClick={()=>fecthData()}>Display</button>
        </>
    
    )
  
}
