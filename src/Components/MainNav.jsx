import logo from "starter-code/assets/logo.svg";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";

const MainNav = () => {
    return (
        <nav
            className='bg-dark-blue py-[18px] px-4 md:mx-4 md:rounded-[10px]
         xl:absolute xl:w-24 xl:m-0 xl:left-8 xl:h-[960px] xl:top-8 xl:py-8'>
            <div
                className='flex items-center justify-between
             max-w-[1920px] m-auto xl:flex-col xl:h-full xl:gap-20'>
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
