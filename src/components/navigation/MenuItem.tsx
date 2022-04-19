import React from "react";

import Link from "../actions/Link";
import Text from "../presentation/Text";

const MenuItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href} bgColor="#F1F1F1" hoverColor="#fff" width="6rem" padding="10px">
      <Text element="span" color="#000">
        {label}
      </Text>
    </Link>
  );
};

export default MenuItem;
