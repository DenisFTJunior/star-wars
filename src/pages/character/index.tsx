import React from "react";

import BreadCrumb from "../../components/navigation/Breadcrumb";
import Quotes from "../../components/presentation/Quotes";
import Text from "../../components/presentation/Text";
import Container from "../../components/structure/Container";
import Flex from "../../components/structure/Flex";
import TableFotter from "../../components/table/TableFotter";
import TableState from "../../components/table/TableState";
import LoaderCharacters from "./_load/LoaderCharacters";
import TableCharacter from "./_TableCharactor";

const CharactersPage = () => {
  return (
    <Container minHeight="100vh">
      <Flex direction="column">
        <BreadCrumb
          options={[
            { path: "/", label: "Home" },
            { path: "/character", label: "Characters" },
          ]}
        />
        <Quotes height="4rem" />
      </Flex>
      <Text element="h2" size="lg">
        Characters
      </Text>
      <Text element="span" margin="0 2rem">
        A list of all star wars characters
      </Text>

      <TableState>
        <LoaderCharacters>
          <TableCharacter />
          <TableFotter />
        </LoaderCharacters>
      </TableState>
    </Container>
  );
};

export default CharactersPage;
