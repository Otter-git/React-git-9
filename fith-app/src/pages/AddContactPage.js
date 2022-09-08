import React, { useState } from "react";
import { db } from "../services/firebase";

const initialState = {
    name: '',
    email: '',
    contact: '',
}

const AddContactPage = () => {
    const [state, setState] = useState(initialState);
    const {name, email, contact} = state;
    
    const sendForm = (event) => {
        event.preventDefault();
        if(!name || !email || !contact) {
            console.log('add information about user')
        } else {
            db.child('contacts').push(state, (err) => {
                if(err) {
                    console.log(err)
                }
            })
        }
    }

    const changed = (event) => {
        const {name, value} = event.target;
        setState({...state, [name]: value})
    }

    return (
        <div>
            <h3>Add contact</h3>
            <form onClick={sendForm}>
                <label htmlFor={'name'}>Name</label>
                <input id={'name'} name={'name'} onChange={changed} value={name}/>
                <label htmlFor={'email'}>E-mail</label>
                <input id={'email'} name={'email'} onChange={changed} value={email}/>
                <label htmlFor={'contact'}>Contact</label>
                <input id={'contact'} name={'contact'} onChange={changed} value={contact}/>
                <input type={'submit'} value={'save'}/>
            </form>
        </div>
    )
};

export default AddContactPage;