import React from "react";

import Text from "../presentation/Text";
import Container from "../structure/Container";
import Flex from "../structure/Flex";

const CardItem = ({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) => {
  return (
    <Container width="40%" bgColor="rgba(0,0,0,0)" padding="1rem">
      <Flex direction="column" align="flex-start" gap={0.3}>
        <Text element="span" size="xsm">
          {label}
        </Text>
        <Text element="span" size="smmd">{`${value}`}</Text>
      </Flex>
    </Container>
  );
};

export default CardItem;
