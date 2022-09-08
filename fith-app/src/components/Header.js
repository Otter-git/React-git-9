import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import CustomLink from './CustomLink';
import { logoutInitiate } from "../redux/actions";

const Header = () => {
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
        <div className='header'>
            <Link to={'/'} className={'logo'}>
                Contact App
            </Link>
            <div className='header-right'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/addContact'}>Add contact</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/register'}>Registration</CustomLink>
                {user ? (
                    <button onClick={exit}>
                        Log out
                    </button>
                ) : (
                    <CustomLink to={'/login'}>
                        Log in
                    </CustomLink>
                )}
            </div>
        </div>
    )
}

export default Header;