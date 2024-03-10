import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  outline: {
    gray_300: "border-2 border-gray-300 border-solid text-black-900_01",
    gray_400_02: "border border-gray-400_02 border-solid text-gray-500_03",
    gray_500: "border border-gray-500 border-solid text-gray-500_03",
    gray_900_19: "border-b border-gray-900_19 border-solid text-gray-900",
    purple_700: "border border-purple-700 border-solid text-purple-700",
    green_600_01: "border border-green-600_01 border-solid text-green-600",
  },
  fill: {
    gray_200: "bg-gray-200 text-gray-900_7f",
    white_A700: "bg-white-A700 text-blue_gray-700",
    gray_100_03: "bg-gray-100_03 text-blue_gray-700",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
  },
};
const shapes = { square: "rounded-none", round: "rounded-[9px]" };
const sizes = {
  xs: "p-px",
  sm: "pb-[5px] pt-0.5 px-0.5",
  md: "pb-2 pt-1.5 px-1.5",
  lg: "pb-1.5 pt-[11px] px-1.5",
  xl: "pb-[11px] pt-3 px-[11px]",
  "2xl": "pb-[13px] pt-4 px-[13px]",
  "3xl": "pb-[18px] pt-6 px-[18px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "",
      value = "",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      isValid,
      errMessage,
      validationCondition,
      ...restProps
    },
    ref,
  ) => {
    // const handleChange = (e) => {
    //   if (onChange) onChange(e?.target?.value);
    // };
   console.log(isValid,errMessage)
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
            autoComplete="off"
            onBlur={validationCondition}
            {...restProps}
          />
          {!isValid && <p className={`text-red-500 text-sm ${restProps.errClass}`}>{errMessage}</p>}
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_300",
    "gray_400_02",
    "gray_500",
    "gray_900_19",
    "purple_700",
    "green_600_01",
    "gray_200",
    "white_A700",
    "gray_100_03",
    "blue_gray_100",
  ]),
};

export { Input };
