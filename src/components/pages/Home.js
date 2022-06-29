import React from 'react';
import '../../App.css';
import './Home.css';
import {Cards} from '../homeComponents/Cards';
import {HeroSection} from '../homeComponents/HeroSection';
import {LoginSection} from '../homeComponents/LoginSection';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';


export const Home = () => {
  return (
    <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
            <FullpageSection className='FullPageSections'>
                <HeroSection/>
            </FullpageSection>

            <FullpageSection className='FullPageSections'>
                <Cards/>    
            </FullpageSection>

            <FullpageSection className='FullPageSections'>
                <LoginSection/>
            </FullpageSection>

        </FullPageSections>
      
    </Fullpage>
    );
}



    