import bookmarkEmpty from "starter-code/assets/icon-bookmark-empty.svg";
import bookmarkIcon from "starter-code/assets/icon-bookmark-full.svg";
import tvseriesIcon from "starter-code/assets/icon-category-tv.svg";
import movieIcon from "starter-code/assets/icon-category-movie.svg";
import Dot from "./dot";

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

    let thumbnail;
    let gradients;

    if (dataType === "trending") {
        thumbnail = data.thumbnail.trending;
        gradients =
            "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%),";
    }

    if (dataType === "recommended") {
        thumbnail = data.thumbnail.regular;
        gradients = "";
    }

    if (
        dataType === "movies" ||
        dataType === "series" ||
        dataType === "bookmark"
    ) {
        thumbnail = data.isTrending
            ? data.thumbnail.trending
            : data.thumbnail.regular;
        gradients = "";
    }

    return (
        <div className={`${height}`}>
            <article
                style={{
                    backgroundImage: `${gradients} url(${thumbnail.small})`,
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
                <div className={`absolute  ${padded ? padded : ""} ${bottom}`}>
                    {/* heading */}
                    <div className='flex items-center gap-2 text-xs font-light'>
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
                    <h2 className='font-medium text-[15px] mt-1 text-white tracking-wider'>
                        {title}
                    </h2>
                </div>
            </article>
        </div>
    );
};

export default Card;
