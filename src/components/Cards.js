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
                        src='/img/seam-carving/BroadwayTowerSeamCarvingC.png'
                        text='Seam Carving: Content-Aware Image Resizing'
                        path='/projects/seam-carving' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/lsy-lab/lego-3.jpg'
                        text='Learning Systems Lab, TUM'
                        path='/projects/lsy-lab' />
                    <CardItem 
                        src='/img/mansfield-map/semi-finished.jpg'
                        text='Topographic map of Mount Mansfield, VT'
                        path='/projects/mansfield-map' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/cfd-lab/naca0012.jpeg'
                        text='Computational Aerodynamics Group, UTIAS'
                        path='/projects/cfd-lab' />
                    <CardItem 
                        src='/img/physics-engine/mozilla_aabb.png'
                        text='2D Physics Engine (WIP)'
                        path='/projects/physics-engine' />
                    <CardItem 
                        src='/img/website/react_logo.svg'
                        text='Building a website with React'
                        path='/projects/website' />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/lsy-rl/_.jpeg'
                        text='RL Research: Latent Actions'
                        path='/projects/lsy-rl' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards