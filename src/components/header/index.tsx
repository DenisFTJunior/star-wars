import moment from "moment";
import React from "react";

import Text from "../presentation/Text";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import { DP } from "../types/dp";

const Header = () => (
  <Panel
    width="100%"
    height="4rem"
    bgColor="#454545"
    dp={DP.SOFT}
    borderRadius="0"
    padding="20px"
  >
    <Flex justify="flex-end" align="center" direction="row">
      <Text element="span" color="#fff">
        {moment().format("MMMM Do YYYY, h:mm a")}
      </Text>
    </Flex>
  </Panel>
);

export default Header;
