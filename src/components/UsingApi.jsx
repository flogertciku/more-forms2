import React, { useEffect, useState } from 'react'
import axios from 'axios';


function UsingApi() {
    const [nr,setNr]=useState(0)
    const [pokemons,setPokemons]= useState([])
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response=>{
            console.log(response);
            setPokemons(response.data.results)
        })
        .catch(err=> console.log(err))

        console.log("we are inside the useEffect")

    },[])






    
  return (
    <div>
        <button onClick={(e)=> setNr(nr+1) }>click me {nr} </button>
        <h2> we are at using API</h2>
        <ul>
        {pokemons.map((item,index)=>
    <li key={index}> {item.name}  </li>
    )}
    </ul>
      
    </div>
  )
}

export default UsingApi
