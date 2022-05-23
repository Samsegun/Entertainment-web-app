import searchIcon from "starter-code/assets/icon-search.svg";

const SearchBar = () => {
    return (
        <form className='flex items-center pl-4 mt-6 w-full xl:w-full xl:max-w-[1920px] xl:m-auto'>
            <button className=''>
                <img src={searchIcon} alt='search icon' />
            </button>
            <input
                type='text'
                placeholder='Search for movies or TV series'
                className='text-base font-light text-white w-4/5 pl-4 
            bg-[transparent] outline-none md:text-2xl md:pl-6'
            />
            {/* <button className=''>
                <img src={searchIcon} alt='search icon' />
            </button>
            <input
                type='text'
                placeholder='Search for movies or TV series'
                className='w-full p-2 text-base font-light text-white 
            bg-[transparent] outline-none pl-10 mix-blend-normal md:text-2xl'
            /> */}
        </form>
    );
};

export default SearchBar;
