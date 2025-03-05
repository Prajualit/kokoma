import React from 'react'
import Slider from './Slider/Slider.jsx'
import Products from './Products/Products.jsx'
import CoconutOil from './CoconutOil/CoconutOil.jsx'
import Explore from './Explore/Explore.jsx'
import WhyKokoma from './WhyKokoma/WhyKokoma.jsx'

const Home = () => {
    return (
        <>
            <Slider />
            <Products />
            <CoconutOil />
            <Explore />
            <WhyKokoma />
        </>
    )
}

export default Home
