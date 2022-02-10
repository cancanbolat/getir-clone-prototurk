import React from 'react'
import HeroSection from "components/HeroSection";
import Categories from "components/Categories";
import Campaigns from "components/Campaigns";
import Favorites from "components/Favorites";
import MobileApp from "components/MobileApp";
import Cards from "components/Cards";
import { useWindowWidth } from '@react-hook/window-size'

export default function Home() {

    const windowWidth = useWindowWidth();

    return (
        <div>
            {windowWidth <= 768 && <Campaigns />}
            <HeroSection />
            <Categories />
            {windowWidth > 768 && <Campaigns />}
            <div className="container mx-auto grid gap-y-6 pt-8">
                <Favorites />
                <MobileApp />
                <Cards />
            </div>
        </div>
    )
}
