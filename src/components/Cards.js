import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/atomic-ai/atomic_chess.png'
                        text='AtomicAi: A CNN atomic chess evaluation function'
                        path='/projects/atomic-ai' />
                    <CardItem 
                        src='/img/turtlebots/img2.jpeg'
                        text='Racing Turtlebots and using ROS'
                        path='/projects/turtlebots' />
                    <CardItem 
                        src='/img/physics-engine/mozilla_aabb.png'
                        text='2D Physics Engine (WIP)'
                        path='/projects/physics-engine' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/cfd-lab/naca0012.jpeg'
                        text='Summer Research: Computational Aerodynamics'
                        path='/projects/cfd-lab' />
                    <CardItem 
                        src='/img/website/react_logo.svg'
                        text='Building a website with React'
                        path='/projects/website' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards