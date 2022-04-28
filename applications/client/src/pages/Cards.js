import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>TOP LISTINGS YOU SHOULD SEE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/babysit.jpg'
              text='Babysitting Description TBD'
              label='Childcare'
              path='/services'
            />
            <CardItem
              src='/tutor.jpg'
              text='Tutor Description TBD'
              label='Education'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/daycare.jpg'
              text='Daycare Description TBD'
              label='Childcare'
              path='/services'
            />
            <CardItem
              src='/piano.jpg'
              text='Lessons Description TBD'
              label='Education'
              path='/products'
            />
            <CardItem
              src='/hack.jpg'
              text='Teach your children how to hack'
              label='Totally Legal Thing'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;