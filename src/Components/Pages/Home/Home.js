import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Slider from './Slider';


const Home = () => {

    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            <Slider ></Slider>
            <h2>home</h2>
        </div>
    );
};

export default Home;