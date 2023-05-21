export interface Car {
  licensePlate: string;
}

export interface ParkedCar {
  car: Car | null;
  parkingSpace: number;
}