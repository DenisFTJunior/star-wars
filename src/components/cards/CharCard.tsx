import React from "react";

import { Character } from "../../entities/character";
import Text from "../presentation/Text";
import Container from "../structure/Container";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import { DP } from "../types/dp";
import CardItem from "./CardItem";

const CharCard = ({ character }: { character: Character }) => {
  if (!character) return <Text element="span">Loading...</Text>;
  return (
    <Container
      maxWidth="100%"
      width="50rem"
      margin="1rem"
    >
      <Panel dp={DP.NONE} padding="20px" bgColor="#BFBFCB">
        <Flex justify="flex-start" align="flex-start" wrap gap={1}>
          <CardItem label="Birth Year" value={character.birthYear} />
          <CardItem label="Eye Color" value={character.eyeColor} />
          <CardItem label="Gender" value={character.gender} />
          <CardItem label="Hair Color" value={character.hairColor} />
          <CardItem label="Height" value={character.height} />
          <CardItem label="Home world" value={character.planet.name} />
          <CardItem label="Skin Color" value={character.skinColor} />
          <CardItem label="Mass" value={character.mass} />
          <CardItem label="Species" value={character.species?.name} />
        </Flex>
      </Panel>
    </Container>
  );
};

export default CharCard;
