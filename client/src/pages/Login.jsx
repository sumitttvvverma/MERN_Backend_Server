import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../store/Auth'

const Login = () => {
  const [user, setUser] = useState({
    email:"",
    password:"",
  })

  const navigate=useNavigate();
  const {storeTokenInLS}=useAuth();

  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUser({...user,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(user)
    try {
      const response=await fetch("http://localhost:4004/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user), 
      })
      console.log("Login form",response)

            const res_data=await response.json();
            console.log("res_data",res_data)

        if(response.ok){
            toast.success("Login Successful")
            navigate("/");
            //phle res_data yhi tha
            //to stored the token in localStorage
            storeTokenInLS(res_data.token);
            // localStorage.setItem("token",res_data.token);   //method 1

            setUser({email:"",  password:"",})
        } else{
            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.msg )
        }
      
    } catch (error) {
      console.log("Login error>>",error)
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
              <img src='https://image.pngaaa.com/919/4051919-middle.png' alt='Registeration image' height={400} width={500}/>
              </div>
              
              {/* grid coloum 2 */}
              <form action='' onSubmit={handleSubmit} className='mx-auto' >

                <label htmlFor='email'>email</label>
                <input type='email' id='email' name='email' placeholder='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                <label htmlFor='password'>password</label>
                <input type='password' id='password' name='password' placeholder='password' required autoComplete='off' value={user.password} onChange={handleInput} />
              
              <br/>
                <button className='m-3' >Login</button>
              
              </form>
          </div>
        </div>
      </main>
      </section>  
    </>
  )
}

export default Login