const GridContainer = ({ children }) => {
    return (
        <ul
            className='grid grid-cols-mobile gap-[15px] tall:gap-[70px] 
        mt-6 pb-16 md:grid-cols-tablet md:gap-x-[29px] md:gap-y-[24px] xl:gap-x-10 xl:gap-y-8 xl:grid-cols-desktop'>
            {children}
        </ul>
    );
};

export default GridContainer;
