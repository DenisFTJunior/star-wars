import React, { useEffect } from "react";
import CharCard from "../../components/cards/CharCard";
import Container from "../../components/structure/Container";
import Flex from "../../components/structure/Flex";
import { useTableActions } from "../../components/table/TableState";
import { useCharacters, useCharactersState } from "./_load/LoaderCharacters";

const CardsCharacter = () => {
  const { allPeople } = useCharactersState();
  const people = useCharacters();
  const { setCursor, setCount } = useTableActions();

  useEffect(() => {
    setCount(allPeople.totalCount);
    setCursor(allPeople.pageInfo.endCursor);
  }, []);

  return (
    <Container showOnSmall>
      <Flex onSmall justify="center" align="center">
        {people.map((char) => (
          <CharCard character={char} />
        ))}
      </Flex>
    </Container>
  );
};

export default CardsCharacter;
