import React from "react";

import Link from "../actions/Link";
import Text from "../presentation/Text";
import { sizeProps } from "../types/size";
import { spacingProps } from "../types/spacing";

const MenuItem = ({
  href,
  label,
  withoutBg,
  padding,
  width,
  color,
}: {
  href: string;
  label: string;
  withoutBg?: boolean;
  color?: string;
} & spacingProps &
  sizeProps) => {
  return (
    <Link
      href={href}
      bgColor={withoutBg ? "rgba(0,0,0,0)" : "#F1F1F1"}
      hoverColor={withoutBg ? "rgba(0,0,0,0)" : "#fff"}
      width={width || "6rem"}
      padding={padding || "10px"}
    >
      <Text element="span" textAlign="center" color={color || "#000"}>
        {label}
      </Text>
    </Link>
  );
};

export default MenuItem;
