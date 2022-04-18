export interface Species {
  id: string;
  name: string;
  model: string;
  crew: string;
  passengers: string;
  vehicleClass: string;
  consumables: string;
  manufacturers: string[];

  costInCredits: number;
  length: number;
  maxAtmospheringSpeed: number;
  cargoCapacity: number;
}
