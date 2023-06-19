import React from 'react';
import '../../../App.css';
import './Home.css';
import {Cards} from '../../homeComponents/intro_section/Cards';
import {HeroSection} from '../../homeComponents/hero_section/HeroSection';
import {LoginSection} from '../../homeComponents/info_section/login/LoginSection';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation}  from '@ap.cx/react-fullpage';



export const Home = () => {

  // const StyleSection = {
  //   height: '100vh',
  //   width: '100vh',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alightItems: 'center',
  //   overflow:'hidden',
  // };


  
  return (
    <Fullpage keyboardShortcut={false}>
        <FullpageNavigation/>
        <FullPageSections >
            <FullpageSection >
                <HeroSection/>
            </FullpageSection>

            <FullpageSection>
                <Cards/>    
            </FullpageSection>

            <FullpageSection >
                <LoginSection/>
            </FullpageSection>

        </FullPageSections>
      
    </Fullpage>
  );
}



    