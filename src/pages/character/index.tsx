import React from "react";

import BreadCrumb from "../../components/navigation/Breadcrumb";
import Quotes from "../../components/presentation/Quotes";
import Text from "../../components/presentation/Text";
import Container from "../../components/structure/Container";
import Flex from "../../components/structure/Flex";
import TableFotter from "../../components/table/TableFotter";
import TableState from "../../components/table/TableState";
import CardsCharacter from "./_CardsCharactor";
import LoaderCharacters from "./_load/LoaderCharacters";
import TableCharacter from "./_TableCharactor";

const CharactersPage = () => {
  return (
    <Container minHeight="100vh" height="100%">
      <Flex direction="column" height="100%">
        <Quotes height="4rem" />
        <BreadCrumb
          options={[
            { path: "/", label: "Home" },
            { path: "/character", label: "Characters" },
          ]}
        />

        <Text element="h2" size="lg">
          Characters
        </Text>
        <Text element="span">A list of all star wars characters</Text>
      </Flex>
      <TableState>
        <LoaderCharacters>
          <TableCharacter />
          <CardsCharacter />
          <TableFotter />
        </LoaderCharacters>
      </TableState>
    </Container>
  );
};

export default CharactersPage;
