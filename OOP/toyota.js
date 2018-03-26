import Car from './cars';

/**
 *
 *@class Toyota
 *@classdesc creates a Toyota Class
 */
class Toyota extends Car {
  /**
   * Creates a Toyota object
   * @param {number} speed - The maximum speed
   * @param {string} distanceCovered - The distance covered in miles
   * @param {string} manufacturerName - The manufacturers name
   * @param {string} gearSystem - The transmission system
   * @param {string} numberOfDoors - The number of doors the car has
   * @param {string} weight - The weight of the car
   * @param {string} cost - The weight of the car
   * @param {number} modelYear - The model number of the car
   * @param {number} engineType - The engine type of the car
   * @return {object} returns a new object
   * @memberof Toyota
   */
  constructor(
    speed, distanceCovered, manufacturerName, gearSystem, numberOfDoors,
    weight, cost, modelYear, engineType
  ) {
    super(speed, distanceCovered, manufacturerName, gearSystem, numberOfDoors, weight);
    this.cost = cost;
  }

  /**
   * Calculates Acceleration
   * @return {number} returns acceleration
   * @memberof Toyota
   */
  calculateAcceleration() {
    super.calculateAcceleration();
    return this.speed * this.weight * this.distanceCovered;
  }
}

export default Toyota;
