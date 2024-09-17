import React from 'react'
import "./buttons.css"
import Background from './background';

export default function buttons() {
  return (
    <section className='todo'>
      <div className='botones'>
      <button className='buttonMac'>Download for Mac</button>
      <button className='buttonBrowser'>Open Discord in your browser</button>
    </div>
    <div>
      <Background/>
    </div>

    </section>
    
  )
}
