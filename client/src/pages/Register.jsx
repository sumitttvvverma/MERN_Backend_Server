import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../store/Auth'

const Register = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  const navigate= useNavigate();
  const {storeTokenInLS}=useAuth(); 

  const handleInput=(e)=>{
    // console.log(e)
    const name = e.target.name;
    const value= e.target.value;
    setUser({...user,[name]:value})
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(user);
    try {
      const response= await fetch("http://localhost:4004/api/auth/register",{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      
      const res_data=await response.json();
      console.log("res_data",res_data);
      
      if(response.ok){
        //phle res_data yhi tha but not after lec35
            //to stored the token in localStorage
            storeTokenInLS(res_data.token);                              //method 2  for major project props-drilling 
            toast.success("Registration successful")   
            navigate("/login")
            // localStorage.setItem("token directly",res_data.token);    //method 1
            setUser({ username:"",  email:"",  phone:"",  password:""}) 
           }
           else{
            // alert("delulu")
            // console.log(res_data.extraDetails)
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.msg); //msg->auth-controllers->res.status
           }

    } catch (error) {
      console.log("register >>",error)
    }
  }

  return (
    <>
     <section>
      <main>
        <div className='section-registration'>
          <div className='container grid grid-two-cols'>
            
              {/* grid coloum 1 */}
              <div className='registeration-image'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThNVUvedBB-JeGgPORj6RRYXS6-Ddkof2zFOb050QWS2o8YWJd_M7PJENHD0j3qwvOVU&usqp=CAU' alt='Registeration image' height={400} width={500}/>
              </div>
             
              {/* grid coloum 2 */}
              <form action='' onSubmit={handleSubmit} className='mx-auto' >
                <label htmlFor='username'>username</label>
                <input type='text' id='username' name='username' placeholder='username' required autoComplete='off' value={user.username} onChange={handleInput} />
                <label htmlFor='email'>email</label>
                <input type='email' id='email' name='email' placeholder='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                <label htmlFor='number'>phone</label>
                <input type='number' id='number' name='phone' placeholder='number' required autoComplete='off' value={user.phone} onChange={handleInput} />
                <label htmlFor='password'>password</label>
                <input type='password' id='password' name='password' placeholder='password' required autoComplete='off' value={user.password} onChange={handleInput} />
              
                <br/>
                <button className='my-3'>Submit</button>
              
              </form>

              
          </div>
        </div>
      </main>
      </section> 
    </>
  )
}

export default Register