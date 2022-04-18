import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { sizeProps } from "../types/size";
import { spacingProps } from "../types/spacing";

type LocalProps = sizeProps &
  spacingProps &
  borderProps & {
    bgColor: string;
    children: JSX.Element[] | JSX.Element;
  };

const generateStyle = ({
  width = "100%",
  minWidth = "",
  maxWidth = "",
  heigth = "100%",
  minHeigth = "",
  maxHeigth = "",
  margin = "0",
  padding = "0",
  bgColor = "#fff",
}: LocalProps) =>
  css(`
  width:${width};
  ${minWidth ? `min-width:${minWidth};` : ""}
  ${maxWidth ? `max-width:${maxWidth};` : ""}
  max-width:${maxWidth};
  heigth:${heigth};
  ${minHeigth ? `min-heigth:${minHeigth};` : ""}
  ${maxHeigth ? `max-heigth:${maxHeigth};` : ""}
  margin: ${margin};
  padding: ${padding};
  background-color: ${bgColor};
`);

const Panel = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Panel;
