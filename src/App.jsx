import { useState } from 'react'

import './App.css'
import Form from './components/Form/Form'
import List from './components/List/List'

function App() {
const [users,setUsers] = useState([])

  return (

  <>
  <Form users={users} setUsers={setUsers}/>
  
  
  <List users={users} >
  </List>

    
  </>
  )
}

export default App
