import React from 'react'
import {MdLocationOn} from 'react-icons/md'
import {MdMail} from 'react-icons/md'
import {MdAddCall} from 'react-icons/md'
import {MdAccessTimeFilled} from 'react-icons/md'
import ladyImage from '../../assets/lady-img.png'

import './ContactStyles.css'

const Contact = () => {
  return (
    <div className='contact container'>
        <div className='left-lead'>
            <h2 className='lead-title'>Get in <span style={{fontWeight: '500'}}>touch</span></h2>
            <div className='address'>
                <MdLocationOn className='locationIcon' />
                <p>John Doe Street, Lagos, Nigeria</p>
            </div>
            <div className='mail'>
                <MdMail  className='mailIcon' />
                <p>info@devinecooling.com.ng</p>
            </div>
            <div className='call'>
                <MdAddCall  className='callIcon'/>
                <p>+234 701 234 5678</p>
                <p>+234 701 234 5678</p>
            </div>
            <div className='time'>
                <MdAccessTimeFilled  className='timeIcon' />
                <p>9:00am - 6:00am</p>
            </div>
        </div>

        <div className='lady_img'>
            <img src={ladyImage} alt="This is the picture of the lady" />
        </div>
    </div>
  )
}

export default Contact