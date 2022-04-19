import { Film } from "./film";
import { Planet } from "./planet";
import { Species } from "./species";

export interface Character {
  id: string;
  name: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  skinColor: string;
  created: string;
  edited: string;
  height: number;
  mass: number;
  planet: Planet;
  species: Species;
  filmConnection: { films: Film[] };
}
