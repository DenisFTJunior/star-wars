import { css } from "@emotion/css";
import React from "react";
import { Character } from "../../entities/character";

import { sizeProps } from "../types/size";
import TableRow from "./TableRow";
import { option } from "./types/options";

type LocalProps = sizeProps & {
  //Its any because i want to give liberty for use this table with any type of array
  data: any[];
  options: option[];
};

const formatOptionsValue = (options: option[], item: any) =>
  options.map((option) => ({ ...option, value: item[option.value] }));

const generateStyle = ({ width, height }: LocalProps) =>
  css(`
  width:${width};
  height:${height};
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
          options={formatOptionsValue(props.options, item)}
        />
      ))}
    </div>
  );
};

export default Table;
