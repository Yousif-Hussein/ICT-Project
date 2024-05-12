import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
function Home(){

    const cards=[
        {
            image: ()=>"https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/greek-salad1.da4153859902e076458c.jpg",
            title:"Greek Salad",
            price:"$12.99",
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.",
            button:"Order Delivery"
        },
        {
            image:()=>"https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg",
            title:"Bruchetta",
            price:"$5.99",
            description:"Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            button:"Order Delivery"
        },
        {
            image:()=>"https://www.laroccakitchensa.com/cdn/shop/products/LemonMousseCake2_1800x1800.jpg?v=1668104180",
            title:"Lemon Cake",
            price:"$4.99",
            description:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            button:"Order Delivery"

        }
    ]
    return(
        <div className='home'>
            <section className='head'>
                <div className="h">
                    <h1 className="title">Little Lemon</h1>
                    <h2 id="c">Chicago</h2>
                    <p id="p">We are a family owned by Mediterranean restaurants, focused on traditional recipes served with a modern twist. </p>
                    <Link to="/reservation" id='b'>Reserve a Table</Link>
                </div>
            </section>
            <section className='pic'>
                <img src="https://littlelemonrestaurantankitamwebsiteproject.netlify.app/static/media/restaurantFood.088c3dd386b046ca6ce7.jpg" height="350" width="290" alt="header pic"/>
            </section>
            <section className='specials'>
                <div className="s">
                    <h1 id="t">This week specials!</h1>
                </div>
                <div className='sp'>
                    <button id="o">Online Menu</button>
                </div>
            </section>
            <section className='cards'>
                {cards.map((card)=>(
                    <Card
                    image={card.image()}
                    title={card.title}
                    price={card.price}
                    description={card.description}
                    button={card.button}
                    />
                ))}
            </section>
        </div>
    )
}
export default Home;