import React from 'react';
import Headercrousal from '../UI/home/Headercrousal';
import Bestseller from '../UI/home/Bestseller';
import Catagories from '../UI/home/Catagories';
import Newarrival from '../UI/home/Newarrival';



const Home = () => {
    return (
        <div>
           <>
           <Headercrousal/>
           </> 
            <Catagories/>
            <Bestseller/>
            <Newarrival/>
        </div>
    );
}

export default Home;
