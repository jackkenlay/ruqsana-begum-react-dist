import React from "react";
import './textbar.scss'

const TextBar = ({text, subtitle}) => {
    return (<div className='textbar'>
        <h2 className='textbar__title'>{text}</h2>
        {subtitle && <h3 className='textbar__subtitle'>{subtitle}</h3>}
        </div>
    )
}
export default TextBar
