import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { flexProps } from "../types/flex";
import { sizeProps } from "../types/size";

type LocalProps = sizeProps &
  flexProps &
  borderProps & {
    children: JSX.Element | string;
  };

const generateStyle = ({
  width,
  height,
  flex,
  justify,
  border,
  borderRadius,
}: LocalProps) =>
  css(`
  display:flex;
  width:${width};
  height:${height};
  padding:10px;
  margin:5px;
  ${flex ? `flex:${flex} ` : ""}
  justify-content: ${justify || "center"};
  align-items: center;
  ${border ? `border:${border};` : ""}
  ${borderRadius ? `border-radius:${borderRadius};` : ""}
`);

const TableCell = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default TableCell;
