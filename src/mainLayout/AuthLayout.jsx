import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Outlet/>
        </div>
    );
};

export default AuthLayout;