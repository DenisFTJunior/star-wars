import React, { useEffect, useState } from "react";
import { BsList, BsFillArrowLeftSquareFill } from "react-icons/bs";

import Button from "../actions/Button";
import Link from "../actions/Link";
import Text from "../presentation/Text";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import Position from "../structure/Position";
import { DP } from "../types/dp";

const SlideMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(open);
  }, [open]);

  if (!open)
    return (
      <Position position="fixed" top={0} left={0} zIndex={10}>
        <Panel
          width="4rem"
          height="100vh"
          bgColor="#353535"
          dp={DP.MEDIUM}
          borderRadius="0"
          padding="20px"
        >
          <Flex justify="center" align="flex-start" direction="row">
            <Button onClick={() => setOpen(true)}>
              <BsList size="3rem" color="#fff" />
            </Button>
          </Flex>
        </Panel>
      </Position>
    );

  return (
    <Position position="fixed" top={0} left={0} zIndex={10}>
      <Panel
        width="8rem"
        height="100vh"
        bgColor="#353535"
        dp={DP.MEDIUM}
        borderRadius="0"
        padding="20px"
      >
        <Flex
          justify="flex-start"
          align="flex-start"
          direction="column"
          gap={2}
        >
          <Button onClick={() => setOpen(false)}>
            <BsFillArrowLeftSquareFill size="2rem" color="#fff" />
          </Button>
          <Link href="/characters" hoverColor="#474545">
            <Text element="span" color="#fff">
              Characters
            </Text>
          </Link>
        </Flex>
      </Panel>
    </Position>
  );
};

export default SlideMenu;
