import { Link } from "react-router-dom";
import logo from "starter-code/assets/logo.svg";
import ButtonUI from "./ButtonUI";

const FormContainer = ({
    heading,
    account,
    accountAction,
    action,
    destination,
    children,
}) => {
    return (
        <div
            className='w-11/12 mx-auto mt-12 md:mt-20 md:w-[55%]
         xl:w-[40%] xl:mt-10 xl:min-h-screen xl:mb-8'>
            {/* logo */}
            <div>
                <Link to='/'>
                    <img src={logo} alt='page logo' className='mx-auto' />
                </Link>
            </div>

            <div className='p-6 mt-14 bg-dark-blue rounded-xl md:mt-[72px]'>
                {/* heading */}
                <h2 className='text-[32px] font-light tracking-wider text-white'>
                    {heading}
                </h2>

                {/* form */}
                <form className='mt-4 mb-6'>
                    {children}
                    <ButtonUI>{action}</ButtonUI>
                </form>

                <p className='font-light text-center text-white'>
                    {account}{" "}
                    <Link to={destination}>
                        <span className='text-red-shade'>{accountAction}</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default FormContainer;
