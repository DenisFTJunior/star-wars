import React, { useEffect, useState } from "react";

import Table from "../../components/table/Table";
import TableFotter from "../../components/table/TableFotter";
import { unformattedOption } from "../../components/table/types/options";
import LoaderCharacters, {
  useCharacters,
  useCharactersActions,
  useCharactersState,
} from "./_load/LoaderCharacters";
import TableState, {
  useTableActions,
  useTableState,
} from "../../components/table/TableState";

const options: unformattedOption[] = [
  {
    label: "Name",
    value: "name",
    flex: 3,
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
    <>
      <Table data={people} options={options} />
    </>
  );
};

export default TableCharacters;
