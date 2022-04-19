import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { option, unformattedOption } from "./types/options";
import { flexProps } from "../types/flex";
import { sizeProps } from "../types/size";
import TableCell from "./TableCell";
import Text from "../presentation/Text";

type LocalProps = sizeProps &
  flexProps &
  borderProps & {
    options: option[] | unformattedOption[];
    type?: string;
    bgColor?: string;
  };

const generateStyle = ({
  width,
  height,
  justify,
  border,
  borderRadius,
  borderTop,
  bgColor,
}: LocalProps) =>
  css(`
  display:flex;
  direction: row;
  width:${width};
  height:${height};
  justify-content: ${justify || "center"};
  ${borderRadius ? `border-radius:${borderRadius};` : ""}
  ${border ? `border:${border};` : ""}
  ${borderTop ? `border-top:${borderTop};` : ""}
  ${bgColor ? `background-color:${bgColor};` : ""}
  align-items: center;
`);

const TableRow = (props: LocalProps) => {
  const style = generateStyle(props);
  return (
    <div className={style}>
      {props.options.map((option) => (
        <TableCell width="100%" height="100%" flex={option.flex}>
          <Text
            element="span"
            bold={props.type === "header" ? true : false}
            color={props.type === "header" ? "#000" : "#454545"}
          >
            {props.type === "header" ? option.label : option.value}
          </Text>
        </TableCell>
      ))}
    </div>
  );
};

export default TableRow;
