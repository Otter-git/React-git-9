import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/actions";

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    }, [user, navigate])

    const sendForm = (event) => {
        event.preventDefault()
        if(!email || !pass) {
            return
        }
        dispatch(loginInitiate(email, pass))
    } 

    return (
        <div>
            <h3>Log in</h3>
            <form onSubmit={sendForm}>
                <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                <input type='password' value={pass} onChange={(event) => setPass(event.target.value)}/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
};

export default LoginPage;