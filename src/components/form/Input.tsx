import { css } from "@emotion/css";
import React, { useState } from "react";

import { borderProps } from "../types/border";
import { sizeProps } from "../types/size";
import { spacingProps } from "../types/spacing";

type LocalProps = sizeProps &
  borderProps &
  spacingProps & {
    onChange: Function;
    type: string;
    placeHolder?: string;
    inputProps?: Object;
  };

const generateStyle = ({ height, width, margin }: LocalProps) =>
  css(`
    width:${width || "100%"};
    height:${height || "3rem"};
    margin:${margin || "0"};
    padding:10px;
`);

const Input = (props: LocalProps) => {
  const [value, localValue] = useState("");
  const style = generateStyle(props);
  const handleChange = (e) => {
    e.preventDefault();
    localValue(e.target.value);
    props.onChange(e.target.value);
  };

  return (
    <input
      className={style}
      type={props.type}
      value={value}
      placeholder={props.placeHolder || ""}
      onChange={handleChange}
      {...props.inputProps}
    />
  );
};

export default Input;
