import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';

const NavBar = () => {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
            dispatch(removeUser());
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="navbar bg-gray-500">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">Developer's Community</Link>
            </div>
            <div className="flex-none gap-2">
                {user && (
                    <div className="relative mx-10 flex">
                        <p className='px-4'>Welcome, {user.firstName}</p>
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="btn btn-ghost btn-circle avatar cursor-pointer"
                        >
                            <div className="w-10 rounded-full">
                                <img alt="user photo" src={user.photoUrl} />
                            </div>
                        </div>
                        {isDropdownOpen && (
                            <ul className="absolute right-0 mt-3 w-52 bg-base-100 rounded-box shadow-lg p-2 z-10">
                                <li>
                                    <Link to="/profile" className="justify-between" onClick={closeDropdown}>
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/connections" onClick={closeDropdown}>
                                        Connections
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => { closeDropdown(); handleLogout(); }}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
