import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  styles: string;
  handleClick: (id?: number) => void;
  id?: number;
};

function Button({ children, styles, handleClick,id }: ButtonProps) {
  return (
    <button
      onClick={() => handleClick(id)}
      className={`cursor-pointer rounded-[10px] ${styles} `}
    >
      {children}
    </button>
  );
}

export default Button;

// children,bgColor,color,borradius
