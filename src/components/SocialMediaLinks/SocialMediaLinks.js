import React from "react";
import './socialmedialinks.scss'

const SocialMediaLinks = ({title, subtitle}) =>{
    return (<div className='socialmedialinks'>
        <h2 className='socialmedialinks__title'>{title}</h2>
        <h3 className='socialmedialinks__subtitle'>{subtitle}</h3>
        <div className='socialmedialinks__link-container'>
            <a href='https://twitter.com/RuqsanaBegum' target='_blank' className='socialmedialinks__link socialmedialinks__link--twitter'/>
            <a href='https://en-gb.facebook.com/britishmuaythai/' target='_blank'  className='socialmedialinks__link socialmedialinks__link--facebook'/>
            <a href='https://www.instagram.com/ruqsanabegum_mt/' target='_blank'  className='socialmedialinks__link socialmedialinks__link--instagram'/>
        </div>
    </div>)
}

export default SocialMediaLinks
