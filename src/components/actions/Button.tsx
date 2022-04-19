import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { textProps } from "../types/text";

type LocalProps = textProps &
  borderProps & {
    disabled?: boolean;
    hoverColor?: string;
    hoverOpacity?: string;
  };

const generateStyle = ({
  border,
  color,
  disabled,
  hoverColor,
  hoverOpacity,
}: LocalProps) => css`
  display: inline;
  box-shadow: none;
  border: ${border || "none"};
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
    onClick(e.target.value);
  };

  return (
    <button onClick={handleClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
