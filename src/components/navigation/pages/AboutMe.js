import React from 'react';
import '../../../App.css';
import './Home.css';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';
import {HeroAbtMe} from '../../aboutMeComponents/HeroAbtMe';


export const AboutMe = () => {
  return (
    <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
            <FullpageSection className='FullPageSections'>
                <HeroAbtMe/>
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



    