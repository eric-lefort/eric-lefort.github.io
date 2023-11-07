import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/atomic-ai/atomic_chess.png'
                        text='AtomicAi: A CNN atomic chess evaluation function'
                        path='/projects/atomic-ai' />
                    <CardItem 
                        src='/img/turtlebot-racing/img2.jpeg'
                        text='Racing Turtlebots and using ROS'
                        path='/projects' />
                </ul>
                {/* <ul className='cards__items'>
                    <CardItem
                        src='img/portfolio-website/img1.jpg'
                        text='Experience Football on Top of the Himalayan Mountains'
                        path='/education'
                    />
                </ul> */}
            </div>
        </div>
    </div>
  )
}

export default Cards