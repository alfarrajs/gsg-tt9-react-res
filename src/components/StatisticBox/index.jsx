import React from 'react'
import './statisticBox.css'
import Image from '../../components/Image'


const index = ({icon, number, text}) => {
  return (
    <div className='statistics_box'>
        <div className="icon">
            <Image src={icon} alt={text} />
        </div>
        <div className="numbers">
            <h4>{number}+</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default index