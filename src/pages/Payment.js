import axios from "../axios";
import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import './Payment.css';
import { useStateValue } from '../StateProvider';
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import {db} from '../Firebase';

function Payment() {
    const [{user, basket, address}, dispatch]=useStateValue();
    const stripe = useStripe();
    const history = useHistory(); 
    const elements = useElements();
    const [succeeded, setSucceeded] =useState(false);
    const [processing, setProcessing]= useState("");
    const [ error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    useEffect(()=>{
        //generate the special stripe secret which allows us to charge customer
        const getClientSecret = async ()=>{
            const response = await axios({
                method: 'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])
    console.log(clientSecret)

    const handleSubmit =async(event)=>{
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            console.log(basket)
            console.log(paymentIntent.amount)
            console.log(paymentIntent.created)
            //paymentIntent = paymentConfirmation
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            localStorage.removeItem("basket")
            history.replace('/orders') //Dont wwanna come back to the payment page
        }) 

    }
    const handleChange =e =>{
        setDisabled(e.empty);
        setError(e.error?e.error.message:"");
    }
    return (
        <div className='payment'>
            <h1>
                Checkout(<Link to='/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className='payment__container'>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{address?.address}</p>
                        <p>{address?.city}</p>
                        <p>{address?.country}</p>
                        <p>{address?.phone}</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText ={(value)=>(
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing?<p>Processing</p>:
                                    "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Payment
