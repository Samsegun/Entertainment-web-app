const PageTitle = ({ children }) => {
    return (
        <h2 className='text-xl flex items-center gap-2 font-light tracking-wider text-white md:text-[32px] md:mt-8 md:mb-12'>
            {children}
        </h2>
    );
};

export default PageTitle;
