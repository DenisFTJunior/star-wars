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
  homeworld: Planet;
  species: Species;
}
