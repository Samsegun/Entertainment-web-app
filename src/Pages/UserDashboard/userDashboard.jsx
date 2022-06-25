import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "starter-code/assets/logo.svg";
import { userSliceActions } from "ReduxStore/userSlice";
import { storage, auth, updateProfile } from "firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import userAvatar from "starter-code/user-avatar.svg";

const UserDashboard = props => {
    // State to store uploaded file
    const [file, setFile] = useState("");

    // upload button
    const [uploadBtn, setUploadBtn] = useState(true);

    // progress
    const [percent, setPercent] = useState(0);

    // redux
    const currentUser = useSelector(state => state.userSlice.user);
    const dispatch = useDispatch();

    console.log(currentUser);

    useEffect(() => {
        props.setShowNavSearch(false);
    }, [props]);

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

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            err => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    console.log(url);
                    dispatch(userSliceActions.updateUserProfilePix(url));
                });
            }
        );
    };

    return (
        <>
            <div className='mx-auto mt-8 w-fit'>
                <Link to='/'>
                    <img src={logo} alt='page logo' className='mx-auto' />
                </Link>
            </div>
            <h2 className='mt-8 text-2xl text-center text-white'>
                User Dashboard
            </h2>
            <div
                className='text-white bg-bookmark w-4/5 mx-auto my-20
         rounded-xl h-[80vh] flex justify-center'>
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
                                    {!currentUser.profilePix && (
                                        <img
                                            src={userAvatar}
                                            alt=''
                                            className='w-full h-full'
                                        />
                                    )}
                                    {currentUser.profilePix && (
                                        <img
                                            src={currentUser.profilePix}
                                            alt=''
                                            className='w-full h-full rounded-full'
                                        />
                                    )}
                                </td>
                                <td>
                                    <label className='p-2 transition-all duration-300 rounded cursor-pointer bg-dark-blue hover:scale-110 '>
                                        <input
                                            type='file'
                                            accept='image/*'
                                            onChange={handleChange}
                                            className='hidden'
                                        />
                                        Change profile picture
                                    </label>

                                    <span>{percent}%</span>
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
