import React from 'react'

import "./ServiceStyles.css"

const Service = () => {
  return (
    <div className='service-container container'>
        <h2 className='leading-text'>Our Services</h2>
        <div className='service-columns'>
            <div className='sales column'>
                <h4>Sales</h4>
                <p>We sell and build machines for cold room business.
                If you are looking into investing in the cold room business or you want to process
                birds such as: Chickens, Turkey etc, We are the right plug for sales and building 
                machines.
                </p>
                <p className='btn btn-linear col-btn'>Get Quote</p>
            </div>
            <div className='installation column'>
                <h4>Installation</h4>
                <p>We sell and build machines for cold room business.
                If you are looking into investing in the cold room business or you want to process
                birds such as: Chickens, Turkey etc, We are the right plug for sales and building 
                machines.
                </p>
                <p className='btn btn-linear col-btn'>Get Quote</p>
            </div>
            <div className='consultancy column'>
                <h4>Consultancy</h4>
                <p>We sell and build machines for cold room business.
                If you are looking into investi col-btnng in the cold room business or you want to process
                birds such as: Chickens, Turkey etc, We are the right plug for sales and building 
                machines.
                </p>
                <p className='btn btn-linear col-btn'>Get Quote</p>
            </div>
            <div className='design column'>
                <h4>Design</h4>
                <p>We sell and build machines for cold room business.
                If you are looking into investing in the cold room business or you want to process
                birds such as: Chickens, Turkey etc, We are the right plug for sales and building 
                machines.
                </p>
                <p className='btn btn-linear col-btn'>Get Quote</p>
            </div>
        </div>
    </div>
  )
}

export default Service