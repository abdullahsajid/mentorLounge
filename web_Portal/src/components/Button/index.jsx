import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[25px]",
  square: "rounded-none",
};
const variants = {
  outline: {
    purple_700: "border border-purple-700 border-solid text-purple-700",
    lime_700: "border border-lime-700 border-solid text-blue_gray-700",
  },
  fill: {
    lime_700: "bg-lime-700 text-black-900_01",
    light_blue_800: "bg-light_blue-800",
    light_green_700_4c: "bg-light_green-700_4c text-light_green-700",
    white_A700: "bg-white-A700",
    purple_700: "bg-purple-700 text-white-A700",
    gray_100_05: "bg-gray-100_05",
    gray_100_03: "bg-gray-100_03 text-gray-900_7f",
    gray_900_19: "bg-gray-900_19 shadow-bs text-gray-900_02",
    gray_200: "bg-gray-200 text-black-900_01",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
  },
};
const sizes = {
  xs: "p-px",
  sm: "p-1.5",
  md: "p-[9px]",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "p-5",
  "3xl": "p-[23px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xl",
  variant = "fill",
  color = "purple_700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "purple_700",
    "lime_700",
    "light_blue_800",
    "light_green_700_4c",
    "white_A700",
    "gray_100_05",
    "gray_100_03",
    "gray_900_19",
    "gray_200",
    "blue_gray_100",
  ]),
};

export { Button };
