/**
 * Losses names that shall be rendered on the frontend.
 * Some types were previously on the infographics but
 * the General Staff of Ukraine removed them. They have
 * display value of 'false'.
 *
 * All other losses with display value of 'true' will be rendered.
 *
 * Losses that were removed:
 * --- srmb (short-range ballistic missiles) - on April 1, 2022
 * (with 4 destroyed items)
 * --- cisterns - on April 1, 2022 (with 76 destroyed items).
 * Cisterns were added to the vehicles on the same day and
 * 'vehicles' became 'vehicles & fuel tanks'
 */
export default {
  personnel: {
    name: 'personnel',
    display: true,
  },
  aircrafts: {
    name: 'aircrafts',
    display: true,
  },
  helicopters: {
    name: 'helicopters',
    display: true,
  },
  armoredVehicles: {
    name: 'armoredVehicles',
    display: true,
  },
  vehicles: {
    name: 'vehicles',
    display: true,
  },
  tanks: {
    name: 'tanks',
    display: true,
  },
  artillery: {
    name: 'artillery',
    display: true,
  },
  mlrs: {
    name: 'mlrs',
    display: true,
  },
  cisterns: {
    name: 'cisterns',
    display: false,
  },
  antiAir: {
    name: 'antiAir',
    display: true,
  },
  uav: {
    name: 'uav',
    display: true,
  },
  vessels: {
    name: 'vessels',
    display: true,
  },
  specialVehicle: {
    name: 'specialVehicle',
    display: true,
  },
  srmb: {
    name: 'srmb',
    display: false,
  },
  cruiseMissiles: {
    name: 'cruiseMissiles',
    display: true,
  },
};
