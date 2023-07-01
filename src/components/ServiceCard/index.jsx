import React from 'react'
import './serviceCard.css'
import Image from '../../components/Image';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className='service_card'>
      <Image src={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ServiceCard