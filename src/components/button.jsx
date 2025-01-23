/* eslint-disable react/prop-types */
const Button = ({ text, onClick, className, leftImg, rightImg, imgStyle, ...props }) => {
  return (
    <button
      className={`rounded-md py-2 px-6 flex gap-2 min-w-max items-center ${className}`}
      onClick={onClick}
      {...props}
    >
      {leftImg ? <img src={leftImg} className={imgStyle} /> : null} {text} 
      {rightImg ? <img src={rightImg} className={imgStyle} /> : null}
    </button>
  );
};

export default Button;
