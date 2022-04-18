export interface Planet {
  id: string;
  name: string;
  gravity: string;
  climates: string[];
  terrains: string[];
  
  surfaceWater: number;
  population: number;
  diameter: number;
  rotationPeriod: number;
  orbitalPeriod: number;
}
