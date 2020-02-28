import React from "react";
import './bioblock.scss'

const BioBlock = ({title, text, img, reverse}) =>{
    const flexDirection = reverse ? 'row-reverse': 'row';
    return (
    <div className='bio-block' style={{flexDirection}}>
        <img className='bio-block__img' src={img}/>
        <div className='bio-block__text-container'>
            <h2 className='bio-block__title'>{title}</h2>
            <p className='bio-block__text'>{text}</p>
        </div>
    </div>)
}

export default BioBlock
