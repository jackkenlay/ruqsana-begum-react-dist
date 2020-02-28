import React from 'react'

import mainImage from './../../assets/img/IMG_8763-2.jpg'
import './trainyou.scss'


const TrainYou = () => {
 return (<div className='page-train-you'>
  <img className='page-train-you__image' src={mainImage} />
  <div className='page-train-you__text-block'>
   <h3 className='page-train-you__text-block-title'>Classes Info:</h3>
   <p className='page-train-you__text'>Ladies only class:</p>
   <p className='page-train-you__text'>Every Sunday</p>
   <p className='page-train-you__text'>12:30 - 13:30</p>
  </div>
  <iframe className='page-train-you__map' width="425" height="350" frameBorder="0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.279414193259!2d-0.048912!3d51.525693!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ce10722820e2ae9!2sKO+Gym!5e0!3m2!1sen!2suk!4v1461155289337"
          output="embed&quot;" marginWidth="0" marginHeight="0" scrolling="no"
          style={{display:'block', width:'100%', height:'100%'}}></iframe>
 </div>)
}

export default TrainYou;
