import { css } from "@emotion/css";
import React from "react";
import { spacingProps } from "../types/spacing";
import { textProps } from "../types/text";

const textSize: any = {
  xsm: "0.75rem",
  sm: "1rem",
  smmd: "1.5rem",
  md: "2rem",
  mdlg: "1.5rem",
  lg: "3rem",
  lgxlg: "1.5rem",
  xlg: "5rem",
};

type LocalProps = spacingProps &
  textProps & {
    element?: string;
    children: JSX.Element[] | JSX.Element | string;
    textAlign?: string;
  };

const generateStyle = ({
  color,
  size,
  underline,
  margin,
  bold,
  italic,
  textAlign,
}: LocalProps) =>
  css(`
    ${bold ? "font-weight: bold;" : ""}
    ${italic ? "font-style: italic;" : ""}
    color: ${color ? color : "#222222"};
    font-size:${
      size ? (textSize[size] ? textSize[size] : size) : textSize["sm"]
    };
    text-decoration: ${underline ? "underline" : "none"};
    margin: ${margin || 0};
    text-align:${textAlign || "center"};
`);

const Text = (props: LocalProps) => {
  const style = generateStyle(props);
  switch (props.element) {
    case "h1":
      return <h1 className={style}>{props.children}</h1>;
    case "h2":
      return <h2 className={style}>{props.children}</h2>;
    case "h3":
      return <h3 className={style}>{props.children}</h3>;
    case "h4":
      return <h4 className={style}>{props.children}</h4>;
    case "h5":
      return <h5 className={style}>{props.children}</h5>;
    case "h6":
      return <h6 className={style}>{props.children}</h6>;
    case "p":
      return <p className={style}>{props.children}</p>;
    case "span":
      return <span className={style}>{props.children}</span>;
    default:
      return <span className={style}>{props.children}</span>;
  }
};

export default Text;
