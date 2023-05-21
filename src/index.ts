import { Car } from "./types";

export class ParkingLot {
  private numberOfParkingSpaces: number;
  private parkedCars: (Car | null)[] = [];

  constructor(parkingSpaces: number) {
    this.numberOfParkingSpaces = parkingSpaces;
    for (let i = 0; i < this.numberOfParkingSpaces; i++) {
      this.parkedCars[i] = null;
    }
  }

  public get getParkingLot() {
    return this.parkedCars;
  }

  public parkCar = (car: Car, parkingSpace?: number): void => {
    // If requested parking space is larger then the amount of parking spaces
    if (parkingSpace && parkingSpace > this.numberOfParkingSpaces) {
      throw new Error("We don't have as many parking spaces.");
    }

    // Check if parking space is already taken
    if (parkingSpace && this.parkedCars[parkingSpace] === null) {
      this.parkedCars[parkingSpace] = car;
      return;
    }

    // Defaults to find first empty parking spot
    for (let i = 0; i < this.numberOfParkingSpaces; i++) {
      const parkedCar = this.parkedCars[i];
      if (parkedCar === null) {
        this.parkedCars[i] = car;
        return;
      } else {
        continue;
      }
    }

    throw new Error("Could not find a parking lot space for your car");
  };

  public unparkCar = (index: number) => {
    this.parkedCars[index] = null;
  };

  public printParkingLot = (): void => {
    console.log(JSON.stringify(this.parkedCars));
  };
}
