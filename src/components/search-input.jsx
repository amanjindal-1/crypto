/* eslint-disable react/prop-types */
const SearchInput = ({
  type = "text",
  value,
  setValue,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className={`p-3 rounded-md bg-[#2B2E3B] text-white placeholder-white outline-none border-none font-light ${className}`}
    />
  );
};

export default SearchInput;
