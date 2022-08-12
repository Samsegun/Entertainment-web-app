import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { navBarActions } from "ReduxStore/navbar";
import { userSliceActions } from "ReduxStore/userSlice";
import userIcon from "starter-code/user-icon.svg";
import userAvatar from "starter-code/user-avatar.svg";
import { auth, signOut } from "firebase.js";
import TippyWrapper from "./Tippy";

const UserProfile = () => {
    const userState = useSelector(state => state.userSlice.user);
    const navbarState = useSelector(state => state.navBar);
    const dispatch = useDispatch();

    // useEffect(() => {}, []);

    const signInOptions = () => {
        dispatch(
            navBarActions.setShowSignInOptions(!navbarState.showSignInOptions)
        );
        dispatch(
            navBarActions.setBackDrop(navbarState.backdrop ? false : true)
        );
    };

    const logOutHandler = () => {
        signOut(auth)
            .then(() => {
                dispatch(userSliceActions.logout());
                sessionStorage.removeItem("user");
                sessionStorage.removeItem("userImage");
                alert("You are currently signed out!");
            })
            .catch(err => {
                alert(err.message);
            });
    };

    return (
        <TippyWrapper value={"User options"}>
            <div className='relative w-6 h-6 xl:w-11 xl:h-11'>
                <div>
                    {/* {userState && (
                <span className='absolute z-10 block text-lg text-white bottom-12'>
                    {userState.displayName}
                </span>
            )} */}

                    {!userState && (
                        <img
                            src={userIcon}
                            alt='avatar'
                            className='transition-all duration-200 bg-white border-2 border-white rounded-full cursor-pointer hover:scale-125'
                            onClick={signInOptions}
                        />
                    )}

                    {userState && (
                        <img
                            src={
                                sessionStorage.getItem("userImage")
                                    ? sessionStorage.getItem("userImage")
                                    : userAvatar
                            }
                            // src={
                            //     userState.profilePix ? userState.profilePix : userAvatar
                            // }
                            alt='avatar'
                            className='w-full h-full transition-all duration-200 bg-white border-2 border-white border-none rounded-full cursor-pointer hover:scale-125'
                            onClick={signInOptions}
                        />
                    )}

                    {/* sign-in options */}
                    {navbarState.showSignInOptions && (
                        <div
                            className={`min-w-[7.5rem] text-white text-center
             bg-light-blue rounded absolute z-10 top-8 -left-24 transition-all duration-300 text-lg
             md:-left-24 md:top-8 xl:left-12 xl:-top-4 `}>
                            {/* if user is not signed in, show sign in options */}
                            {!userState && (
                                <>
                                    <Link to='/signup'>
                                        <span
                                            className={`my-3 duration-200 hover:scale-105 block `}>
                                            Sign-Up
                                        </span>
                                    </Link>

                                    <Link to='/login'>
                                        <span
                                            className={`my-3 duration-200 hover:scale-105 block`}>
                                            Log-In
                                        </span>
                                    </Link>
                                </>
                            )}

                            {/* if user is signed in, show log out button and user profile button */}

                            {userState && (
                                <Link to='/userdashboard'>
                                    <button
                                        className={`my-2 duration-200 hover:scale-105`}>
                                        User Profile
                                    </button>
                                </Link>
                            )}

                            {userState && (
                                <button
                                    className={`my-3 duration-200 hover:scale-105 `}
                                    onClick={logOutHandler}>
                                    Log Out
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </TippyWrapper>
    );
};

export default UserProfile;
