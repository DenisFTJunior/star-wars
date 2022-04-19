import React from "react";
import { BsArrowRepeat } from "react-icons/bs";

import Text from "./Text";
import useQuote from "./helpers/useQuote";
import Flex from "../structure/Flex";
import Button from "../actions/Button";
import Container from "../structure/Container";

const Quotes = () => {
  const { quote, fetch } = useQuote();

  return (
    <Container width="100%" height="100%" bgColor="rgba(0,0,0,0)">
      <Flex direction="row" gap={2} align="center" justify="flex-start">
        <Text>{typeof quote === "string" ? quote : ""}</Text>
        <Button onClick={fetch}>
          <BsArrowRepeat size="1.2rem" color="#000" />
        </Button>
      </Flex>
    </Container>
  );
};

export default Quotes;
