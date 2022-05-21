import searchIcon from "starter-code/assets/icon-search.svg";

const SearchBar = () => {
    return (
        <form className='pl-4 mt-6 w-full relative xl:w-full xl:max-w-[1920px] xl:m-auto'>
            <button className='absolute left-4 top-1'>
                <img src={searchIcon} alt='search icon' />
            </button>
            <input
                type='text'
                placeholder='Search for movies or TV series'
                className='w-full p-2 text-base font-light text-white 
            bg-[transparent] outline-none pl-10 mix-blend-normal'
            />
        </form>
    );
};

export default SearchBar;
