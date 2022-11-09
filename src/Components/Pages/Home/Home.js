import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';
import AboutMe from './AboutMe';
import Info from './Info';
import MiddleBanner from './MiddleBanner';
import Slider from './Slider';


const Home = () => {

    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            <Slider></Slider>
            <Services services={services}></Services>
            <MiddleBanner></MiddleBanner>
            <Info></Info>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;