import React from 'react'
import { NavLink , Outlet, Navigate } from 'react-router-dom'
import { FaUser ,FaBox } from 'react-icons/fa';
import { useAuth } from '../store/Auth';

const AdminLayout = () => {
  const {user,isLoading}=useAuth();
 console.log('admin layout',user)

  if(isLoading){
   return <h1>Loading...</h1>
  }

 if(user && !user.isAdmin){
  return <Navigate to="/"/>;
 }

  return (
    <>
    <header>
       <div className="container">
        <nav>
         <ul>
             <li><NavLink to="/admin/users"> <FaUser/> Users</NavLink></li>    {/* not this admin/users it goes like we already in /admin and with this /admin/admin/users  */}
             <li><NavLink to="/admin/contacts"><FaBox/> Contacts</NavLink></li> 
            <li>Services</li>
            <li>Home</li>
         </ul>
        </nav> 
       </div> 
    </header>
     <Outlet/> {/* it is used to show nested Route child Routes  data inside Parent Route */}
    </>
  )
}

export default AdminLayout