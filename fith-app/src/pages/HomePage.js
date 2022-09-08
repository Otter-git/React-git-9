import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

const initialState = {
    name: '',
    email: '',
    contact: '',
}

const HomePage = () => {
    const [data, setData] = useState({});
    console.log(data);
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
        console.log(event.target.id);
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
        <div>
            <div>
                <div>
                    <div>
                        <div>Name</div>
                        <div>E-mail</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div>
                    {Object.keys(data).map((id) => {
                        return (
                            <div key={id}>
                                <div><Link to={'/aboutcontact/' + data[id].name}>{data[id].name}</Link></div>
                                <div>{data[id].email}</div>
                                <div>{data[id].contact}</div>
                                <button onClick={deleted} id={id}>Delete</button>
                                <form onClick={sendForm}>
                                    <input name={'name'} onChange={changed} value={name}/>
                                    <input name={'email'} onChange={changed} value={email}/>
                                    <input name={'contact'} onChange={changed} value={contact}/>
                                    <button id={id} type="submit">Edit</button>
                                </form>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default HomePage;