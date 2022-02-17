import React from "react";
import Navbar from './components/Navbar.js'
import './App.css'
import Hero from './components/Hero.js'
import Card from './components/Card.js'

import {datas} from './data.json'

 function App() {

    const cards =datas.map((item => {
        return (
            <Card 
                key={item.id}
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
                item={item}
            />
        )
    })        
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
           

        </div>
    )
}

export default App


