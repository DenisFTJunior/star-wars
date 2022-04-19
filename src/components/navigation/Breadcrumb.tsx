import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Container from "../structure/Container";

import Flex from "../structure/Flex";
import MenuItem from "./MenuItem";

const BreadCrumb = ({
  options,
}: {
  options: { path: string; label: string }[];
}) => {
  return (
    <Flex direction="row" justify="flex-start">
      <Container width="20%" border="1px solid #757575" borderRadius="10px" margin="1rem 0">
        <Flex direction="row" justify="center" gap={1}>
          {options.map((item, index) => (
            <>
              <MenuItem
                label={item.label}
                href={`/${item.path}`}
                withoutBg
                width="3rem"
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
