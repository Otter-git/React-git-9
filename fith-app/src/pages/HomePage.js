import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";
import '../style/homePage.css';

const initialState = {
    name: '',
    email: '',
    contact: '',
}

const HomePage = () => {
    const [data, setData] = useState({});
    const [state, setState] = useState(initialState);
    const {name, email, contact} = state;

    useEffect(() => {
        db.child('contacts').on('value', (snap) => {
            if(snap.val() !== null) {
                setData({...snap.val()})
            } else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [])

    const deleted = (event) => {
        db.child(`contacts/${event.target.id}`).remove((err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Deleted");
            }
          });
    }

    const changed = (event) => {
        const {name, value} = event.target;
        setState({...state, [name]: value})
    }

    const sendForm = (event) => {
        event.preventDefault();
        if(!name || !email || !contact) {
            console.log('add information about user');
        } else {
            db.child(`contacts/${event.target.id}`).update({
            'name': state.name,
            'email': state.email,
            'contact': state.contact,
            })
            setState(initialState);
        }
    }


    return (
        <div className='container'>
            {Object.keys(data).map((id) => {
                return (
                    <div className='userBlock' key={id}>
                        <div><Link to={'/aboutcontact/' + data[id].name}>{data[id].name}</Link></div>
                        <div>{data[id].email}</div>
                        <div>{data[id].contact}</div>
                        <form onClick={sendForm}>
                            <input placeholder='name' name={'name'} onChange={changed} value={name}/>
                            <input placeholder='email' name={'email'} onChange={changed} value={email}/>
                            <input placeholder='contact' name={'contact'} onChange={changed} value={contact}/>
                            <button id={id} type="submit">Edit</button>
                        </form>
                        <button onClick={deleted} id={id}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
};

export default HomePage;