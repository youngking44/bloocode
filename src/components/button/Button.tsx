import React from "react";

interface ButtonProps {
  variant: string;
  rounded?: boolean;
  square?: boolean;
  animate?: boolean;
  flex?: boolean;
  children: React.ReactNode;
}

const Button = ({
  variant,
  rounded,
  square,
  animate,
  flex,
  children,
}: ButtonProps) => {
  return (
    <button
      className={`px-5 py-2 cursor-pointer transition-all duration-300 
        ${
          variant === "primary" ? " bg-primary-500 hover:bg-primary-500/85" : ""
        } 
        ${rounded ? "rounded-full" : ""}
        ${square ? "rounded-none" : "rounded-lg"}
        ${animate ? "animate-pulse" : ""}
        ${flex ? "flex items-center gap-2" : ""}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
