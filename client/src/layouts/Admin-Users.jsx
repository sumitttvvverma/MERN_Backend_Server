import { useEffect, useState } from "react" 
import { useAuth } from "../store/Auth"
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
 
  const {authorizationToken} = useAuth();

  const getAllUsersData=async()=>{
    try {
      const response = await fetch('http://localhost:4004/api/admin/users',{
        method:"GET",
        headers:{
          Authorization : authorizationToken
        }
      });
      const data=await response.json();
      // console.log(`users ${data}`);
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

 useEffect(() => {
   getAllUsersData();
 }, [])
 
 //delete the user on delete button
 const deleteUser=async(id)=>{
  // console.log(id);
  try {
    const response = await fetch(`http://localhost:4004/api/admin/users/delete/${id}`,{
    method:"DELETE",
    headers:{
      Authorization : authorizationToken
    },
  })
  const data = await response.json();
  console.log(`users after delete: ${data}`)

  if(response.ok){
    getAllUsersData();
    toast.success("User Deleted successfully")
  }

  } catch (error) {
    console.log(error)
  }
  
 }


  return (
    <>
    <section className="admin-users-section">
      <div className="container">
        <h2>Admin Users Data</h2>
      </div>
      <div className="container admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
          {
          users.map((curElem,index)=>{
        return (
            <tr key={index}>
              <td>{curElem.username}</td>
              <td>{curElem.email}</td>
              <td>{curElem.phone}</td>
              <td>
                <Link to={`/admin/users/${curElem._id}/edit`}>Edit</Link>   {/* this path is simliar to route path in App */}
              </td>
              <td><button onClick={()=>deleteUser(curElem._id)}>Delete</button></td>
            </tr>
              )
            })
          } 

          </tbody>
        </table>
      </div>
    </section>
    
    </>
  )
}

export default AdminUsers;