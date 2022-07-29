import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import searchIcon from "starter-code/assets/icon-search.svg";
import { storeDataActions } from "ReduxStore/storeData";

const SearchBar = () => {
    const [pathName, setPathName] = useState("");
    // const [defaultValue, setDefaultValue] = useState("");
    const inputRef = useRef();

    const location = useLocation();

    const dispatch = useDispatch();

    // select app data from store
    // const data = useSelector(state => state.storeData.items);
    // console.log(data);

    useEffect(() => {
        inputRef.current.value = "";

        switch (location.pathname) {
            case "/":
                setPathName("movies or TV series");
                break;
            case "/movies":
                setPathName("movies");
                break;
            case "/tvseries":
                setPathName("TV series");
                break;
            case "/bookmark":
                setPathName("bookmarked shows");
                break;
            default:
                break;
        }
    }, [location.pathname, dispatch]);

    const submitHandler = e => {
        e.preventDefault();

        // get text value from input element in form
        const searchValue = e.target[1].value;

        dispatch(
            storeDataActions.setSearchInput({
                searchValue: searchValue.toLowerCase().trim(),
                pathName,
            })
        );
    };

    return (
        <form
            onSubmit={submitHandler}
            className='flex items-center pl-4 mt-6 w-full xl:w-full 
        xl:max-w-[1920px] xl:m-auto xl:pl-[164px] '>
            <button className=''>
                <img src={searchIcon} alt='search icon' />
            </button>
            <input
                type='text'
                placeholder={`Search for ${pathName}`}
                ref={inputRef}
                className='text-base font-light text-white cursor-pointer w-4/5 pl-4 
            bg-[transparent] rounded-lg transition-all duration-300 hover:bg-light-blue outline-none md:text-2xl md:pl-6'
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
