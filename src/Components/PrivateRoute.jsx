import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
    const currentUser = useSelector(state => state.userSlice.user);

    return currentUser ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
