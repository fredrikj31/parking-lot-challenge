import { ParkingLot } from "../src/index";

describe("Park Car", () => {
  let parkingLot: ParkingLot;

  beforeEach(() => {
    parkingLot = new ParkingLot(1);
  });

  test("Creates a parking lot with 10 spaces", () => {
    const bigParkingLot = new ParkingLot(10);
    expect(bigParkingLot.getParkingLot.length).toBe(10);
  });

  test("Parks car on an empty parking space", () => {
    parkingLot.parkCar({ licensePlate: "license-plate" });

    expect(parkingLot.getParkingLot[0]?.licensePlate).toEqual("license-plate");
  });

  test("Throws because of requested non existing space.", () => {
    expect(() => {
      parkingLot.parkCar({ licensePlate: "license-plate" }, 2);
    }).toThrow();
  });

  test("Fails to park car at occupied space", () => {
    parkingLot.parkCar({ licensePlate: "license-plate" });

    expect(() => {
      parkingLot.parkCar({ licensePlate: "license-plate" });
    });
  });
});
