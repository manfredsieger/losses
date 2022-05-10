import { getLatestLossesObject } from '../utils/helpers';

describe('getLatestLossesObject', () => {
  test('Valid array', () => {
    expect(getLatestLossesObject([{
      personnel: 20600,
      aircrafts: 167,
      helicopters: 147,
      armoredVehicles: 2041,
      vehicles: 1487,
      tanks: 790,
      artillery: 381,
      mlrs: 130,
      cisterns: 76,
      antiAir: 67,
      uav: 155,
      vessels: 8,
      specialVehicle: 27,
      srmb: 4,
      cruiseMissiles: 100,
    }]))
      .toEqual({
      personnel: 20600,
      aircrafts: 167,
      helicopters: 147,
      armoredVehicles: 2041,
      vehicles: 1487,
      tanks: 790,
      artillery: 381,
      mlrs: 130,
      cisterns: 76,
      antiAir: 67,
      uav: 155,
      vessels: 8,
      specialVehicle: 27,
      srmb: 4,
      cruiseMissiles: 100,
    })
  });

  test('Empty array', () => {
    expect(getLatestLossesObject([])).toEqual({})
  });

  test('Object doesn\'t have a required personnel property', () => {
    expect(() => {
      getLatestLossesObject([{
        aircrafts: 167,
        helicopters: 147,
        armoredVehicles: 2041,
        vehicles: 1487,
        tanks: 790,
        artillery: 381,
        mlrs: 130,
        cisterns: 76,
        antiAir: 67,
        uav: 155,
        vessels: 8,
        specialVehicle: 27,
        srmb: 4,
      }])
    }).toThrow('The object provided does not match the expected object - missing personnel property')
  });

  test('Object doesn\'t have a NOT required srmb property', () => {
    expect(getLatestLossesObject([{
      personnel: 30000,
      aircrafts: 167,
      helicopters: 147,
      armoredVehicles: 2041,
      vehicles: 1487,
      tanks: 790,
      artillery: 381,
      mlrs: 130,
      cisterns: 76,
      antiAir: 67,
      uav: 155,
      vessels: 8,
      specialVehicle: 27,
      cruiseMissiles: 4,
    }])).toEqual({
      personnel: 30000,
      aircrafts: 167,
      helicopters: 147,
      armoredVehicles: 2041,
      vehicles: 1487,
      tanks: 790,
      artillery: 381,
      mlrs: 130,
      cisterns: 76,
      antiAir: 67,
      uav: 155,
      vessels: 8,
      specialVehicle: 27,
      cruiseMissiles: 4,
    })
  });

  test('Provided an object instead of an array', () => {
    expect(() => {
      getLatestLossesObject({})
    }).toThrow('You provided not an array')
  });
})