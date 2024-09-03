import React from "react";

export default function Button({
  variant = "secondary",
  children,
  className,
  ...props
}) {
  const variantClasses = {
    primary: "bg-blue-500 text-gray-100",
    secondary: "bg-gray-800 text-gray-100",
    accent: "bg-orange-500 text-white",
    outline: "bg-white text-gray-800 ",
  };
  return (
    <div>
      <button
        className={`transition  duration-200 ease-linear font-medium border-2 border-transparent  px-4 py-1.5 rounded outline-none ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
