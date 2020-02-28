import React from 'react'
import VideoHero from '../../components/VideoHero'
import TextBar from '../../components/TextBar'
import TileLinks from "../../components/TileLinks";
import SocialMediaLinks from "../../components/SocialMediaLinks";

import backgroundImage from './../../assets/img/IMG_6070.JPG'
import telegraphImage from './../../assets/img/IMG_8937.JPG'
import classes from './../../assets/img/classes.jpg'
import roxy from './../../assets/img/ruqsana-begum-kick-boxer.jpg'

const Home = () => {
 return (<div>
  <VideoHero src={backgroundImage} videoSrc='https://www.youtube.com/embed/vgaHoDVbK1Y'/>
  <TextBar text='DISCOVER'/>
  <TileLinks links={[{text:'Media', image:telegraphImage, link:'/media'},{text:'Classes', image:classes, link:'/train-you'},{text:'Bio', image:roxy, link:'/bio'}]}/>
  <SocialMediaLinks title='SPARKS OF INSPIRATION' subtitle='CONNECT WITH ME ON SOCIAL MEDIA'/>
 </div>)
}

export default Home;
