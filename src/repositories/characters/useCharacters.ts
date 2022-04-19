import { gql, useQuery } from "@apollo/client";

import { Character } from "../../entities/character";
import { Client } from "../config/client";

const QUERY = gql`
AllPeople($first:Int, $after:Int){
    allPeople(first: $first, after:$after){
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
            planet: homeworld{
                id
                name
            }
        }
    }
}
`;

type Characters = { allPeople: { people: Character[] } } ;

const useCharactersQuery = (page = 1) => {
  return useQuery<Characters>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    client: Client,
    variables: { first: 15, after: 15 * (page - 1) },
  });
};

export default useCharactersQuery;
