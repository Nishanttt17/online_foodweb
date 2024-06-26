import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    // const {loggedinuser}=useContext(UserContext);
    const handleButtonClick = () => {
        setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
    };
    //subscribing  to the store using the selector
    const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg mb-2">
            <div className="Logo-container">
                <img className="w-56" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex  items-center p-4 m-4">
                    <li className="px-4">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4 font-bold text-xl ">
                    <Link to="/cart">cart 🛒({cartItems.length} items)</Link>
                    </li>
                    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center`} onClick={handleButtonClick}>
            {btnNameReact}
            </button>
            {/* <li className="px-4 font-bold">{loggedinuser}</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Header;
