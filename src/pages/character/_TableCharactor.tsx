import React, { useEffect, useState } from "react";

import Table from "../../components/table/Table";
import { unformattedOption } from "../../components/table/types/options";
import { useCharacters, useCharactersState } from "./_load/LoaderCharacters";
import {
  useTableActions,
  useTableState,
} from "../../components/table/TableState";
import Link from "../../components/actions/Link";
import Text from "../../components/presentation/Text";
import Container from "../../components/structure/Container";

const options: unformattedOption[] = [
  {
    label: "Name",
    value: "name",
    flex: 3,
    render: ({ item, value }) => (
      <Link href={`/character/${item?.id}`}>
        <Text>{value}</Text>
      </Link>
    ),
  },
  {
    label: "Home world",
    value: ["planet", "name"],
    flex: 1,
  },
  {
    label: "Hair color",
    value: "hairColor",
    flex: 1,
  },
  {
    label: "Eye color",
    value: "eyeColor",
    flex: 1,
  },
  {
    label: "Skin color",
    value: "skinColor",
    flex: 1,
  },
  {
    label: "Gender",
    value: "gender",
    flex: 1,
  },
];

const TableCharacters = () => {
  const { allPeople } = useCharactersState();
  const people = useCharacters();
  const { setCursor, setCount } = useTableActions();

  useEffect(() => {
    setCount(allPeople.totalCount);
    setCursor(allPeople.pageInfo.endCursor);
  }, []);

  return (
    <Container hideOnSmall>
      <Table data={people} options={options} />
    </Container>
  );
};

export default TableCharacters;
