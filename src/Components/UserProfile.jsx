import { useState } from "react";
import { NavLink } from "react-router-dom";
import avatar from "starter-code/icons8-user-30.png";

const UserProfile = () => {
    const [showSignInOptions, setShowSignInOptions] = useState(false);

    const signInHandler = () => {
        setShowSignInOptions(!showSignInOptions);
    };

    return (
        <div className='relative w-6 h-6 xl:w-11 xl:h-11'>
            <img
                src={avatar}
                alt='avatar'
                className='transition-all duration-200 border-2 border-white rounded-full cursor-pointer hover:scale-125'
                onClick={signInHandler}
            />

            {/* sign-in options */}
            <div
                className={`min-w-[7.5rem] text-white text-center
             bg-light-blue rounded absolute z-10 top-8 -left-24 transition-all duration-300 text-lg
             md:-left-24 md:top-8 xl:left-12 xl:-top-4 ${
                 showSignInOptions ? "h-24" : " h-0 overflow-hidden"
             }`}>
                <NavLink to='/signup'>
                    <span
                        className={`my-3 duration-200 hover:scale-105 block ${
                            showSignInOptions ? "opacity-100" : "opacity-0"
                        }`}>
                        Sign-Up
                    </span>
                </NavLink>

                <NavLink to='/login'>
                    <span
                        className={`my-3 duration-200 hover:scale-105 block ${
                            showSignInOptions ? "opacity-100" : "opacity-0"
                        }`}>
                        Log-In
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default UserProfile;
