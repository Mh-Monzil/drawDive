import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth();
    const location = useLocation();
    console.log(location);
    console.log(loading);
    if(loading){
        return <div className="flex justify-center items-center">
            <span className="loading loading-spinner text-error">Loading</span>
        </div>
    }
    
    if(!user){
        console.log(user);
        return <Navigate to='/login' state={location.pathname} />
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;