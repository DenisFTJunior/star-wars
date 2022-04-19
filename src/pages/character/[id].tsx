import { useRouter } from "next/router";
import React from "react";
import CharCard from "../../components/cards/CharCard";

import BreadCrumb from "../../components/navigation/Breadcrumb";
import Quotes from "../../components/presentation/Quotes";
import Text from "../../components/presentation/Text";
import Container from "../../components/structure/Container";
import Flex from "../../components/structure/Flex";
import LoaderCharacter, { useCharacter } from "./_load/LoaderCharacter";

const CharacterPage = () => {
  const character = useCharacter();
  return (
    <Container>
      <Flex direction="column">
        <Quotes height="4rem" />
        <BreadCrumb
          options={[
            { path: "/", label: "Home" },
            { path: "/character", label: "Characters" },
            {
              path: `/character/${character?.id}`,
              label: character?.name || "",
            },
          ]}
          width="30rem"
          itemWidth="30%"
        />
        <Text element="h2" size="lg">
          {character?.name}
        </Text>
        <Text element="span">The information of {character?.name}</Text>
        <Flex justify="flex-start">
          <CharCard character={character} />
        </Flex>
      </Flex>
    </Container>
  );
};

const PageWrapper = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <LoaderCharacter id={typeof id === "string" ? id : undefined}>
      <CharacterPage />
    </LoaderCharacter>
  );
};

export default PageWrapper;
