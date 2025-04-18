import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links =<>
        <li><NavLink className={({isActive}) =>(isActive? 'bg-gray-700 text-white':'')} to='/'>Home</NavLink></li>
        <li><NavLink className={({isActive}) =>(isActive? 'bg-gray-700 text-white':'')} to='/about'>About</NavLink></li>
        <li><NavLink className={({isActive}) =>(isActive? 'bg-gray-700 text-white':'')} to='/appointment'>Appointment</NavLink></li>
        <li><NavLink className={({isActive}) =>(isActive? 'bg-gray-700 text-white':'')} to='/reviews'>Reviews</NavLink></li>
        <li><NavLink className={({isActive}) =>(isActive? 'bg-gray-700 text-white':'')} to='/contact'>Contact Us</NavLink></li>
        </>


    return (
        <div className="navbar bg-white/50 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <Link to='/'>DOCTOR PORTAL</Link>
            </div>

            {/* Desktop menu */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
                <Link to='/auth/login' className="btn">Login</Link>
            </div>

            {/* Mobile menu button */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;