import React from 'react';
import './Catagories.css';
const catogaries =[
    {
        id: 1,
        name: 'Plants',
        img: 'https://m.media-amazon.com/images/I/71RNsBDMoML._SL1500_.jpg'
    },
    {
        id: 2,
        name: 'seeds',
        img: 'https://nationaltoday.com/wp-content/uploads/2022/07/7-Seed-Gathering-Sunday.jpg'
    },
    {
        id: 3,
        name: 'Planters',
        img: 'https://img2.exportersindia.com/product_images/bc-full/dir_117/3509466/fibre-planters-1481862787-2643508.jpeg'
    },
    {
        id: 4,
        name: 'Plants Care',
        img: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/3/15/0/TS-86500719_woman-watering-plants-in-yard_s3x4.jpg.rend.hgtvcom.1280.1707.suffix/1400961927074.jpeg'
    }
]

const Catagories = () => {
    return (
        <div className='home-catogaries-container'>
            <h1>Type of Plants</h1>
            <div className='catagories-row'>
                {
                    catogaries.map((catagory) =>(
                        <div className='catagory-card' key={catagory.id}>
                        <img src={catagory.img} alt={catagory.name}  width="160" height="145"/>
                        <h3>{catagory.name}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Catagories;
