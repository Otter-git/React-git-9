import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../redux/actions";
import { db } from "../services/firebase";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [data, setData] = useState({});
    console.log(data);

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

    return (
        <div>
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
                            <tr key={id}>
                                <td><Link to={'/aboutcontact/' + data[id].name}>{data[id].name}</Link></td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td onClick={deleted} id={id}>Delete</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default HomePage;