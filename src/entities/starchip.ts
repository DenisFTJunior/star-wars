export interface Species {
  id: string;
  name: string;
  model: string;
  crew: string;
  passengers: string;
  starshipClass: string;
  consumables: string;
  manufacturers: string[];

  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: number;
  hyperdriveRating: number;
  MGLT: number;
  cargoCapacity: number;
}
