import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../redux/actions";
import { db } from "../services/firebase";

const HomePage = () => {
    const [data, setData] = useState({});

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

    return (
        <div>
            <h3>Home</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id) => {
                        return (
                            <tr key={data[id]}>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default HomePage;