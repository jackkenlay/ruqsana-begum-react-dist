import React from "react";
import './videomodal.scss'

const VideoModal = ({onModalClick, show, videoSrc}) => {

    if (show) {
        document.body.style.overflow = 'hidden'; //Prevent scrolling
    } else {
        document.body.style.overflow = 'visible'; //Allow scrolling
    }

    return show ?
        (<div className='videomodal' onClick={onModalClick} >
            <iframe className='videomodal__video' width="840" height="630" src={videoSrc} frameBorder="0" allowFullScreen=""/>
        </div>)
    :
    null
}

export default VideoModal;
