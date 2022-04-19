import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { sizeProps } from "../types/size";
import { textProps } from "../types/text";

type LocalProps = textProps &
  borderProps &
  sizeProps & {
    disabled?: boolean;
    hoverColor?: string;
    hoverOpacity?: string;
  };

const generateStyle = ({
  border,
  borderRadius,
  color,
  disabled,
  hoverColor,
  hoverOpacity,
  width,
}: LocalProps) => css`
  display: inline;
  ${width ? `width: ${width};` : ""}
  box-shadow: none;
  padding: 5px;
  border: ${border || "none"};
  ${borderRadius ? `border-radius:${borderRadius};` : ""}
  color: ${color} !important;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    ${hoverOpacity ? `opacity: ${hoverOpacity};` : ""}
    ${hoverColor ? `color : ${hoverColor};` : ""}
  }
  ${disabled ? "cursor: not-allowed;" : ""}
  ${disabled ? "opacity: .3;" : ""}
`;

const Button = ({
  children,
  onClick,
  ...props
}: {
  children: JSX.Element | JSX.Element[];
  onClick: Function;
} & LocalProps) => {
  const style = generateStyle(props);

  const handleClick = (e) => {
    e.preventDefault();
    if (!props.disabled) onClick(e.target.value);
  };

  return (
    <button onClick={handleClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
