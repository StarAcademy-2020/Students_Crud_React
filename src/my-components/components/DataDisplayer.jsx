import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
function DataDisplayer() {
    const [content, setContent] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/students/')
            .then(respose => respose.json())
            .then(data => setContent(data))
            .catch(error => console.log(error));

            
            
    }, [])
    console.log("My data:::"+content.data);
      
  return (
    <>
       <Wrapper>
       {content.students!=undefined && content.students.data.length >0 && (
        <table>
          <thead>
            <tr>
              <th>studentId</th>
              <th>studentName</th>
              <th>studentEmail</th>
              <th>studentMobile</th>
            </tr>
          </thead>
          <tbody>
            {content.students.data.map(post=>{
              <tr>
                <td>{post.studentId}</td>
                <td>{post.studentName}</td>
                <td>{post.studentEmail}</td>
                <td>{post.studentMobile}</td>
              </tr>
            }

            )}
          </tbody>
        </table>
       )}
        
       </Wrapper>
    </>
  )
}

export default DataDisplayer
