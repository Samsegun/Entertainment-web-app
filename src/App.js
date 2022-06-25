import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainNav from "Components/MainNav";
import SearchBar from "Components/SearchBar";
import BookMarked from "Pages/BookMarked/BookMarked";
import Home from "Pages/Home/Home";
import Movies from "Pages/Movies/Movies";
import TvSeries from "Pages/TvSeries/TvSeries";
import Signup from "Pages/SignUp/Signup";
import Login from "Pages/Login/Login";
import UserDashboard from "Pages/UserDashboard/userDashboard";
import PrivateRoute from "Components/PrivateRoute";

function App() {
    const [showNavandSearch, setShowNavandSearch] = useState(true);

    // const currentUser = useSelector(state => state.userSlice.user);
    // const dispatch = useDispatch();

    // check at page load if a user is authenticated
    // useEffect(() => {
    // const unSubscribe = auth.onAuthStateChanged(user => {
    //     setCurrentUser(user);
    //   });

    //   return unSubscribe;
    // onAuthStateChanged(auth, (userAuth) => {
    //   if (userAuth) {
    //     // user is logged in, send the user's details to redux, store the current user in the state
    //     dispatch(
    //       userSliceActions.login({
    //         email: userAuth.email,
    //         uid: userAuth.uid,
    //         displayName: userAuth.displayName,
    //         photoUrl: userAuth.photoURL,
    //       })
    //     );
    //   } else {
    //     dispatch(userSliceActions.logout());
    //   }
    // });
    //   }, []);

    return (
        <div
            className='relative min-h-screen font-outfit bg-very-dark-blue 
        scroll-smooth xl:pt-16 max-w-[1920px] mx-auto'>
            {/* page navigation */}
            {showNavandSearch && <MainNav />}

            {/* search form */}
            {showNavandSearch && <SearchBar />}

            <Routes>
                {/* home page */}
                <Route
                    path='/'
                    element={<Home setShowNavSearch={setShowNavandSearch} />}
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
                    element={<Signup setShowNavSearch={setShowNavandSearch} />}
                />

                {/* login page */}
                <Route
                    path='/login'
                    element={<Login setShowNavSearch={setShowNavandSearch} />}
                />

                {/* user profile page */}
                <Route
                    path='/userdashboard'
                    element={
                        <PrivateRoute>
                            <UserDashboard
                                setShowNavSearch={setShowNavandSearch}
                            />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
