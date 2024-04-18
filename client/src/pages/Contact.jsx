import React,{useState} from 'react'
import { useAuth } from '../store/Auth'

const Contact = () => {
  
  const [contact, setContact] = useState({
    username:"" , email:"" , textarea:""
  })
  
  const {user}=useAuth();
  const [userData,setUserData]=useState(true);
  
  if(user&&userData){
    setContact({
      username:user.username , email:user.email , message:""
    })
    setUserData(false);
  }

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    //1
    setContact({...contact,[name]:value})

    //2
    // setContact((prev)=>({...prev,
    //   [name]:value}))
  }

  const handleSubmit= async(e)=>{
    e.preventDefault();
    // console.log(contact)
    try {
      const response= await fetch('http://localhost:4004/api/form/contact',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'  
        },
        body:JSON.stringify(contact)
      });

      if(response.ok){
        setContact({  username:"" , email:"" , textarea:"" })
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }

  }

  return ( 
    <>
     <section>
      <main>
        <div className=''>
          <div className='container grid grid-two-cols'>
            <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwl1eyA6LOSPCtYz-6tVjMosDEcEWCkFUJB26GD8N-Q&s' alt='Contact image' height={200} width={500}/>
            </div>
            
            <form onSubmit={handleSubmit} className='mx-auto'>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' placeholder='username' autoComplete='off' value={contact.username} onChange={handleChange} required ></input>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' placeholder='email' autoComplete='off' value={contact.email} onChange={handleChange} required ></input>
              <label htmlFor='message'>Message</label>
              <textarea name='message' rows={10} cols={25} placeholder='message' autoComplete='off' value={contact.message} onChange={handleChange} required ></textarea>

              <br/>
              <button className='m-3'>Submit</button>
            </form>
          </div>
          <section>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.5886285540587!2d75.86045762394912!3d25.21709183089722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f9a56e6c78995%3A0x1109933087265bdc!2sKherli%20Phatak%2C%20Bhadana%2C%20Tilak%20Nagar%2C%20Nayapura%2C%20Kota%2C%20Rajasthan%20324002!5e0!3m2!1sen!2sin!4v1712412939312!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </section>
        </div> 
      </main>
     </section>  
    </>
  )
}

export default Contact