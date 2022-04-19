import React, { useState } from "react";
import BreadCrumb from "../../components/navigation/Breadcrumb";
import Quotes from "../../components/presentation/Quotes";
import Text from "../../components/presentation/Text";
import Container from "../../components/structure/Container";
import Flex from "../../components/structure/Flex";
import Table from "../../components/table/Table";
import { unformattedOption } from "../../components/table/types/options";
import LoaderCharacters, {
  useCharacters,
  useCharactersState,
} from "./_load/LoaderCharacters";

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

const CharactersPage = ({ setCursor, setQte, qte, cursor }) => {
  const { allPeople, pageInfo } = useCharactersState();

  return (
    <Container height="100vh">
      <Flex direction="column">
        <BreadCrumb
          options={[
            { path: "/", label: "Home" },
            { path: "/character", label: "Characters" },
          ]}
        />
        <Quotes height="2rem" />
      </Flex>
      <Text element="h2" size="lg">
        Characters
      </Text>
      <Text element="span" margin="0 2rem">
        A list of all star wars characters
      </Text>

      <Table data={allPeople.people} options={options} />
    </Container>
  );
};

const PageWrapper = () => {
  const [cursor, setCursor] = useState("");
  const [qte, setQte] = useState(5);
  return (
    <LoaderCharacters endCursor={cursor} qte={qte}>
      <CharactersPage
        cursor={cursor}
        setCursor={setCursor}
        qte={qte}
        setQte={setQte}
      />
    </LoaderCharacters>
  );
};
export default PageWrapper;
