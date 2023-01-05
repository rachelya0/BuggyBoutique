import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://i.pinimg.com/736x/3e/c1/37/3ec1376042d4095b520b08dddc16d115.jpg" className="home_img"/>
                
                    <div className="home_row">
                        <Product
                            id="123123123"
                            title="Flower Power Cardigan"
                            price={24.99}
                            rating={5}
                            image={require('./cardigan.png')}
                        />
                    </div>
                    <div className="home_row">
                        <Product 
                            id="987654321"
                            title="Corduroy P-Ants"
                            price={11.86}
                            rating={4}
                            
                        />
                        <Product
                            id="021021021"
                            title="Nectar Skirt"
                            price={33.33}
                            rating={3}

                        />
                    </div>
                    <div className="home_row">
                        <Product 
                            id="123456789"
                            title="Grass Top"
                            price={9.72}
                            rating={1}

                        />
                        <Product 
                            id="010101010"
                            title="Bee-shirt"
                            price={17.54}
                            rating={2}

                        />
                        <Product 
                            id="909090909"
                            title="Hydrangea Hat"
                            price={6.13}
                            rating={4}

                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home