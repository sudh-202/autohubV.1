// components/CustomButton.tsx
interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?: () => void;
    btnType?: "button" | "submit" | "reset";
  }
  
  const CustomButton: React.FC<CustomButtonProps> = ({ title, containerStyle, textStyles, rightIcon, handleClick, btnType = "button" }) => {
    return (
      <button type={btnType} className={`flex items-center justify-center ${containerStyle}`} onClick={handleClick}>
        <span className={textStyles}>{title}</span>
        {rightIcon && <img src={rightIcon} alt="right icon" className="ml-2" />}
      </button>
    );
  };
  
  export default CustomButton;
  