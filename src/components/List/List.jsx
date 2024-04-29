import React from 'react'
import style from './List.module.css'
function List({users}) {
  return (

    
    <ul className={style.li}>


        {
           
        users.map( (item,index)=>
        
       <li key={index}>  firstName: {item.firstName} email: {item.email} </li>
        )
        }
    </ul>
  )
}

export default List
