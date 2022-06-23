import { useEffect } from "react";

const UserDashboard = props => {
    useEffect(() => {
        props.setShowNavSearch(false);
    }, [props]);

    return (
        <div className='text-white bg-bookmark w-4/5 mx-auto my-20 rounded-xl h-[60vh]'>
            <div>user dashboard</div>
        </div>
    );
};

export default UserDashboard;
