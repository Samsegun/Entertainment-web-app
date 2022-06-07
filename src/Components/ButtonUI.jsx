const ButtonUI = ({ isDisabled, children }) => {
    return (
        <button
            disabled={isDisabled}
            className={`w-full py-4 mt-10 font-light text-white transition-all ease-linear delay-100 rounded-md 
               ${
                   isDisabled
                       ? "bg-red-faded hover:cursor-not-allowed opacity-75"
                       : "bg-red-shade hover:bg-white hover:text-very-dark-blue opacity-100"
               }`}>
            {children}
        </button>
    );
};

export default ButtonUI;
