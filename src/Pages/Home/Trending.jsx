import Card from "Components/CardUI";
import PageTitle from "Components/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import backArrow from "starter-code/icons8-back-to-16.png";
import { storeDataActions } from "ReduxStore/storeData";
// import Carousel from "framer-motion-carousel";

const Trending = () => {
    // const [width, setWidth] = useState(0);

    // const carousel = useRef();

    // useEffect(() => {
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // }, []);

    // filter out non-trending data
    /* from redux store, select storeData slice and filter out
    data whose isTrending is false */
    const trendingData = useSelector(state => {
        // state.storeData.items.filter(item => item.isTrending)

        if (
            state.storeData.searchData?.length ||
            state.storeData.searchData?.length === 0
        ) {
            return state.storeData.searchData.filter(item => item.isTrending);
        } else {
            return state.storeData.items.filter(item => item.isTrending);
        }
    });

    const userInput = useSelector(state => state.storeData.userInput);
    const searchData = useSelector(state => state.storeData.searchData);
    const dispatch = useDispatch();

    return (
        <section className='pl-4 mt-6 text-white'>
            {/* <PageTitle>Trending</PageTitle> */}

            {searchData === null && <PageTitle>Trending</PageTitle>}

            {(searchData?.length === 0 || searchData?.length > 0) && (
                <PageTitle>
                    <img
                        src={backArrow}
                        alt='return'
                        className='w-10 cursor-pointer'
                        onClick={() => dispatch(storeDataActions.resetData())}
                    />
                    <span>
                        {" "}
                        Found {trendingData.length} result for '{userInput}' in
                        Trending
                    </span>
                </PageTitle>
            )}

            {/* trending cards */}
            <motion.div className='mt-4 overflow-x-scroll scrollbar-none'>
                <motion.div
                    className='flex gap-4 min-w-[1280px] md:min-w-[2510px] md:gap-10'
                    style={{ scrollSnapType: "x mandatory" }}>
                    {trendingData.map((data, idx) => (
                        <Card
                            minWidth={"min-w-[250px] md:min-w-[470px]"}
                            bottom={"bottom-4"}
                            height={"min-h-[140px] md:min-h-[230px]"}
                            innerHeight={"min-h-[140px] md:min-h-full"}
                            padded={"pl-4"}
                            data={data}
                            dataType={"trending"}
                            key={idx}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Trending;
