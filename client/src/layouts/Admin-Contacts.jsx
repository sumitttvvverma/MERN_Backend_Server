import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/Auth';


const AdminContacts = () => {
  const [contactData,setContactData]=useState([]);

  const {authorizationToken} = useAuth();

//to get COntacts data from Backend   
  const getAllContactsData=async()=>{
    try {
      const response = await fetch('http://localhost:4004/api/admin/contacts',{
        method:"GET",
        headers:{
          Authorization : authorizationToken
        }
      })
      const data = await response.json();
      setContactData(data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete =async(id)=>{
    try {
      const response = await fetch(`http://localhost:4004/api/admin/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization : authorizationToken
        }
      })
      if(response.ok){
        getAllContactsData(); 
      }
    } catch (error) {
      console.log(error)
    }
  }

      useEffect(()=>{
        getAllContactsData()
      },[])

  return (
    <>
    <section className='admin-contacts-section'>
    <h2>Admin-Contacts</h2>

    <div className='container admin-users '>
        {
          contactData.map((curElem,index)=>{
            const {username,email,message,_id}=curElem;
            return(
              <div key={index} className='container-fluid'>
              <div>{username}</div>
              <div>{email}</div>
              <div>{message}</div>
              <button onClick={()=>handleDelete(_id)}>Delete</button>
              </div>
            )
          })
        }
    </div>
    </section>
    </>
  )
}

export default AdminContacts