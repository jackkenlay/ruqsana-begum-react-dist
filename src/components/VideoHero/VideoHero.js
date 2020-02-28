import React, { useState } from 'react'
import './videoHero.scss'
import VideoModal from "../VideoModal";


const VideoHero = ({src, videoSrc}) => {
    const [showModal, setShowModal] = useState(false);

    return (<div className='videohero'>
        <img className='videohero__image' src={src}/>
        <div className='videohero__btn' onClick={()=>setShowModal(true)}>
            <div className='videohero__arrow'/>
        </div>
        <VideoModal show={showModal} onModalClick={()=>setShowModal(false)} videoSrc={videoSrc}/>
    </div>)
}

export default VideoHero
