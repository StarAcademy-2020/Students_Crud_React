import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper';
function AxiosExample() {
    const [content, setContent] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/students/')
        
            .then(respose => respose.json())
            .then(data => setContent(data))
            .catch(error => console.log(error));
            
    }, [])

    return (
        <Wrapper>
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                </thead>
                <tbody>
                    {content.students.map(p => {
                        return (
                            <tr key={p.studentId}>
                                <td>{p.studentName}</td>
                                <td>{p.studentEmail}</td>
                                <td>{p.studentMobile}</td>
                            </tr>
                        )

                    })}
                </tbody>

            </table>
        </Wrapper>
    )

}

export default AxiosExample
