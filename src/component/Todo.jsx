import { useEffect, useState } from "react";

export function Todo(){
    const [todo,setTodos] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/todos').then(async function(data){
            let json = await data.json()
            setTodos(json.msg)
        })
    },[])
    return (
        <div>
            {todo?.map((ele,index)=>{
               return ( <p key={index}> title : {ele.title}</p>)
            })}
        </div>
    )
}