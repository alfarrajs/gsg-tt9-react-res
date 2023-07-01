import React, { Component } from 'react'
import Button from '../../components/Button'
import Container from '../../components/container'
import Navbar from '../../components/Navbar'

import './style.css'

export default class HeroSection extends Component {
  render() {
    return (
      <React.Fragment>
        <header className='landing'>
          <div className='layer'></div>
          <Container>
            <Navbar />
            <div className='greeting'>
              <h1>Welcome To Golden View Dine</h1>
              <p>Explore the authentic vegan dishes with your friends and family</p>
              <Button title="Read more" customClassName="btn" />
              {/* btn is the sharing btn*/}
            </div>
          </Container>
        </header>
        <div className="box"></div>
      </React.Fragment>
    )
  }
}
