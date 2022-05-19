import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>TOP LISTINGS FOR YOU!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/babysit.jpg'
              text='Babysitting Description TBD'
              label='Babysitting'
              path='/viewPosts/Babysitters'
            />
            <CardItem
              src='/tutor.jpg'
              text='Tutor Description TBD'
              label='Tutoring'
              path='/viewPosts/Tutors'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/daycare.jpg'
              text='Daycare Description TBD'
              label='DayCare'
              path='/viewPosts/Daycare'
            />
            <CardItem
              src='/piano.jpg'
              text='Lessons Description TBD'
              label='Lessons'
              path='/viewPosts/Lessons'
            />
            <CardItem
              src='/hack.jpg'
              text='Teach your children how to hack'
              label='Coaches'
              path='/viewPosts/Coaches'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;