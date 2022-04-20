import React from "react";

import Text from "../presentation/Text";
import Container from "../structure/Container";
import Flex from "../structure/Flex";

const CardItem = ({
  value,
  label,
  small,
}: {
  value: string | number;
  label: string;
  small?: boolean;
}) => {
  return (
    <Container
      maxWidth="80%"
      width="10rem"
      bgColor="rgba(0,0,0,0)"
      padding="1rem"
    >
      <Flex direction="column" align="flex-start" gap={0.3}>
        <Text element="span" size="xsm">
          {label}
        </Text>
        <Text element="span" size={small ? "sm" : "smmd"}>{`${value}`}</Text>
      </Flex>
    </Container>
  );
};

export default CardItem;
