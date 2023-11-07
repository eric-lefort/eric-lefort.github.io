import React from 'react';
import './Cards.css';

function CardItemText(props) {
  return (
    <>
        <li className='cards__item__wrap'>
            <div className='cards__item__header'>
                <h2>{props.header}</h2>
            </div>
            <div className='cards__item__info'>
                <h5 className='cards__item__desc'>{props.children}</h5>
            </div>
        </li>
    </>
  );
}

export default CardItemText;