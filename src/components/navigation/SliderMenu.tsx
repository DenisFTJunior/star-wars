import React, { useEffect, useState } from "react";
import { BsList, BsFillArrowLeftSquareFill } from "react-icons/bs";

import Button from "../actions/Button";
import Link from "../actions/Link";
import Text from "../presentation/Text";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import { DP } from "../types/dp";

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
            <BsList size="3rem" color="#fff" />
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
        <Button onClick={() => setOpen(false)}>
          <BsFillArrowLeftSquareFill size="2rem" color="#fff" />
        </Button>
        <Link href="/" bgColor="#545454" hoverColor="#747474" width="6rem">
          <Text element="span" color="#fff">
            Home
          </Text>
        </Link>
        <Link
          href="/characters"
          bgColor="#545454"
          hoverColor="#747474"
          width="6rem"
        >
          <Text element="span" color="#fff">
            Characters
          </Text>
        </Link>
      </Flex>
    </Panel>
  );
};

export default SlideMenu;
