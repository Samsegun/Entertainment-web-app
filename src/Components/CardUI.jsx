import { useMediaQuery } from "react-responsive";
import bookmarkEmpty from "starter-code/assets/icon-bookmark-empty.svg";
import bookmarkIcon from "starter-code/assets/icon-bookmark-full.svg";
import tvseriesIcon from "starter-code/assets/icon-category-tv.svg";
import movieIcon from "starter-code/assets/icon-category-movie.svg";
import Dot from "./dot";
import { motion } from "framer-motion";

// this card ui is optimized for all format in DATA
const Card = ({
    minWidth,
    bottom,
    height,
    innerHeight,
    padded,
    data,
    dataType,
}) => {
    const { category, rating, title, year, isBookmarked } = data;

    // media queries for setting bg-image
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

    let thumbnail;
    let gradients;

    if (dataType === "trending") {
        thumbnail = isMobile
            ? data.thumbnail.trending.small
            : data.thumbnail.trending.large;
        gradients =
            "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%),";
    }

    if (dataType === "recommended") {
        isMobile && (thumbnail = data.thumbnail.regular.small);
        isTablet && (thumbnail = data.thumbnail.regular.medium);
        isDesktop && (thumbnail = data.thumbnail.regular.large);
        gradients = "";
    }

    if (
        dataType === "movies" ||
        dataType === "series" ||
        dataType === "bookmark"
    ) {
        isMobile && (thumbnail = data.thumbnail.regular.small);
        isTablet && (thumbnail = data.thumbnail.regular.medium);
        isDesktop && (thumbnail = data.thumbnail.regular.large);

        // thumbnail = data.isTrending
        //     ? data.thumbnail.trending
        //     : data.thumbnail.regular;
        gradients = "";
    }

    // for animations
    const cardVariants = {
        hidden: {
            y: -30,
            opacity: 0,
            scale: 1,
        },

        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                type: "spring",
                damping: 5,
            },
        },

        hover: {
            scale: dataType === "trending" ? 1 : 1.1,
            transition: {
                type: "spring",
                damping: 5,
            },
        },
    };

    return (
        <motion.div
            className={`${height} cursor-pointer`}
            variants={cardVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            draggable='false'>
            <article
                style={{
                    backgroundImage: `${gradients} url(${thumbnail})`,
                }}
                className={`rounded-lg relative bg-no-repeat bg-cover bg-center ${minWidth} ${innerHeight}`}>
                <button className='absolute p-2 rounded-full right-2 top-2 bg-bookmark'>
                    {isBookmarked && (
                        <img src={bookmarkIcon} alt='bookmarked' />
                    )}
                    {!isBookmarked && (
                        <img src={bookmarkEmpty} alt='not bookmarked' />
                    )}
                </button>

                {/* movie info */}
                <div className={`absolute ${padded ? padded : ""} ${bottom}`}>
                    {/* heading */}
                    <div
                        className={`flex items-center gap-2 text-xs font-light ${
                            dataType === "trending"
                                ? "md:text-[15px]"
                                : "md:gap-3"
                        }`}>
                        <span className='text-white opacity-75'>{year}</span>
                        <Dot />

                        <span className='flex items-center gap-2 tracking-wider text-white opacity-75'>
                            {category === "Movie" && (
                                <img src={movieIcon} alt='movie icon' />
                            )}
                            {category === "TV Series" && (
                                <img src={tvseriesIcon} alt='tv series icon' />
                            )}
                            {category}
                        </span>
                        <Dot />

                        <span className='tracking-widest text-white opacity-75'>
                            {rating}
                        </span>
                    </div>

                    {/* movie title */}
                    <h2
                        className={`font-medium text-[15px] mt-1 text-white tracking-wider ${
                            dataType === "trending"
                                ? "md:text-2xl"
                                : "md:text-lg"
                        }`}>
                        {title}
                    </h2>
                </div>
            </article>
        </motion.div>
    );
};

export default Card;
