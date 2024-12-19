import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

const Button = ({ className, children, ...rest }: IProps) => {
  return (
    <button className={`${className} w-full rounded-md text-white uppercase`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
