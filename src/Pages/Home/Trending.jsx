// import { useEffect, useRef, useState } from "react";
import Card from "Components/CardUI";
import PageTitle from "Components/PageTitle";
import appData from "starter-code/adjustedData.json";
import { motion } from "framer-motion";
// import Carousel from "framer-motion-carousel";

const Trending = () => {
    // const [width, setWidth] = useState(0);
    // const carousel = useRef();

    // useEffect(() => {
    //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    // }, []);

    // filter out non-trending data
    const trendingData = appData.filter(item => item.isTrending);

    return (
        <section className='pl-4 mt-6 text-white'>
            <PageTitle>Trending</PageTitle>

            {/* trending cards */}
            <motion.div
                // ref={carousel}
                className='mt-4 overflow-x-scroll scrollbar'>
                <motion.div
                    // drag='x'
                    // dragConstraints={{ right: 0, left: -width }}
                    className='flex gap-4 min-w-[1280px] md:min-w-[2510px] md:gap-10'>
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
