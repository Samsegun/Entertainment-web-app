const InputUI = props => {
    return (
        <div className='relative'>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className={`pl-4 pb-[18px] pt-6 w-full bg-transparent text-white
            text-[15px] font-light outline-none transition-all ease-linear delay-100 border-b-2 ${
                props.inputError ? "border-b-red-shade" : "border-b-light-blue"
            }`}
                ref={props.refer}
                onChange={props.onChange}
            />

            {/* input error message */}
            {props.inputError && (
                <span className='absolute right-0 top-[40%] text-red-shade font-light text-[13px]'>
                    {props.errorMessage}
                </span>
            )}
        </div>
    );
};

export default InputUI;
