import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Product.css"
const Product = () => {
    const [product, setProduct] = useState([
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/71RTEWYw+0L._AC_UL480_FMwebp_QL65_.jpg',
            nam: 'Tricep Press Down Cable',
            desc: 'STRAIGHT BAR, 27"TRICEP ROPE',
            price: 2000
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/41q9Cc2fhoL._AC_.jpg',
            nam: 'Sole Sneaker Balls ',
            desc: 'Diameter:1.5 inches,Quick twist action',
            price: 500
        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/816ILZoFd1L._AC_SX679_.jpg',
            nam: 'Yoga Mat',
            desc: '71" long 24" wide, non-slip surfaces ',
            price: 300
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71w+OXJBPRL._AC_SX679_.jpg',
            nam: 'Home-Gym System',
            desc: 'Door anchor, Handles for comfort',
            price: 1000
        },
        {
            id: 5,
            img: 'https://m.media-amazon.com/images/I/819EUE2wXDL._AC_SX679_.jpg',
            nam: 'Workout Mat',
            desc: 'PORTABLE TAILOR FOR COMFORT',
            price: 700
        },
        {
            id: 6,
            img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71+pOdQ7iKL._AC_SX679_.jpg',
            nam: 'Adjustable Dumbbells',
            desc: '5 - 52.5 lbs per Adjustable Dumbbell',
            price: 8000
        },
        {
            id: 7,
            img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71Vsic3B5vL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            nam: 'Hand Grip',
            desc: 'Hand Strength,Grip Strength Trainer',
            price: 500
        },
        {
            id: 8,
            img: 'https://m.media-amazon.com/images/I/91D+gmM61mL._AC_SX679_.jpg',
            nam: 'Weightlifting Gym Gloves',
            desc: 'HEAVY DESIGN,LIFTING STRAPS',
            price: 800
        }


    ]);
    const [protein, setprotein] = useState([
        {
            id: 1,
            img: 'https://m.media-amazon.com/images/I/61u-qC6Z-mL._AC_SX679_.jpg',
            nam: 'Whey Protein Powder',
            desc: 'Packaging may vary - New look',
            price: 10000
        },
        {
            id: 2,
            img: 'https://m.media-amazon.com/images/I/81wI8uQBJSL._SX679_.jpg',
            nam: 'Organic Vegan Protein',
            desc: 'Low Net Carbs, Non Dairy, Gluten.',
            price: 5000

        },
        {
            id: 3,
            img: 'https://m.media-amazon.com/images/I/71yK94PB5hL._AC_SX679_.jpg',
            nam: 'ISO100 Hydrolyzed Protein ',
            desc: 'Scientifically proven, fast-digesting.',
            price: 7000
        },
        {
            id: 4,
            img: 'https://m.media-amazon.com/images/I/61bd4CsBJeL._AC_SX679_.jpg',
            nam: 'Isopure Unflavored ',
            desc: 'Protein, Zero Carb & Keto Friendly',
            price: 8000
        },
        {
            id: 5,
            img: 'https://m.media-amazon.com/images/I/71xqQt2xvpL._AC_SX679_.jpg',
            nam: 'Optimum Nutrition Gold',
            desc: 'Help build lean and strong muscles',
            price: 7500
        },
        {
            id: 6,
            img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71VnPaPPd3L._AC_SX679_.jpg',
            nam: 'Protein Powder',
            desc: 'Low in Fat, NSF Certified for Sport',
            price: 8000
        },
        {
            id: 7,
            img: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/818Hq49X08L._AC_SL1500_.jpg',
            nam: 'Dymatize Super Mass',
            desc: ' Blend of fast, medium, digesting proteins',
            price: 7500
        },
        {
            id: 8,
            img: 'https://m.media-amazon.com/images/I/51FD2MIzj8L.jpg',
            nam: 'Cookbook',
            desc: 'Over 600 Friendly & Easy Recipes',
            price: 400
        }
    ]);


    return (
        <div className="product-container">
            <Navbar/>
            <h3>GYM EQUIPMENT</h3>
            <section className="section-container">

                {
                    product.map((data) => (
                        <div className="card-container" key={data.id}>
                            <div className="card-img-container">
                                <img src={data.img} />
                            </div>
                            <div className="card-info-con">
                                <h5>{data.nam}</h5>
                                <p>{data.desc}</p>
                                <strong>RS: {data.price}</strong>
                            </div>
                            <div>
                                <Link to="/Buyproduct"> <button className="btn-card">Buy Now</button></Link>
                            </div>
                        </div>
                    ))
                }
            </section>
            <br></br>
            <h3>PROTEIN</h3>
            <section className="section-container">

                {
                    protein.map((data) => (
                        <div className="card-container" key={data.id}>
                            <div className="card-img-container">
                                <img src={data.img} />
                            </div>
                            <div className="card-info-con">
                                <h5>{data.nam}</h5>
                                <p>{data.desc}</p>
                                <strong>RS: {data.price}</strong>

                            </div>
                            <div>
                                <Link to="/Buyproduct"> <button className="btn-card">Buy Now</button></Link>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default Product;