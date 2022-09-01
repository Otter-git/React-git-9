import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../redux/actions";

const HomePage = () => {
    const user = useSelector(state => state.currentUser); 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const exit = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 2000)
    }

    return (
        <div>
            <h3>Home</h3>
            <button onClick={exit}>Log out</button>
        </div>
    )
};

export default HomePage;