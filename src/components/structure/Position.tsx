import { css } from "@emotion/css";

import { getBoxShadow } from "../helpers/getBoxShadow";
import { positionProps } from "../types/position";

type LocalProps = positionProps & {
  children: JSX.Element[] | JSX.Element;
};

const generateStyle = ({
  position,
  top,
  bottom,
  rigth,
  left,
  zIndex,
}: LocalProps) =>
  css(`
  position:${position || ""};
  top:${top || "0"};
  bottom:${bottom || "0"};
  rigth:${rigth || "0"};
  left:${left || "0"};
  z-index: ${zIndex || 1}
`);

const Position = (props: LocalProps) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Position;
