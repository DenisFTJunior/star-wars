import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Container from "../structure/Container";

import Flex from "../structure/Flex";
import { sizeProps } from "../types/size";
import MenuItem from "./MenuItem";

const BreadCrumb = ({
  options,
  width,
  itemWidth,
}: {
  options: { path: string; label: string }[];
  itemWidth?: string;
} & sizeProps) => {
  return (
    <Flex direction="row" justify="center">
      <Container
        width={width || "15rem"}
        border="1px solid #757575"
        borderRadius="10px"
        margin="1rem 0"
        onSmallProps="width:80%"
      >
        <Flex direction="row" justify="center" align="center" gap={1}>
          {options.map((item, index) => (
            <>
              <MenuItem
                label={item.label}
                href={item.path}
                withoutBg
                width={itemWidth || "30%"}
                padding="2px"
                color="#757575"
              />
              {!(options.length - 1 <= index) && (
                <BsFillArrowRightSquareFill color="#757575" />
              )}{" "}
            </>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default BreadCrumb;
