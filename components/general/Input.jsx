"use client";

const Input = ({
    label = "",
    name = "",
    placeholder = "",
    type = "text",
    value = "",
    onChange = (e) => {},
    error = null,
}) => {
    return (
        <div className="input w-full relative">
            <label
                htmlFor={name}
                className="text-[#D5D5D5] text-[14px] sm:text-[16px] block mb-2 font-['SF_UI_Display_Light']"
            >
                {label}
            </label>
            <input
                id={name}
                className="w-full text-[14px] text-[#000] p-[8px_14px] sm:p-[10px_18px] placeholder:text-[#CBCBCB] border border-solid border-[#CBCBCB] rounded-[6px] font-['SF_UI_Display_Light']"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && (
                <p className="error absolute right-0 top-[105%] text-[red]  text-[12px]">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;
