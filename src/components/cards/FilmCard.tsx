import moment from "moment";
import React from "react";

import { Character } from "../../entities/character";
import { Film } from "../../entities/film";
import Text from "../presentation/Text";
import Container from "../structure/Container";
import Flex from "../structure/Flex";
import Panel from "../structure/Panel";
import { DP } from "../types/dp";
import CardItem from "./CardItem";

const FilmCard = ({ film }: { film: Film }) => {
  if (!film) return <Text element="span">Loading...</Text>;
  return (
    <Container maxWidth="100%" width="25rem" onSmallProps="width:50rem;">
      <Panel
        dp={DP.NONE}
        padding="20px"
        margin="1rem"
        border="1px solid #646464"
      >
        <Flex
          direction="row"
          justify="flex-start"
          align="flex-start"
          wrap
          gap={1}
        >
          <CardItem label="Title" value={film.title} small />
          <CardItem label="Director" value={film.director} small />
          <CardItem label="Producers" value={film.producers.join(",")} small />
          <CardItem
            label="Release"
            value={moment(film.releaseDate).format("MMM Do YY")}
            small
          />
        </Flex>
      </Panel>
    </Container>
  );
};

export default FilmCard;
