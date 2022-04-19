import React, { createContext, useContext } from "react";

import Text from "../../../components/presentation/Text";
import { Character } from "../../../entities/character";
import useCharacterQuery from "../../../repositories/characters/useCharacter";

type LocalCharacter = { person: Character };

const Context = createContext({} as LocalCharacter | undefined);
const { Provider } = Context;

export const useCharacterState: Function = () => useContext(Context);
export const useCharacter: Function = () => useCharacterState()?.person;

const LoaderCharacter = ({
  children,
  id,
}: {
  children: JSX.Element | JSX.Element[];
  id: string;
}) => {
  const { data, loading, error } = useCharacterQuery(id);

  if (loading) return <Text>Loading...</Text>;

  return <Provider value={data}>{children}</Provider>;
};

export default LoaderCharacter;
