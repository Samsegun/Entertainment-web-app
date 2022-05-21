const GridContainer = ({ children }) => {
    return (
        <ul className='grid grid-cols-custom gap-[15px] mt-6 pb-16'>
            {children}
        </ul>
    );
};

export default GridContainer;
