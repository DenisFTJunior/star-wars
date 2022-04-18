import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";

import Button from "../actions/Button";
import Link from "../actions/Link";
import Text from "../presentation/Text";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import Position from "../structure/Position";
import { DP } from "../types/dp";

const SlideMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  if (!open)
    return (
      <Position position="fixed" top={0} left={0} zIndex={10}>
        <Panel width="10%" heigth="100%" dp={DP.MEDIUM}>
          <Button onClick={() => setOpen(true)}>
            <BsFillGridFill />
          </Button>
        </Panel>
      </Position>
    );

  return (
    <Position position="fixed" top={0} left={0} zIndex={10}>
      <Panel width="20%" heigth="100%" dp={DP.MEDIUM} padding="10px">
        <Flex justify="center" alignContent="center" direction="column">
          <Link href="/characters">
            <Text element="span"> Characters</Text>
          </Link>
        </Flex>
      </Panel>
    </Position>
  );
};

export default SlideMenu;
