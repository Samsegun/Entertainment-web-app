const InputUI = props => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className='pl-4 pb-[18px] pt-6 w-full bg-transparent text-white
            text-[15px] font-light outline-none border-b-2 border-b-light-blue'
        />
    );
};

export default InputUI;
