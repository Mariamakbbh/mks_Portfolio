import React from 'react'
import {CardItems} from './CardItems'
import './Cards.css'

export const Cards = () => {
  return (
    <div className='cards'>
        <div className='quote'>
        <h1 id="quoteh1">
            "
            <span
             id="liking">Success is liking
            </span> 
            <span
             id="pinktext"> yourself,
            </span> 
            <br/> 
            <span
             id="liking">liking
            </span>
            <span
             id="pinktext"> what you do,
            </span> 
            <br/> 
            <span
             id="liking">and liking
            </span> 
            <span
             id="pinktext"> how you do it
            </span> 
            ."
        </h1>
        </div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems 
                    src="images/mirando.JPG"
                    text="Take a look at my portfolio!"
                    label = "Projects"
                    path = "/projects"
                    />
                    <CardItems 
                    src="images/aboutme.JPG"
                    text="Who Am I? Understand my background!"
                    label = "About Me"
                    path = "/aboutme"
                    />
                    <CardItems 
                    src="images/Contact.png"
                    text="Get in touch with me!"
                    label = "Contact"
                    path = "/getintouch"
                    />
                    {/* <CardItems 
                    src="images/private.jpeg"
                    text="Mariama's Corner"
                    label = "My Space"
                    path = "/private"
                    /> */}
                    
                </ul>
            </div>
        </div>

    </div>
  );
}
