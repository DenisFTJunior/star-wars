import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";

import { textProps } from "../types/text";

type LocalProps = textProps & {
  disabled?: boolean;
  hoverColor?: string;
  hoverOpacity?: string;
};

const generateStyle = ({
  underline,
  color,
  disabled,
  hoverColor,
  hoverOpacity,
}: LocalProps) => css`
  display: inline;
  text-decoration: ${underline ? "underline" : "none"};
  color: ${color} !important;
  cursor: pointer;
  &:hover {
    ${hoverOpacity ? `opacity: ${hoverOpacity};` : ""}
    ${hoverColor ? `color : ${hoverColor};` : ""}
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
}) => {
  const style = generateStyle(props);

  return (
    <Link href={href}>
      <div className={style}>{children}</div>
    </Link>
  );
};

export default _Link;
