import React, { useEffect, useState } from "react";
import { BsList, BsFillArrowLeftSquareFill } from "react-icons/bs";

import Button from "../actions/Button";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import { DP } from "../types/dp";
import MenuItem from "./MenuItem";

const SlideMenu = ({ style }: { style?: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  if (!open)
    return (
      <Panel
        width="6rem"
        height="100vh"
        bgColor="#353535"
        dp={DP.MEDIUM}
        borderRadius="0"
        padding="20px"
        style={style}
      >
        <Flex justify="center" align="flex-start" direction="row">
          <Button onClick={() => setOpen(true)}>
            <BsList size="2rem" color="#fff" />
          </Button>
        </Flex>
      </Panel>
    );

  return (
    <Panel
      width="6rem"
      height="100vh"
      bgColor="#353535"
      dp={DP.MEDIUM}
      borderRadius="0"
      padding="20px"
      style={style}
    >
      <Flex justify="flex-start" align="flex-start" direction="column" gap={1}>
        <Button hoverColor="#fff" onClick={() => setOpen(false)}>
          <BsFillArrowLeftSquareFill size="2rem" color="#fff" />
        </Button>
        <MenuItem href="/" label="Home" />
        <MenuItem href="/characters" label="Character" />
      </Flex>
    </Panel>
  );
};

export default SlideMenu;
