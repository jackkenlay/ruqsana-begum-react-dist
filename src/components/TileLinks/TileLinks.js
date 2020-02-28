import React from "react";
import {NavLink} from "react-router-dom";
import './tilelinks.scss'

const TileLinks = ({links}) =>{
    return (<div className='tilelinks'>
        {links.map(({text, image,link})=>{
            return (
                <NavLink className='tilelinks__item' to={link}>
                    <div className='tilelinks__inner' style={{backgroundImage: `url(${image})`}}/>
                    <div  className='tilelinks__text-container'>
                        <h2 className='tilelinks__text'>{text}</h2>
                    </div>
                </NavLink>)
        })}
    </div>)
}

export default TileLinks
