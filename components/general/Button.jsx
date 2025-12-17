const Button = ({ title = "", type = "reset" }) => {
    return (
        <button
            type={type}
            className="bg-[#070707] text-white w-full rounded-[10px] p-[10px_20px]"
        >
            {title}
        </button>
    );
};

export default Button;
