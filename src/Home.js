import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="background image" />

                <div className="home__row"> 
                     <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed (Author)"
                        price={4424.56}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                     />
                     <Product 
                        id="02"
                        title="OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offer"
                        price={1299.20}
                        image="https://m.media-amazon.com/images/I/61CnyJ-IbML._SL1500_.jpg"
                     />
                     <Product
                        id="03"
                        title="The Watch Company Digital Black Dial Led Watch for Kids Unisex Birthday Gift Digital Watch"
                        price={160.40}
                        image="https://m.media-amazon.com/images/I/71IbtYa4G1S._UL1500_.jpg"
                     />
                </div>
                <div className="home__row">
                    <Product
                        id="04"
                        title="HP 14(2021) 10th Gen Intel Core i5 Laptop, 8GB RAM, 512GB SSD, 14-inch(35.6 cm) FHD Screen, 4G LTE, Win 10, MS Office, Natural Silver, 1.49 Kg (14s-er0503TU)"
                        price={42000.56}
                        image="https://m.media-amazon.com/images/I/61HIqJZKPkS._SL1324_.jpg"
                    />
                    <Product
                        id="05"
                        title="Redgear A-15 Wired Gaming Mouse with RGB, Semi-Honeycomb Design and Upto 6400 dpi for Windows PC Gamers"
                        price={599.04}
                        image="https://m.media-amazon.com/images/I/71bXtucWVNL._SL1500_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="06"
                        title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA (Black) (2021 Model)"
                        price={38999.02}
                        image="https://m.media-amazon.com/images/I/81sscKjSPiL._SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
