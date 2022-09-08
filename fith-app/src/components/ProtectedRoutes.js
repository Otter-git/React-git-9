import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const ProtectedRoutes = ({children}) => {
    const user = useSelector(state => state.currentUser);
    if(!user) {
        return <LoadingToRedirect/>
    }
    return children
};

export default ProtectedRoutes;