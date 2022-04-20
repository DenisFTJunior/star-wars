import { css } from "@emotion/css";
import React from "react";

import { borderProps } from "../types/border";
import { option, unformattedOption } from "./types/options";
import { flexProps } from "../types/flex";
import { sizeProps } from "../types/size";
import TableCell from "./TableCell";
import Text from "../presentation/Text";
import Button from "../actions/Button";
import { useTableActions } from "./TableState";

type LocalProps = sizeProps &
  flexProps &
  borderProps & {
    options: option[] | unformattedOption[];
    type?: string;
    bgColor?: string;
    sort?: {
      set: Function;
      get: string;
    };
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
  const { setSort } = useTableActions();

  const handleSort = (field) => {
    setSort(field);
  };

  return (
    <div className={style}>
      {props.options.map((option) => (
        <TableCell
          key={`${option.value + Math.random()}`}
          width="100%"
          height="100%"
          flex={option.flex}
        >
          <>
            {!!option.render &&
              props.type !== "header" &&
              option.render(option)}
            {!option.render && props.type !== "header" && (
              <Text element="span" color={"#454545"}>
                {option.value}
              </Text>
            )}
            {props.type === "header" && (
              <Button onClick={() => handleSort(option.value)}>
                <Text element="span" bold color={"#000"}>
                  {option.label}
                </Text>
              </Button>
            )}
          </>
        </TableCell>
      ))}
    </div>
  );
};

export default TableRow;
