import { css } from "@emotion/css";
import React from "react";

import { flexProps } from "../types/flex";

type LocalProps = flexProps & {
  children: JSX.Element[] | JSX.Element;
};

const generateStyle = ({
  direction,
  wrap,
  justify,
  align,
  alignContent,
  gap,
  flex,
}: LocalProps) =>
  css(`
    width:100%;
    height:100%;
    display: flex;
    flex: ${flex || "1"};
    flex-direction: ${direction || "row"};
    ${wrap ? "flex-wrap:wrap;" : "flex-wrap: nowrap;"}
    justify-content: ${justify || "center"};
    align-items: ${align || "center"};
    align-content: ${alignContent || "flex-start"};
    gap: ${`${gap}rem` || 0};
`);

const Flex = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Flex;
