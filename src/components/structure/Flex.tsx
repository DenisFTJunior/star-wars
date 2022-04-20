import { css } from "@emotion/css";
import React from "react";

import { flexProps } from "../types/flex";
import { sizeProps } from "../types/size";

type LocalProps = flexProps &
  sizeProps & {
    children: JSX.Element[] | JSX.Element;
    onSmall?: boolean;
  };

const generateStyle = ({
  direction,
  wrap,
  height,
  width,
  justify,
  align,
  alignContent,
  gap,
  flex,
  onSmall,
}: LocalProps) =>
  css(`
    width:${width || "100%"};
    ${height ? `height${height};` : ""}
    display: flex;
    flex: ${flex || "1"};
    flex-direction: ${direction || "row"};
    ${wrap ? "flex-wrap:wrap;" : "flex-wrap: nowrap;"}
    justify-content: ${justify || "center"};
    align-items: ${align || "center"};
    align-content: ${alignContent || "flex-start"};
    gap: ${`${gap}rem` || 0};
    ${
      onSmall
        ? `@media (max-width: 728px) {
      flex-direction: column;
      gap:0;
    }`
        : ""
    }
`);

const Flex = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Flex;
