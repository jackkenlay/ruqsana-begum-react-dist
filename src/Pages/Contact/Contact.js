import React from 'react'

const Contact = () => {
 return (<div>
  <div  style={{maxWidth:'1200px', margin:'0px auto 30px auto'}}>
   <h1 style={{fontSize:'50px'}}>Contact</h1>
   <p style={{color:'white', textAlign:'center', margin:0, padding: 0}}>Contact Details</p>
   <p style={{color:'white', textAlign:'center', margin:0,fontSize:40}}>ruqsanabegum2k@gmail.com</p>
  </div>
  <iframe className='page-train-you__map' width="425" height="350" frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.279414193259!2d-0.048912!3d51.525693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ce10722820e2ae9!2sKO+Gym!5e0!3m2!1sen!2suk!4v1461155289337"
          output="embed&quot;" marginWidth="0" marginHeight="0" scrolling="no"
          style={{display:'block', width:'100%', height:'100%', marginTop:200}}></iframe>
 </div>)
}

export default Contact;
