import React from 'react'
import './Impact.scss'

function Impact () {
  return (
    <div className='impact__container'>
      <h2 className='title'>Our Impact</h2>
      <div className='wrapper'>
        <div className='detail__wrapper'>
          <p className='detail__number'>15+</p>
          <p className='detail__title'>Lac</p>
          <p className='detail__description'>
            children and their families are impacted every year
          </p>
        </div>
        <div className='detail__wrapper'>
          <p className='detail__number'>2000+</p>
          <p className='detail__title'>villages</p>
          <p className='detail__description'>
            and slums are reached out to across the country
          </p>
        </div>
        <div className='detail__wrapper'>
          <p className='detail__number'>400+</p>
          <p className='detail__title'>projects</p>
          <p className='detail__description'>
            focused on education, healthcare, and women empowerment
          </p>
        </div>
        <div className='detail__wrapper'>
          <p className='detail__number'>25+</p>
          <p className='detail__title'>states</p>
          <p className='detail__description'>
            are reached including the remotest areas
          </p>
        </div>
      </div>
    </div>
  )
}

export default Impact
