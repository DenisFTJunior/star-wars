import React, { createContext, useContext } from "react";
import Text from "../../../components/presentation/Text";
import { Character } from "../../../entities/character";

import useCharactersQuery from "../../../repositories/characters/useCharacters";

type Characters = { allPeople: { people: Character[] } };

const Context = createContext({} as Characters | undefined);
const { Provider } = Context;
const ActionContext = createContext({});
const { Provider: ActionProvider } = ActionContext;

export const useCharactersState: Function = () => useContext(Context) || {};
export const useCharacters: Function = () =>
  useCharactersState()?.allPeople.people || [];
export const useCharactersActions: Function = () => useContext(ActionContext);

const LoaderCharacters = ({
  children,
  qte,
  endCursor,
}: {
  children: JSX.Element | JSX.Element[];
  qte: number;
  endCursor: string;
}) => {
  const { data, loading, error, fetchMore } = useCharactersQuery(
    endCursor,
    qte
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red">{error.message}</Text>;

  return (
    <ActionProvider value={{ fetchMore }}>
      <Provider value={data}>{children}</Provider>
    </ActionProvider>
  );
};

export default LoaderCharacters;
