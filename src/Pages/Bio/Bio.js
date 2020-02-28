import React from 'react'
import backgroundImage from './../../assets/img/roxy-background-bio-image.jpg'
import pressReleaseImage from './../../assets/img/reading-elle-magazine-photo.png'

import achievementsImage from './../../assets/img/IMG_4670.JPG'
import BioBlock from "../../components/BioBlock";

const getPressRelease = () => (<>London, 23 April 2016<br/>
    KICKING AND DREAMING - WKA World Champion Ruqsana Begum<br/>
    Anyone who believes that women can't or shouldn't fight needs to meet Ruqsana Begum.<br/>
    Born and raised in East London, the second of five children, the young Muay-Thai kick boxer won her first World Title last month against Swedish champion Susanna Salijarvi and is now the World Kickboxing Association (WKA) 48kg champion.<br/>
    Add that accolade to the string of British titles, and European championship gold medals Ruqsana has already won in one of the toughest sports on the planet, and you begin to get a picture of the determination, dedication and courage this young woman shows every day in life.<br/>
    Ruqsana fights Muay Thai kickboxing, often referred to as the ‘Art of Eight Limbs’, the national sport of Thailand, where it is far more popular than football. Unlike regular boxing, competitors can use any combination of punches, kicks, knees and elbows to strike an opponents during a bout.<br/>
    It hurts, a lot, and that’s just the thousands of hours of cardio required to be fit enough to even climb into the ring!<br/>
    But her sporting career is only scratching the surface.<br/>
    Ruqsana is an inspirational figure way beyond her own community. She is a motivational speaker, she teaches kickboxing classes for women, she juggles a ton of of media commitments, and leads a busy family life with many responsibilities as the eldest girl in a big family. And that’s before she’s put a single glove on to train.<br/>
    Ruqsana’s road to glory in one of the hardest sports around was not easy. Coming from a strict Bengali Muslim tradition, the thought that a young woman would choose to compete in the kickboxing ring would not sit well with some in her community.<br/>
    But Ruqsana has fought hard to explode negative perceptions of women in sport, and indeed young British Muslims and remains a shining example to young British people the length and breadth of the nation regardless of race, colour or creed.<br/>
    An Olympic Torchbearer in 2012 in her home city, Ruqsana has been nominated for several awards for her outstanding community work alongside her sporting achievements, including working with the Dame Kelly Holmes Get on Track Programme; such as the Sky Sports Sportswoman of the Year, Muslim News Sportswoman of the Year and the UK Muslim Women’s Sportsperson of the Year.<br/>
    The architecture graduate has also launched a stunning range of sports hijabs, SPORTS HIJABS BY RUQSANA BEGUM, specifically designed for young Muslim women who might feel too intimidated or ill-equipped to engage in sport, giving them the confidence to go out and take on the world, following her example.<br/>
    I want to encourage a new generation of sisters to go out and engage in sport, without embarrassment,” she says.<br/>
    The range of Lycra sportswear launches this month and can be viewed at…. sportshijab.co.uk</>)

const getAchievements = () => (<>Professional Boxer<br/>
    WKA 48kg World Champion<br/>
    British Atomweight Champion<br/>
    European Gold medallist<br/>
    World bronze medallist<br/>
    Ruqsana is available for interview regarding her new clothing line and plans for her first World Title defence.<br/>
    Pictures of Ruqsana and the clothing are available on request.</>)

const Bio = () => {
 return (
  <div>
       <BioBlock title='Background' img={backgroundImage} text='Having attained a BA in Architectural Technology and working within the field for a year, I soon realized that my passion lay in the sports arena. I took up Thai Boxing/kickboxing at the age of 18 and trained in secret whilst at university. The reason for keeping my sport secret was that I was I afraid to tell my family who might not approve of such a demanding and male dominated sport coming from a traditional Muslim Bangladeshi background. I had to break down stereo types and cultural boundaries in order to train and accomplish my goal of being a national champion. In 2009 I was selected for the GB team where I squired a bronze medal in the world championship. In 2010 I became the British atom weight champion. In 2011 I won the European gold medal from Latvia. In 2012 I secured a bronze medal and in 2013 I fought for the world title, unfortunately the fight was stopped however a re-match is due in November. I currently work part time as a science technician and I conduct a few sessions in the week, however I know that my business has not fulfilled its potential. I have also completed my personal training qualification.' />
       <BioBlock reverse title='Press Release' img={pressReleaseImage} text={getPressRelease()} />
      <BioBlock title='Achievements:' img={achievementsImage} text={getAchievements()} />
  </div>)
}

export default Bio;
