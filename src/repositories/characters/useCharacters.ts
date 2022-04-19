import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

import { Character } from "../../entities/character";
import { Client } from "../config/client";

const QUERY = gql`
  query AllPeope($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      pageInfo {
        endCursor
      }
      totalCount
      people {
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
      }
    }
  }
`;

type Characters = {
  allPeople: {
    people: Character[];
    pageInfo: { endCursor: string };
    totalCount: number;
  };
};

const useCharactersQuery = () => {
  const response = useQuery<Characters>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    client: Client,
    variables: { first: 5 },
    notifyOnNetworkStatusChange: true,
  });

  return response;
};

export default useCharactersQuery;
