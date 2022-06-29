import React from 'react'
import '../../App.css'
import { Button } from '../Button'
import './HeroSection.css'

export const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src='/videos/HomeVideo.mp4' autoPlay loop muted />
        <h1 id="nametxt">
            M
            <span
             id="normalNametxt">ariama &nbsp;
            </span> 
            K
            <span
             id="normalNametxt">ebbeh &nbsp;
            </span>
            S
            <span
             id="normalNametxt">uko
            </span>
        </h1>
        <p>I’m an aspiring full stack developer with a passion for creating beautiful and functional applications.</p>
        <br/>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Login <i className="far fa-play-circle" />
            </Button>
        </div>
    </div>
  )
}
