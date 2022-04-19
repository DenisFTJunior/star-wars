import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { option } from "./types/options";
import { flexProps } from "../types/flex";
import { sizeProps } from "../types/size";
import TableCell from "./TableCell";
import Text from "../presentation/Text";

type LocalProps = sizeProps &
  flexProps &
  borderProps & {
    options: option[];
    type?: string;
  };

const generateStyle = ({
  width,
  height,
  justify,
  border,
  borderRadius,
}: LocalProps) =>
  css(`
  display:flex;
  direction: row;
  width:${width};
  height:${height};
  justify-content: ${justify || "center"};
  ${borderRadius ? `border-radius:${borderRadius}` : ""}
  ${border ? `border:${border}` : ""}
  align-items: center;
`);

const TableRow = (props: LocalProps) => {
  const style = generateStyle(props);
  return (
    <div className={style}>
      {props.options.map((option) => (
        <TableCell
          width="100%"
          height="100%"
          flex={option.flex}
          border="1px solid #757575"
        >
          <Text element="span" bold={props.type === "header" ? true : false}>
            {props.type === "header" ? option.label : option.value}
          </Text>
        </TableCell>
      ))}
    </div>
  );
};

export default TableRow;
