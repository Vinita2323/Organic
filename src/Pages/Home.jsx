import React from 'react'
import SaleSection from '../Components/SaleSection'
import Features from '../Components/Features'
import Categories from '../Components/Categories'
import FeaturedProducts from '../Components/FeaturedProduct'
import CategoryBanners from '../Components/CategoryBanners'
import DealsDay from '../Components/DealsDay'
import OrganicIntro from '../Components/OrganicIntro'
import ExploreProducts from '../Components/ExploreProducts'
import HeroSection from '../Components/HeroSection'



const Home = () => {
  return (
    <div>
     <HeroSection/>
       <SaleSection/> 
        <Features/> 
        <Categories/>
        <FeaturedProducts/>
        <CategoryBanners/>
        <DealsDay/>
        <OrganicIntro/>
        <ExploreProducts/>
        
    </div>
  )
}

export default Home
