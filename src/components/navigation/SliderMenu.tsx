import React, { useEffect, useState } from "react";
import { BsList, BsFillArrowLeftSquareFill } from "react-icons/bs";

import Button from "../actions/Button";
import Container from "../structure/Container";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import { DP } from "../types/dp";
import MenuItem from "./MenuItem";

const SlideMenu = ({ style }: { style?: string }) => {
  const [open, setOpen] = useState<boolean>(false);

  if (!open)
    return (
      <Container minHeight="100vh" height="100%">
        <Panel
          width="6rem"
          height="100%"
          bgColor="#353535"
          dp={DP.MEDIUM}
          borderRadius="0"
          padding="20px"
          style={style}
        >
          <Flex
            justify="center"
            align="flex-start"
            direction="row"
            height="100%"
          >
            <Button onClick={() => setOpen(true)}>
              <BsList size="2rem" color="#fff" />
            </Button>
          </Flex>
        </Panel>
      </Container>
    );

  return (
    <Container minHeight="100vh" height="100%">
      <Panel
        width="6rem"
        height="100%"
        bgColor="#353535"
        dp={DP.MEDIUM}
        borderRadius="0"
        padding="20px"
        style={style}
      >
        <Flex
          justify="flex-start"
          align="flex-start"
          direction="column"
          gap={1}
          height="100%"
        >
          <Button hoverColor="#fff" onClick={() => setOpen(false)}>
            <BsFillArrowLeftSquareFill size="2rem" color="#fff" />
          </Button>
          <MenuItem href="/" label="Home" />
          <MenuItem href="/character" label="Characters" />
        </Flex>
      </Panel>
    </Container>
  );
};

export default SlideMenu;
