import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";
import { sizeProps } from "../types/size";

import { textProps } from "../types/text";

type LocalProps = textProps &
  sizeProps & {
    disabled?: boolean;
    hoverColor?: string;
    hoverOpacity?: string;
    bgColor?: string;
  };

const generateStyle = ({
  underline,
  color,
  disabled,
  hoverColor,
  hoverOpacity,
  width,
  bgColor,
}: LocalProps) => css`
  width: ${width || " 100%"};
  display: inline;
  padding: 5px;
  text-decoration: ${underline ? "underline" : "none"};
  color: ${color} !important;
  cursor: pointer;
  ${bgColor ? `background-color : ${bgColor};` : ""}
  &:hover {
    ${hoverOpacity ? `opacity: ${hoverOpacity};` : ""}
    ${hoverColor ? `background-color : ${hoverColor};` : ""}
  }
  ${disabled ? "cursor: not-allowed;" : ""}
  ${disabled ? "opacity: .3;" : ""}
`;

const _Link = ({
  href,
  children,
  ...props
}: {
  children: JSX.Element | JSX.Element[];
  href: string;
} & LocalProps) => {
  const style = generateStyle(props);

  return (
    <Link href={href}>
      <div className={style}>{children}</div>
    </Link>
  );
};

export default _Link;
