/**
 *
 *@class Car
 *@classdesc creates a Car Class
 */
class Car {
  /**
   * Creates a Car object
   * @param {number} speed - The maximum speed
   * @param {string} distanceCovered - The distance covered in miles
   * @param {string} manufacturerName - The manufacturers name
   * @param {string} gearSystem - The transmission system
   * @param {string} numberOfDoors - The number of doors the car has
   * @param {string} weight - The weight of the car
   * @return {null} returns a new object
   * @memberof Car
   */
  constructor(speed, distanceCovered, manufacturerName, gearSystem, numberOfDoors, weight) {
    this.speed = speed;
    this.distanceCovered = distanceCovered;
    this.manufacturerName = manufacturerName;
    this.gearSystem = gearSystem;
    this.numberOfDoors = numberOfDoors;
    this.weight = weight;
  }

  /**
   * get acceleration for Car
   * @return {null} returns a new object
   * @memberof Car
   */
  get acceleration() {
    return this.calculateAcceleration();
  }

  /**
   * Calculate Car acceleration
   * @return {null} returns acceleration value
   * @memberof Car
   */
  calculateAcceleration() {
    return this.speed * this.distanceCovered;
  }

  /**
   * Stop the car
   * @return {null} sets speed of car to 0
   * @memberof Car
   */
  stopCar() {
    this.speed = 0;
  }

  /**
   * Increase the speed of the car
   * @return {null} increment speed property
   * @memberof Car
   */
  increaseSpeed() {
    this.speed = this.speed + 1;
  }
}

export default Car;
