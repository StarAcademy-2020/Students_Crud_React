import React,{useState,useEffect} from 'react'

function Displayusers() {
    const [content, setContent] = useState([])
 console.log(content);
 console.log("Use effect");
    useEffect(() => {
        fetch('http://localhost:3002/students')
            .then(respose => respose.json())
            .then(data => setContent(data))
            .catch(error => console.log(error));
    }, [])

    return (
       
            <table className='table table-bordered'>
                <thead className='thead-dark'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                </thead>
                <tbody>
                    {content.map(p => {
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
        
    )

}

export default Displayusers
