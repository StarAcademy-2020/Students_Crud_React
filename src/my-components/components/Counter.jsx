import React, { useEffect, useState} from 'react'

export default function Counter() {
    const [count,setCount]= useState(0);
    {
        //mountain phase
        useEffect(()=>{
            console.log('use Effect default....');
        },[]);

        useEffect(()=>{
            console.log('use Effect paramiter....');
        },[count]);

        useEffect(()=>{
            WebSocket.OPEN();
            console.log('count state variable has been modified');
            return()=>WebSocket.disconnected();
        },[count])
    }
  return (
    <div>
      <h1>Counter::::{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}
