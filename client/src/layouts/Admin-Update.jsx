import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/Auth';
import { useParams , useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const AdminUpdate = () => {
    const navigate=useNavigate();


    const {authorizationToken} = useAuth();

    const [user, setUser] = useState({
        username:"",email:"",phone:"",
    })


    const handleInput=(e)=>{
       let name = e.target.name;
       let value = e.target.value; 

       setUser({...user,[name]:value})
    }
    
    const params = useParams();
    // console.log("params single user ",params)  //reason why params.id

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
           const response = await fetch(`http://localhost:4004/api/admin/users/update/${params.id}`,{
            method:"PATCH",
            headers:{
                Authorization : authorizationToken,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
           })
           if(response.ok){
               toast.success("Updated Successfully"); 
               navigate('/admin/users')
           }else{
            toast.error("Not Updated "); 
           }
        } catch (error) {
            console.log("patching update userData",error)
        }
    }


    const getSingleUserData =async()=>{
        try {
            const response = await fetch(`http://localhost:4004/api/admin/users/${params.id}`,{
            method:"GET",
            headers:{
                Authorization : authorizationToken
            }
        })
            const data = await response.json();
            console.log(`user single data: ${data}`)
            setUser(data);

        } catch (error) {
            
        }
       
    }

    useEffect(()=>{
        getSingleUserData();
    },[])

  return (
    <>
    <section>
      <main>
        <div className='section-registration'> <h5 className='main-heading'>Update User Data</h5>
          <div className='container grid grid-two-cols'>
            
              {/* grid coloum 1 */}
              <div className='registeration-image mx-auto'>
              <img src='' alt='Registeration image' height={400} width={500}/>
              </div>
             
              {/* grid coloum 2 */}
              <form action='' onSubmit={handleSubmit} className='mx-auto' >
                <label htmlFor='username'>username</label>
                <input type='text' id='username' name='username' placeholder='username' required autoComplete='off' value={user.username} onChange={handleInput} />
                <label htmlFor='email'>email</label>
                <input type='email' id='email' name='email' placeholder='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                <label htmlFor='number'>phone</label>
                <input type='number' id='number' name='phone' placeholder='number' required autoComplete='off' value={user.phone} onChange={handleInput} />
              
                <br/>
                <button className='my-3'>Update</button>
              
              </form>

              
          </div>
        </div>
      </main>
      </section> 
    </>
  )
}

export default AdminUpdate;