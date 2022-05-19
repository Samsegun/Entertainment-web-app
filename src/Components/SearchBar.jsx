import searchIcon from "../starter-code/assets/icon-search.svg";

const SearchBar = () => {
    return ( 
        <form className="pl-4 mt-6 w-[257px] relative">
            <button  className="absolute left-4 top-1">
                <img src={searchIcon} alt="search icon"/>
            </button>
            <input type="text" placeholder="Search for movies or TV series" 
            className="w-full p-2 text-base font-light text-white 
            bg-[transparent] outline-none ml-10 opacity-50" />
        </form>
     );
}
 
export default SearchBar;