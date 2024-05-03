import React from 'react'
import Card from './Card,js'
function Reservation(){

    const cards=[
        {
            image:"https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/greek-salad1.da4153859902e076458c.jpg",
            title:"Greek Salad",
            price:"12.99",
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            button:"Order Delivery"
        },
        {
            image:"https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/bruchetta.40310f42c67ccfe9571e5e5127e98059.svg",
            title:"Bruchetta",
            price:"5.99",
            description:"Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
            button:"Order Delivery"
        },
        {
            image:"https://www.laroccakitchensa.com/cdn/shop/products/LemonMousseCake2_1800x1800.jpg?v=1668104180",
            title:"Lemon Cake",
            price:"4.99",
            description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            button:"Order Delivery"
        }
    ]
    return(
        <div className='reservation'>
            <div className='head'>
                <div className="h">
                    <h1 className="title">Little Lemon</h1>
                    <h2 id="c">Chicago</h2>
                    <p id="p">We are a family owned by Mediterranean restaurants, focused on traditional recipes served with a modern twist. </p>
                    <button id="b">Reserve a Table</button>
                </div>
            </div>
            <div className='pic'>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4q2dgZS4ogpZAM9hbaBNBIdzNOgjR1EGcDX9tsb7x1oVku3Dn" height="350" width="290" alt="header pic"/>
            </div>
            <div className='specials'>
                <div className="s">
                    <h1 id="t">This week specials!</h1>
                </div>
                <div className='sp'>
                    <button id="o">Online Menu</button>
                </div>
            </div>
            <div>
                {cards.map((card)=>{
                    <Card
                    image={card.image}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                    button={card.button}
                    />
                })}
            </div>
        </div>
    )
}
export default Reservation