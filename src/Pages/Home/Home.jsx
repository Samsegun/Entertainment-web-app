import { useEffect } from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";
import { useDispatch } from "react-redux";
import { storeDataActions } from "ReduxStore/storeData";

const Home = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        props.setShowNavSearch(true);
        return () => dispatch(storeDataActions.resetData());
    }, [props, dispatch]);

    return (
        <main className='max-w-[1920px] m-auto xl:pl-[150px] xl:mt-16'>
            <Trending />
            <Recommended />
        </main>
    );
};

export default Home;
