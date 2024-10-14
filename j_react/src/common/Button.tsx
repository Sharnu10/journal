import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  label?: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  label = "click",
  className = "btn btn-primary",
}) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
