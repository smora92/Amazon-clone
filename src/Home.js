import React from "react"
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/61vJg5FIneL._SX3000_.jpg"
                    alt="home__banner"
                />

                <div className="home__row">
                    <Product title="The ordinary matryxl" price={29.19}
                        image={
                            "https://images-eu.ssl-images-amazon.com/images/I/613tD+4lQkL._AC_UL160_SR160,160_.jpg"
                        } rating={5} />
                    <Product title="GK" price={156.00}
                        image={
                            "https://images-eu.ssl-images-amazon.com/images/I/71gsr1TbFZS._AC_UL160_SR160,160_.jpg"
                        } rating={4} />
                </div>

                <div className="home__row">
                    <Product title="heat resistant kitchen mitten" price={25.00}
                        image={
                            "https://images-eu.ssl-images-amazon.com/images/I/71vefftupnS._AC_UL160_SR160,160_.jpg"
                        } rating={4} />
                    <Product title="Mind Reader compartment cups organizer"
                        price={130.37}
                        image={
                            "https://images-eu.ssl-images-amazon.com/images/I/7143pmewAdL._AC_UL160_SR160,160_.jpg"
                        } rating={3} />
                    <Product title="Philips Lumea cordless hair removal device"
                        price={1900}
                        image={
                            "https://images-eu.ssl-images-amazon.com/images/I/617JOCJl-JL._AC_UL100_SR100,100_.jpg"
                        } rating={4} />
                </div>

                <div className="home__row">
                    <Product title="ionic shower filter" price={299}
                        image={
                            "https://m.media-amazon.com/images/I/516IrurJVUS._AC_SY200_.jpg"
                        }
                        rating={2}
                    />

                </div>
            </div>
        </div>
    )
}

export default Home;
