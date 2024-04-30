import React from 'react'
import style from './List.module.css'

const sayMyName = (name)=>{
    console.log(name)
}

sayMyName("flogert")
sayMyName("test2")






function List({users,setUsers}) {
    const Delete = (e,position)=>{
        e.preventDefault();
        // index            0          1     2         3       4
        const emrat =  ["flogert","fatjon","test1","test2","test3" ]
       const filteredList =  emrat.filter((item,index) => index != position )
       setUsers([...filteredList])



    }
  return (

    
    <ul className={style.li}>


        {
           
        users.map( (item,idx)=>
        
       <li key={index}>  firstName: {item.firstName} email: {item.email} <button onClick={(e)=> Delete(e,idx)}> Delete {idx} </button> </li>
        )
        }
    </ul>
  )
}

export default List
