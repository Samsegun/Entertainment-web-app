const GridContainer = ({ children }) => {
    return (
        <ul className='grid grid-cols-mobile gap-[15px] mt-6 pb-16 md:grid-cols-tablet md:gap-[29px]'>
            {children}
        </ul>
    );
};

export default GridContainer;
