import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../../Menu/Category';
import Blog from '../Blog';
import { HomeSlide, Favorite, AppleShop,
  GameShop, ProductCare, SellOff, HomeSingleFeatureProduct,
  ProductCollection } from "./index"


const HomePage = () => {
  return (
    <div className='pt-44'>
        <HomeSlide />
        <Favorite />
        <AppleShop />
        <GameShop />
        <SellOff />
        <HomeSingleFeatureProduct />
        <ProductCollection />
        <Blog />
    </div>
  )
}

export default HomePage