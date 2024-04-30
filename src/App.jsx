import { useState } from 'react'

import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'
import UsingApi from './components/UsingApi'

function App() {
const [users,setUsers] = useState([])
const [ tab,setTab]= useState("api")

  return (

  <>
  <div>
     <button onClick={(e)=>setTab("api")}> Api</button> 
     <button onClick={(e)=>setTab("form")}>Form and List</button>  
    </div>


  {   
  tab === "api"?
  <UsingApi>

  </UsingApi>
  :
  <div>


  <Form users={users} setUsers={setUsers}/>
  
  
  <List users={users} setUsers={setUsers} >
  </List>
  </div>
  }

    
  </>
  )
}

export default App
