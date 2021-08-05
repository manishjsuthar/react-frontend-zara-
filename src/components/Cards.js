import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC DESTINATIONS!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the hidden amazon jungle"
                        label="Adventure"
                        path='/services' />
                        <CardItem
                        src="images/img-home.jpg"
                        text="Explore the hidden waterfall deep inside the hidden amazon jungle"
                        label="Adventure"
                        path='/services' />
                           <CardItem
                        src="images/img-3.jpg"
                        text="Explore the hidden waterfall deep inside the hidden amazon jungle"
                        label="Adventure"
                        path='/services' />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the hidden amazon jungle"
                        label="Adventure"
                        path='/services' />
                        <CardItem
                        src="images/img-home.jpg"
                        text="Explore the hidden waterfall deep inside the hidden amazon jungle"
                        label="Adventure"
                        path='/services' />
                           <CardItem
                        src="images/img-1.jpg"
                        text="Explore the hidden waterfall deep inside the hidden amazon jungle"
                        label="Adventure"
                        path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
