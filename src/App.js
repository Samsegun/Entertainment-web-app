import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "Components/MainNav";
import SearchBar from "Components/SearchBar";
import BookMarked from "Pages/BookMarked/BookMarked";
import Home from "Pages/Home/Home";
import Movies from "Pages/Movies/Movies";
import TvSeries from "Pages/TvSeries/TvSeries";

function App() {
    return (
        <div className='min-h-screen font-outfit bg-very-dark-blue scroll-smooth md:pt-6 '>
            <Router>
                {/* page navigation */}
                <MainNav />

                {/* search form */}
                <SearchBar />

                <Routes>
                    {/* home page */}
                    <Route path='/' element={<Home />} />

                    {/* movies page */}
                    <Route path='/movies' element={<Movies />} />

                    {/* tv series page */}
                    <Route path='/tvseries' element={<TvSeries />} />

                    {/* bookmark page */}
                    <Route path='/bookmark' element={<BookMarked />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
