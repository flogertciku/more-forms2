import React, { useState } from 'react'

function Form( {setUsers,users}) {
    const [firstName,setFirstName] = useState({
        name :"",
        val:""
    })
    const [email,setEmail] = useState({
        email:"",
        val:""
    })
    const HandleFN =(e)=>{
        console.log()
       
       
        if (e.target.value.length < 1) {
            setFirstName({...firstName,val:"test"})
            
        } else if(e.target.value.length < 4) {
            setFirstName({...firstName,val:"name must be longer than 3 chars"})
            
        }
        else{
            setFirstName({...firstName,val:""})
        }
        setFirstName((prev )=> ({...prev,name:e.target.value}))
    }
    const HandleEmail =(e)=>{
       
        if (e.target.value.length < 1) {
            setEmail({...email,email:"name is required"})
            
        } else if(e.target.value.length < 4) {
            setEmail({...email,val:"name must be longer than 3 chars"})
            
        }
        else{
            setEmail({...email,val:""})
        }
        setEmail( (prev )=>({...prev,email:e.target.value}))
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        console.log("submit form")
        const userFromForm = 
            {
            
                firstName :firstName.name,
                email:email.email
            }

        console.log(firstName)
      
        setUsers([...users,userFromForm])   
    }
  return (
    <form onSubmit={SubmitForm}>
        <div>
            <label htmlFor="">First Name </label>
            <input type="text" placeholder='First Name' onChange={HandleFN} />
            {firstName.val ? <p> {firstName.val}</p> : "" }
        </div>
        <div>
            <label htmlFor="">Email </label>
            <input type="text" placeholder='Email' onChange={HandleEmail} />
            {email.val? <p> {email.val}</p> : ""}
        </div>
        <input type="submit"  value="submit"/>

        </form>
  )
}

export default Form
