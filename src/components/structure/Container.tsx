import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { sizeProps } from "../types/size";
import { spacingProps } from "../types/spacing";

type LocalProps = sizeProps &
  spacingProps &
  borderProps & {
    bgColor?: string;
    flex?: number;
    children: JSX.Element[] | JSX.Element;
    hideOnSmall?: boolean;
    showOnSmall?: boolean;
  };

const generateStyle = ({
  width = "100%",
  minWidth = "",
  maxWidth = "",
  height = "",
  minHeight = "",
  maxHeight = "",
  margin = "0",
  padding = "0",
  bgColor = "#fff",
  border,
  borderRadius,
  flex,
  hideOnSmall,
  showOnSmall,
}: LocalProps) =>
  css(`
  ${showOnSmall ? "display:none;" : ""}
  ${flex ? `flex:${flex};` : ""}
  width:${width};
  ${minWidth ? `min-width:${minWidth};` : ""}
  ${maxWidth ? `max-width:${maxWidth};` : ""}
  height:${height};
  ${minHeight ? `min-height:${minHeight};` : ""}
  ${maxHeight ? `max-height:${maxHeight};` : ""}
  ${border ? `border:${border};` : ""}
  ${borderRadius ? `border-radius:${borderRadius};` : ""}
  margin: ${margin};
  padding: ${padding};
  background-color: ${bgColor};
  @media (max-width: 728px) {
    ${hideOnSmall ? "display:none;" : ""}
    ${showOnSmall ? "display:block;" : ""}
  }
`);

const Container = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Container;
