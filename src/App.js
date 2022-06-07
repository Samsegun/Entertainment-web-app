import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainNav from "Components/MainNav";
import SearchBar from "Components/SearchBar";
import BookMarked from "Pages/BookMarked/BookMarked";
import Home from "Pages/Home/Home";
import Movies from "Pages/Movies/Movies";
import TvSeries from "Pages/TvSeries/TvSeries";
import Signup from "Pages/SignUp/Signup";
import Login from "Pages/Login/Login";

function App() {
    const [showNavandSearch, setShowNavandSearch] = useState(true);

    return (
        <div
            className='relative min-h-screen font-outfit bg-very-dark-blue 
        scroll-smooth xl:pt-16 max-w-[1920px] mx-auto'>
            <Router>
                {/* page navigation */}
                {showNavandSearch && <MainNav />}

                {/* search form */}
                {showNavandSearch && <SearchBar />}

                <Routes>
                    {/* home page */}
                    <Route
                        path='/'
                        element={
                            <Home setShowNavSearch={setShowNavandSearch} />
                        }
                    />

                    {/* movies page */}
                    <Route path='/movies' element={<Movies />} />

                    {/* tv series page */}
                    <Route path='/tvseries' element={<TvSeries />} />

                    {/* bookmark page */}
                    <Route path='/bookmark' element={<BookMarked />} />

                    {/* sign up page */}
                    <Route
                        path='/signup'
                        element={
                            <Signup setShowNavSearch={setShowNavandSearch} />
                        }
                    />

                    {/* login page */}
                    <Route
                        path='/login'
                        element={
                            <Login setShowNavSearch={setShowNavandSearch} />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
