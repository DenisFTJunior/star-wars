import { css } from "@emotion/css";

import { getBoxShadow } from "../helpers/getBoxShadow";
import { DP } from "../types/dp";
import { sizeProps } from "../types/size";
import { spacingProps } from "../types/spacing";

type LocalProps = sizeProps &
  spacingProps & {
    dp: DP;
  };

const generateStyle = ({
  dp = DP.SOFT,
  width,
  heigth,
  margin,
  padding,
}: LocalProps) => {
  const boxShadow = getBoxShadow(dp);

  return css(`
  width:${width || "100%"};
  heigth:${heigth || "100%"};
  box-shadow: ${boxShadow};
  margin: ${margin};
  padding: ${padding};
  background-color: #fff;
`);
};

const Panel = ({
  props,
}: {
  props: LocalProps & { children: JSX.Element[] | JSX.Element };
}) => {
  const style = generateStyle(props);
  return <div className={style}>{props.children}</div>;
};

export default Panel;
