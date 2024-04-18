import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Jump=useNavigate()

  return (
    <div>
      <section className='container-fluid m-4'>
      <div className='row m-4'>
        <div className='col-sm-8 mt-2'>
          <h3>Welcome to My Website!</h3>
      Explore our amazing content and services. I am sumit Verma and this is my MERN stack Website. if u would like to contact me u can visit
        </div>
        
        <div className='col-sm-4 mt-2'>
        <h3>Contact</h3>
        <p>Phone Number:766588949</p>
        <p>Email:jrsumitverma@gmail.com</p>
        </div>
        </div>
      </section>
      
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-8'>
            
          </div>
          <div className='col-sm-4'>
          <button className='m-3'  onClick={()=>Jump("/Service")}>Service</button>
          <button  className='m-3' onClick={()=>Jump("/Contact")}>Contact</button>
          </div>
        </div>
      </div>

      <div className='container grid grid-four-cols mt-5' style={{backgroundColor:'rgb(60 65 82)' ,border: "2px solid #rgb(64 72 112)" , padding:4 }}>
        <div className='px-5 flex' style={{ borderStyle: "solid", borderRightColor:"#868eb5"}} >
          <h3>50+</h3>
          <p>Company registers</p>
        </div>
        <div className='px-5 flex' style={{borderStyle: "solid", borderRightColor:"#868eb5" , borderLeftColor:"#868eb5"}} >
          <h3>50+</h3>
          <p>Company registers</p>
        </div>
        <div className='px-5 flex' style={{borderStyle: "solid", borderRightColor:"#868eb5",borderLeftColor:"#868eb5"}} >
          <h3>50+</h3>
          <p>Company registers</p>
        </div>
        <div className='px-5 flex' style={{borderStyle: "solid", borderLeftColor:"#868eb5"}} >
          <h3>50+</h3>
          <p>Company registers</p>
        </div> 
      </div>
    </div>
  )
}

export default Home