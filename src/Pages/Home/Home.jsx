import { useEffect } from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";

const Home = props => {
    useEffect(() => {
        props.setShowNavSearch(true);
    }, [props]);

    return (
        <main className='max-w-[1920px] m-auto xl:pl-[150px] xl:mt-16'>
            <Trending />
            <Recommended />
        </main>
    );
};

export default Home;
