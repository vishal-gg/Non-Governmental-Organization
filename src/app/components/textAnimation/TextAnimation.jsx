import React from 'react'

import './textAnimation.scss'

function TextAnimation () {
  return (
    <div className='textAnimation_container'>
      <section className='wrapper'>
        <h2 className='sentence'>
          Be the reason someone
          <div className='slidingVertical'>
            <span>smiles</span>
            <span>laughs</span>
            <span>feels joy</span>
            <span>is happy</span>
          </div>
        </h2>
      </section>
    </div>
  )
}

export default TextAnimation
