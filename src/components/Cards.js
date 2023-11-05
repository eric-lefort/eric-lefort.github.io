import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these epic destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='/img/img-9.jpg'
                        text='Explore the hidden waterfall in the Amazon rainforest'
                        label='Adventure'
                        path='/services' />
                    <CardItem 
                        src='/img/img-2.jpg'
                        text='Travel through the islands of Bali in a private cruise'
                        label='Luxury'
                        path='/services' />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='img/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                    />
                    <CardItem
                        src='img/img-4.jpg'
                        text='Experience Football on Top of the Himalayan Mountains'
                        label='Adventure'
                        path='/products'
                    />
                    <CardItem
                        src='img/img-8.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards