import { range } from "ramda";
import React, { useEffect, useState } from "react";
import { useCharactersActions } from "../../pages/character/_load/LoaderCharacters";

import Button from "../actions/Button";
import Text from "../presentation/Text";
import Container from "../structure/Container";
import Flex from "../structure/Flex";
import { useTableActions, useTableState } from "./TableState";

const TableFotter = () => {
  const { fetchMore } = useCharactersActions();
  const { qte, page, cursor, count: total } = useTableState();
  const { setQte, setPage } = useTableActions();
  const lastPage = Math.ceil(total / qte);

  return (
    <Container margin="0 2rem">
      <Flex direction="row" justify="center" align="center" gap={1}>
        <Flex direction="row" justify="space-between" align="center">
          <>
            <Button
              width="5rem"
              onClick={() => {
                setPage(page - 1);
                fetchMore({ variables: { last: qte, before: cursor } });
              }}
              border="1px solid #757575"
              borderRadius="10px"
              disabled={page === 1}
            >
              <Text element="span">Previous</Text>
            </Button>

            <Container width="2rem">
              <Text element="span" bold>
                {page}
              </Text>
            </Container>

            <Button
              width="5rem"
              onClick={() => {
                setPage(page + 1);
                fetchMore({ variables: { first: qte, after: cursor } });
              }}
              disabled={page === lastPage}
              border="1px solid #757575"
              borderRadius="10px"
            >
              <Text element="span">Next</Text>
            </Button>
          </>
        </Flex>
        <Flex direction="row" justify="center" align="center">
          {[5, 10, 20].map((item) => (
            <Button
              key={Math.random() + item}
              onClick={() => {
                setQte(item);
                fetchMore({ variables: { first: item } });
                setPage(1);
              }}
            >
              <Text element="span" bold={item === qte}>{`${item}`}</Text>
            </Button>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default TableFotter;
