import { Button } from '@material-ui/core';
import React from 'react';
import './Address.css';
import {useForm} from "react-hook-form";
import { db } from '../Firebase';
import { useStateValue } from '../StateProvider';
import { useHistory } from 'react-router-dom';
import mercado from "../images/mercado_logo.png";

function Address() {
    const {register, handleSubmit, errors} = useForm();
    const [{user}, dispatch]=useStateValue();
    const history = useHistory()
    console.log("user id is", user)
    const onSubmit = (formData)=>{
        if(user){
            db.collection("users").doc(user.uid)
            .set({
                address:formData.address,
                city:formData.city,
                country: formData.country,
                phone: formData.phone,
            })
            dispatch({
                type:'SET_ADDRESS',
                item:{
                    address:formData.address,
                    city:formData.city,
                    country: formData.country,
                    phone: formData.phone,
                }
            })
            history.push('/payment');
        }
    }
    return (
        <>
       {!user ? (<div className="address">
            <div className="address__container">
                <img src={mercado} alt="logo" style={{height:"150px"}, {width:"140px"}}/>
                <h1>SIGN IN TO PURCHASE ITEM</h1>
            </div>
        </div>):(
            <div className="address">
            <div className="address__container">
                <h1>ADD YOUR DELIVERY ADDRESS</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input name="address" type="text" placeholder="Home address"  ref={register({required:true})}/>
                    <input name="city" type="text" placeholder="City" ref={register({required:true})} />
                    <input name="country" type="text" placeholder="Country" ref={register({required:true})} />
                    <input name="phone" type="text" placeholder="PhoneNumber" ref={register({required:true})} />
                    <Button variant="contained"
                    color="primary"
                    type="submit" className="address__send">ADD</Button>
                </form>
            </div>

            
        </div>)}
        </>
    )
}

export default Address
