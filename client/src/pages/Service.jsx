import React from 'react'
import img from '../images/service.png'
import { useAuth } from '../store/Auth'

const Service = () => {
  const { services }=useAuth();

  return (
    <>
    <section className='section-service'>
      <div className="container">
        <h1 className='main-heading'>Service</h1>
      </div>

      <div className='container grid grid-three-cols' style={{tableLayout:"fixed"}}>
        {
          services.map((curElem,index)=>{

            return(
         <div className='card' key={index}>
               <div className='card-img'>
              <img src={img} alt='our service info' width={250} height={250}/>
               </div>

              <div className="card-details" >
                <div className="grid grid-two-cols flex">
                  <p className='px-4' style={{display: "inline"}}>provider</p>
                  <p className='px-4' style={{display: "inline"}}>price</p>
                </div>
                  <h2 style={{display: "flex"}} >service</h2>
                  <p style={{display: "flex"}}>description</p>
              </div>
        </div>
            )

          })
        }
        
      </div>
    </section>
    </>
  )
}

export default Service