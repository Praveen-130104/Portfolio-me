import React from 'react';
import Experience from './experience';
import { Skills } from './skills';
import Navbar from './navbar';
import Me from './me';

const About = () => {
    return (
        <div>
            <Navbar/>
            <Me/>
            <Skills/>

            <Experience></Experience>
            
        </div>
    );
    }
    export default About;