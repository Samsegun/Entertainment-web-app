const ButtonUI = ({ children }) => {
    return (
        <button className='w-full py-4 mt-10 font-light text-white transition-all ease-linear delay-100 rounded-md bg-red-shade hover:bg-white hover:text-very-dark-blue'>
            {children}
        </button>
    );
};

export default ButtonUI;
