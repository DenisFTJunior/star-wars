import { css } from "@emotion/css";
import React from "react";

import { getBoxShadow } from "../helpers/getBoxShadow";
import { borderProps } from "../types/border";
import { DP } from "../types/dp";
import { sizeProps } from "../types/size";
import { spacingProps } from "../types/spacing";

type LocalProps = sizeProps &
  spacingProps &
  borderProps & {
    dp: DP;
    bgColor?: string;
    children: JSX.Element[] | JSX.Element;
  };

const generateStyle = ({
  dp = DP.SOFT,
  width = "100%",
  heigth = "100%",
  margin = "0",
  padding = "0",
  borderRadius = "20px",
  bgColor = "#fff",
}: LocalProps) => {
  const boxShadow = getBoxShadow(dp);

  return css(`
  width:${width};
  heigth:${heigth};
  box-shadow: ${boxShadow};
  margin: ${margin};
  padding: ${padding};
  border-radius: ${borderRadius};
  background-color: ${bgColor};
`);
};

const Panel = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Panel;
