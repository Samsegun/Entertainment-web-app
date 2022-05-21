import logo from "starter-code/assets/logo.svg";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

const MainNav = () => {
  return (
    <nav className='bg-dark-blue py-[18px] px-4'>
      <div className='flex items-center justify-between max-w-[1920px] m-auto'>
        {/* main logo */}
        <img src={logo} alt='logo' />

        {/* navigation */}
        <NavLinks />

        {/* user profile */}
        <UserProfile />
      </div>
    </nav>
  );
};

export default MainNav;
