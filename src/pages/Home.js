import React, {useState, useEffect} from 'react';
import "./Home.css";
import Product from '../components/Product';
import { useStateValue } from '../StateProvider';
import grocery from '../images/grocery.jpg';
import grocery2 from '../images/grocery2.jpg';
import grocery3 from '../images/grocery3.jpg';
import grocery4 from '../images/grocery4.jpg';
import {db} from "../Firebase";


function Home() {
  const [{category}, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  console.log(category)
  useEffect(()=>{
    db.collection(category).onSnapshot((snapshot)=>(
        setProducts(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
        })))
      ))
  }, [category])
    return (
        <div className="home">
            <div className="home__container">
              <div className="slider">
              <figure className="figure">
                <img
                    className="home__image"
                    src={grocery}
                    alt=""
                />
                <img
                    className="home__image"
                    src={grocery2}
                    alt=""
                />
                <img
                    className="home__image"
                    src={grocery3}
                    alt=""
                />
                <img
                    className="home__image"
                    src={grocery4}
                    alt=""
                />
                </figure>
                </div>

<div className="home__row">

        {products.slice(0, 3).map(({id, data:{title, price, rating, image}})=>(
              <Product
              key={id}
              id={id}
              title={title}
              price={price}
              rating={rating}
              image={image}
            />

        ))}
          {/* <Product
            id="49538094"
            title="Pepper"
            price={239.0}
            rating={4}
            image={pro2}
          /> */}
        </div>

        <div className="home__row">
          {/* <Product
            id="4903850"
            title="Bananas"
            price={199.99}
            rating={3}
            image={pro3}
          /> */}
          {/* <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          /> */}
        </div>

        {/* <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div> */}
            
            </div>
            
        </div>
    )
}

export default Home
