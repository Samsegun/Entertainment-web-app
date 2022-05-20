// import classnames from "classnames";
import bookmarkIcon from "../starter-code/assets/icon-bookmark-empty.svg";
import movieIcon from "../starter-code/assets/icon-category-movie.svg";
import Dot from "./dot";

const Card = ({ minWidth, bottom, height, innerHeight, margin }) => {
  return (
    <div className={`${height}`}>
      <article
        className={`bg-light-blue rounded-lg relative ${minWidth} ${innerHeight}`}>
        <button className='absolute p-2 rounded-full right-2 top-2 bg-bookmark'>
          <img src={bookmarkIcon} alt='bookmark icon' />
        </button>

        {/* movie info */}
        <div className={`absolute ${margin ? margin : ""} ${bottom}`}>
          {/* heading */}
          <div className='flex items-center gap-2 text-xs font-light'>
            <span className='text-white opacity-75'>2019</span>
            <Dot />
            <span className='flex items-center gap-2 text-white opacity-75'>
              <img src={movieIcon} alt='movie icon' />
              Movie
            </span>
            <Dot />
            <span className='text-white opacity-75'>PG</span>
          </div>
          {/* movie title */}
          <h2 className='font-medium text-[15px] mt-1 text-white'>
            Beyond Earth
          </h2>
        </div>
      </article>
    </div>
  );
};

export default Card;
