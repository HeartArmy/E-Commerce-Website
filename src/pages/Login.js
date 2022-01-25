import React, { useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../Firebase';
import './Login.css';
import mercado from "../images/mercado_logo.png";

function Login() {
    const history = useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');
    const signIn = e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error=>alert(error.message))
    }

    const register =e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                    <img  src={mercado} alt="" className="login__logo" />
                </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                by signing in you agree to mercado condition of use and sale.Please see our privacy notice, our cookies notice and our interest based ad notice. 
                </p>
                <button type='submit' onClick={register} className='login__registerButton'>Create Your Mercado Account</button>
            </div>
        </div>
    )
}

export default Login
