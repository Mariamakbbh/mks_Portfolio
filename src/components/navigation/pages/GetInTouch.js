import React from 'react';
import '../../../App.css';
import './Home.css';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';
import {HeroGetInTouch} from '../../getInTouchComponents/HeroGetInTouch';


export const GetInTouch = () => {
  return (
    <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
            <FullpageSection className='FullPageSections'>
                <HeroGetInTouch/>
            </FullpageSection>

            <FullpageSection className='FullPageSections'>
                <h1>P2</h1>  
            </FullpageSection>

            <FullpageSection className='FullPageSections'>
                <h1>P3</h1>
            </FullpageSection>

        </FullPageSections>
      
    </Fullpage>
    );
}



    