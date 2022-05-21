import MainNav from "Components/MainNav";
import SearchBar from "Components/SearchBar";
import BookMarked from "Pages/BookMarked/BookMarked";
import Home from "Pages/Home/Home";
import Movies from "Pages/Movies/Movies";
import TvSeries from "Pages/TvSeries/TvSeries";

function App() {
    return (
        <div className='min-h-screen font-outfit bg-very-dark-blue scroll-smooth'>
            {/* page navigation */}
            <MainNav />

            {/* search form */}
            <SearchBar />

            {/* home page */}
            {/* <Home /> */}

            {/* movies page */}
            {/* <Movies /> */}

            {/* tv series page */}
            {/* <TvSeries /> */}

            {/* bookmark page */}
            <BookMarked />
        </div>
    );
}

export default App;
