import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";

const AboutContactPage = () => {
    const [data, setData] = useState({});
    const { userName } = useParams();

    useEffect(() => {
        db.child('contacts').on('value', (snap) => {
            for(let i in snap.val()) {
                if (userName === snap.val()[i]["name"]) {
                    setData({...snap.val()[i]})
                }
            }
        })
    }, [])

    return (
        <div>
            <h3>{userName}</h3>
            <div>
                <p>{data.name}</p>
                <p>{data.email}</p>
                <p>{data.contact}</p>
            </div>
        </div>
    )
};

export default AboutContactPage;