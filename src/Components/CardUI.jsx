import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { storeDataActions } from "ReduxStore/storeData";
import bookmarkEmpty from "starter-code/assets/icon-bookmark-empty.svg";
import bookmarkIcon from "starter-code/assets/icon-bookmark-full.svg";
import tvseriesIcon from "starter-code/assets/icon-category-tv.svg";
import movieIcon from "starter-code/assets/icon-category-movie.svg";
import Dot from "./dot";
import { motion } from "framer-motion";
import Rodal from "rodal";
import "rodal/lib/rodal.css";

// this card ui is optimized for all kinds of format in DATA
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

    const [visible, setVisible] = useState(false);
    // const [hide, setHide] = useState(false)
    const dispatch = useDispatch();

    // media queries for setting bg-image
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
    const isLargeDesktop = useMediaQuery({ query: "(min-width: 1592px)" });

    // for setting thumbnails and linear gradients on background-images
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

    const bookmarkHandler = () => {
        dispatch(storeDataActions.bookMarked(title));
    };

    const showModal = () => {
        setVisible(true);
    };

    const hideModal = () => {
        setVisible(false);
    };

    return (
        <>
            {/* modal for displaying movie or series info */}
            <Rodal
                visible={visible}
                onClose={hideModal}
                customStyles={{
                    background: "#161D2F",
                    color: "#fff",
                    width: "80%",
                    maxWidth: "920px",
                    height: "fit-content",
                    borderRadius: "1rem",
                }}>
                <h3 className='text-2xl'>{category} Info</h3>
                <hr />
                <div className='mt-6'>
                    <div>
                        <img
                            src={thumbnail}
                            alt=''
                            className='mx-auto rounded-lg'
                        />
                    </div>

                    <div className='pt-4'>
                        <h3 className='pb-4 text-xl'>
                            <span className='text-2xl'>Title:</span> {title}
                        </h3>
                        <p className='text-xl'>
                            <span className='text-2xl'> Synopsis</span>: Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit.
                            Esse dignissimos consequatur praesentium ex vitae
                        </p>
                    </div>
                </div>
            </Rodal>

            <motion.div
                className={`${height} relative cursor-pointer`}
                variants={cardVariants}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                draggable='false'>
                <button
                    type='button'
                    onClick={bookmarkHandler}
                    className='absolute z-10 p-2 transition-all delay-200 rounded-full right-2 top-2 bg-bookmark hover:scale-125'>
                    {isBookmarked && (
                        <img src={bookmarkIcon} alt='bookmarked' />
                    )}
                    {!isBookmarked && (
                        <img src={bookmarkEmpty} alt='not bookmarked' />
                    )}
                </button>

                <article
                    style={{
                        backgroundImage: `${gradients} url(${thumbnail})`,
                        backgroundPosition: `${isLargeDesktop && "top"}`,
                    }}
                    className={`rounded-lg relative tall:h-48 bg-no-repeat bg-cover bg-center ${minWidth} ${innerHeight}`}
                    onClick={showModal}>
                    {/* movie info */}
                    <div
                        className={`absolute ${
                            padded ? padded : ""
                        } ${bottom}`}>
                        {/* heading */}
                        <div
                            className={`flex items-center gap-2 text-xs font-light ${
                                dataType === "trending"
                                    ? "md:text-[15px]"
                                    : "md:gap-3"
                            }`}>
                            <span className='text-white opacity-75'>
                                {year}
                            </span>
                            <Dot />

                            <span className='flex items-center gap-2 tracking-wider text-white opacity-75'>
                                {category === "Movie" && (
                                    <img src={movieIcon} alt='movie icon' />
                                )}
                                {category === "TV Series" && (
                                    <img
                                        src={tvseriesIcon}
                                        alt='tv series icon'
                                    />
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
        </>
    );
};

export default Card;
