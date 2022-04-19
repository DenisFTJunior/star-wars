import { css } from "@emotion/css";
import { path } from "ramda";
import React from "react";

import { sizeProps } from "../types/size";
import TableRow from "./TableRow";
import { option, unformattedOption } from "./types/options";

type LocalProps = sizeProps & {
  //Its any because i want to give liberty for use this table with any type of array
  data: any[];
  options: unformattedOption[];
};

const formatOptionsValue = (
  options: unformattedOption[],
  item: any
): option[] =>
  options.map((option) => ({
    ...option,
    item: item,
    value: path(
      Array.isArray(option.value) ? option.value : [option.value],
      item
    ),
  }));

const generateStyle = ({ width, height }: LocalProps) =>
  css(`
  width:${width};
  height:${height};
  margin: 2rem;
  border:1px solid #757575;
  border-radius:10px;
`);

const Table = (props: LocalProps) => {
  const style = generateStyle(props);
  return (
    <div className={style}>
      <TableRow
        type="header"
        width="100%"
        height="100%"
        options={props.options}
      />
      {props.data.map((item) => (
        <TableRow
          width="100%"
          height="100%"
          borderTop="1px solid #757575"
          options={formatOptionsValue(props.options, item)}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default Table;
