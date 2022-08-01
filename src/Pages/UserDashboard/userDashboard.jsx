import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "starter-code/assets/logo.svg";
import { userSliceActions } from "ReduxStore/userSlice";
import { navBarActions } from "ReduxStore/navbar";
import { storage } from "firebase.js";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import userAvatar from "starter-code/user-avatar.svg";
import loadingImage from "starter-code/1488.gif";
import TippyWrapper from "Components/Tippy";
import backArrow from "starter-code/icons8-back-to-16.png";

const UserDashboard = props => {
    // State to store uploaded file
    const [file, setFile] = useState("");

    // upload button
    const [uploadBtn, setUploadBtn] = useState(true);

    // progress
    const [loading, setLoading] = useState(false);

    // redux
    const currentUser = useSelector(state => state.userSlice.user);
    const dispatch = useDispatch();

    useEffect(() => {
        props.setShowNavSearch(false);

        dispatch(navBarActions.setBackDrop(false));
        dispatch(navBarActions.setShowSignInOptions(false));
    }, [props, dispatch]);

    const handleChange = evt => {
        console.log(evt.target.files[0]);
        setFile(evt.target.files[0]);
        setUploadBtn(false);
    };

    // profile image upload handler
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        setLoading(true);

        const storageRef = ref(storage, `/files/${file.name}`);

        uploadBytes(storageRef, file)
            .then(() => {
                getDownloadURL(storageRef)
                    .then(url => {
                        dispatch(userSliceActions.updateUserProfilePix(url));
                        sessionStorage.setItem("userImage", url);
                    })
                    .catch(error => {
                        alert(error.message, "error getting image url");
                        setLoading(false);
                    });
                setFile(null);
                setLoading(false);
                setUploadBtn(true);
            })
            .catch(error => {
                alert(error.message, "error uploading image");
                setLoading(false);
            });
    };

    return (
        <>
            <TippyWrapper value={"Home Page"}>
                <div className='mx-auto mt-8 w-fit'>
                    <Link to='/'>
                        <img src={logo} alt='page logo' className='mx-auto' />
                    </Link>
                </div>
            </TippyWrapper>
            <h2 className='mt-8 text-2xl text-center text-white'>
                User Dashboard
            </h2>
            <div
                className='relative text-white bg-bookmark w-4/5 mx-auto my-20
         rounded-xl h-[80vh] flex justify-center'>
                {/* return to home page icon */}
                <TippyWrapper value={"Return home"}>
                    <Link
                        to={"/"}
                        className='absolute flex-none w-10 h-10 cursor-pointer top-3 left-10'>
                        {" "}
                        <img src={backArrow} alt='' className='w-8' />
                    </Link>
                </TippyWrapper>

                <div className='w-4/5 p-4 my-12 bg-transparent-white rounded-xl'>
                    <table className='w-full h-full'>
                        <tbody className='flex flex-col flex-wrap gap-8'>
                            <tr className='flex flex-wrap items-center justify-between gap-4'>
                                <td>User Name:</td>
                                <td>
                                    {currentUser.userName
                                        ? currentUser.userName
                                        : "new_user"}
                                </td>
                                <td>
                                    <button className='p-4 bg-bookmark rounded-xl'>
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            <tr className='flex flex-wrap items-center justify-between gap-4'>
                                <td>Email:</td>
                                <td>{currentUser.email}</td>
                                <td>
                                    <button className='p-4 bg-bookmark rounded-xl'>
                                        Edit
                                    </button>
                                </td>
                            </tr>

                            <tr className='flex flex-wrap items-center justify-between gap-4'>
                                <td>User Avatar:</td>
                                <td className='w-[35px] h-[35px]'>
                                    {!sessionStorage.getItem("userImage") && (
                                        <img
                                            src={userAvatar}
                                            alt=''
                                            className='w-full h-full'
                                        />
                                    )}
                                    {sessionStorage.getItem("userImage") && (
                                        <img
                                            src={sessionStorage.getItem(
                                                "userImage"
                                            )}
                                            alt=''
                                            className='w-full h-full rounded-full'
                                        />
                                    )}
                                </td>
                                <td>
                                    <label
                                        htmlFor='file'
                                        className='p-2 transition-all duration-300 rounded cursor-pointer bg-dark-blue hover:scale-110 '>
                                        <input
                                            type='file'
                                            id='file'
                                            accept='image/*'
                                            onChange={handleChange}
                                            className='hidden'
                                        />
                                        Change profile picture
                                    </label>

                                    {!loading && <span>{file?.name}</span>}

                                    {loading && (
                                        <img
                                            src={loadingImage}
                                            alt=''
                                            className='inline-block w-[40px]
                                        rounded-full ml-4
                                        '
                                        />
                                    )}
                                    {/* <span>{percent}%</span> */}
                                </td>

                                <td>
                                    <button
                                        disabled={uploadBtn}
                                        className={`p-4 rounded-xl ${
                                            uploadBtn
                                                ? "bg-faded-white text-disabled cursor-not-allowed"
                                                : "bg-bookmark"
                                        }`}
                                        onClick={handleUpload}>
                                        Upload
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
