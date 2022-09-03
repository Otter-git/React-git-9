import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerInitiate } from "../redux/actions";
import { useDispatch } from "react-redux";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const sendForm = (event) => {
        event.preventDefault();
        if(pass !== passConfirm) {
            return
        }
        dispatch(registerInitiate(email, pass, name))
    }

    return (
        <div>
            <header>
                <Link to={'/login'}>Log in</Link>
            </header>
            <h3>Registration</h3>
            <form onSubmit={sendForm}>
                <input value={name} onChange={(event) => setName(event.target.value)}/>
                <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                <input type='password' value={pass} onChange={(event) => setPass(event.target.value)}/>
                <input type='password' value={passConfirm} onChange={(event) => setPassConfirm(event.target.value)}/>
                <button type="submit">Confirm</button>
            </form>

        </div>
    )
};

export default RegisterPage;