import { gql, useQuery } from "@apollo/client";

import { Character } from "../../entities/character";
import { Client } from "../config/client";

const QUERY = gql`
  query Person($id: ID) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      skinColor
      created
      edited
      height
      mass
      species {
        id
        name
      }
      planet: homeworld {
        id
        name
      }
      filmConnection {
        films {
          id
          title
          releaseDate
          director
          producers
        }
      }
    }
  }
`;

type Characters = { person: Character };

const useCharacterQuery = (id) => {
  return useQuery<Characters>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    client: Client,
    skip: !id,
    variables: { id },
  });
};

export default useCharacterQuery;
