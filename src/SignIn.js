import React, { useState } from 'react';
import './SignIn.css'
import { Link, useHistory } from "react-router-dom";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import { auth } from "./firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault();

        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className='signin'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="signin_logo">
                    <EmojiNatureIcon className="signin_logo_img" fontSize="large" />
                    <h2 className="signin_logo_title">Buggy Boutique</h2>
                </div>
            </Link>

            <div className='signin_container'>
                <h1>Sign in</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='signin_button' onClick={signIn}>Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the Buggy Boutique Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='signin_registration' onClick={register}>Create your Buggy Boutique Account</button>
            </div>
        </div>
    )
}

export default SignIn;