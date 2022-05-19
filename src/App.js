import MainNav from "./Components/MainNav";
import SearchBar from "./Components/SearchBar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="font-outfit bg-very-dark-blue">
      {/* page navigation */}
      <MainNav />

      {/* search form */}
      <SearchBar />

      {/* home page */}
      <Home />
    </div>
  );
}

export default App;
