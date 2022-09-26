import React from 'react';
import './Bestseller.css';
const containTree =[
    {
        id: 1,
        name:'Breadth',
        img: 'https://www.thespruce.com/thmb/2OMFmDIQwfnbYtCTQhFH1aLCr9g=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-01-5249df08e1324da7a57e6233864d5c54.JPG',
        newPrice:500,
        oldPrice:800
    },
    {
        id: 2,
        name:'Foxglove',
        img: 'https://www.thespruce.com/thmb/hSudrNv0XaZw6evMA1l0FKTBFcY=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Fairy-Foxglove-Erinus-alpinus-2e40ed2907814bebb2cb1aac8b1ba3fc.jpg',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 3,
        name:'Forget-Not',
        img: 'https://www.thespruce.com/thmb/OjBjyHkevyflsAHfG1lN5eYI4tk=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-03-67f6ae66f12a4c56be0ebc3975781443.JPG',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 4,
        name:'Kenilworth',
        img: 'https://www.thespruce.com/thmb/MTOIOHB5bNEpdM6ffEhjUvjNu_s=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-04-4eb4388d81264a129c7fa9ca0789adef.jpg',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 5,
        name:'Lobelia',
        img: 'https://www.thespruce.com/thmb/ASLHMuBnnzYG0-d0qhna2UNpwrc=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-05-1e6e98e0cde34ab5ac855d4470c9cf63.jpg',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 6,
        name:'Rock Cress',
        img: 'https://www.thespruce.com/thmb/rCc-MwAsWBFLgOss9BhePQ359Ys=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/rockcress-565f13c75f9b5835e4ae26ef.jpg',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 7,
        name:'Snowmmer',
        img: 'https://www.thespruce.com/thmb/JN4x2ffPR2e0zMzFF5TZtG05xvM=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-07-f81a0379640d4fb68828e6762668cb19.jpg',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 8,
        name:'Alyssum',
        img: 'https://www.thespruce.com/thmb/Rg9Uo02zXwZIG4P267IcmMpnItg=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-08-c3307b98f8ff405795216057da903b96.jpg',
        newPrice:200,
        oldPrice:400
    },
    {
        id: 9,
        name:'Thyme',
        img: 'https://www.thespruce.com/thmb/tHCnCsEFbJc_yMFx6OT2ytnRjy4=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tiny-flowers-1315816-09-efd761ea1bb84a6fb1ac51fa75ea05b9.jpg',
        newPrice:200,
        oldPrice:400
    }
]

const Bestseller = () => {
    return (
        <div className='home-bestseller-container'>
            <h1 className='section-heading'>Bestseller</h1>
            <div className='bestseller-row'>
                {
                    containTree.map(plant => (
                        <div key={plant.id} className='bestseller-card'>
                        <img src={plant.img} alt={plant.name} width="160" height='145' />
                        <h3>{plant.name}</h3>
                        <div className='price'>
                            <p>${plant.newPrice}</p>
                            <p className='oldprice'>${plant.oldPrice}</p>
                        </div>
                        <button className='button'>Add to card</button>


                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Bestseller;
