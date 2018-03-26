import chai from 'chai';
import Car from '../OOP/cars';
import Toyota from '../OOP/toyota';

const { expect } = chai;

describe('Car', () => {
  const audi = new Car(25, 30, 'Audi', 'Manual', 4, 300);
  it('should return a new Car object', () => {
    expect(audi).to.be.a('object');
  });

  it('speed should equal 25', () => {
    expect(audi.speed).to.be.equal(25);
  });

  it('should return acceleration equal to speed * distanceCovered', () => {
    expect(audi.acceleration).to.be.equal(750);
  });

  it('should return gear system of the car', () => {
    expect(audi.gearSystem).to.be.equal('Manual');
  });

  it('speed of car should reset to 0', () => {
    audi.stopCar();
    expect(audi.speed).to.be.equal(0);
  });
});

describe('Toyota', () => {
  const camry = new Toyota(45, 30, 'Camry', 'Automatic', 4, 300, 100000, 2015, 'V6');
  it('should return a new Toyota object', () => {
    expect(camry).to.be.a('object');
  });

  it('speed should equal to 45', () => {
    expect(camry.speed).to.be.equal(45);
  });

  it('should return speed * distanceCovered * weight', () => {
    expect(camry.acceleration).to.be.equal(405000);
  });

  it('should return speed * distanceCovered * weight', () => {
    expect(camry.calculateAcceleration()).to.be.equal(405000);
  });

  it('should return automatic', () => {
    expect(camry.gearSystem).to.be.equal('Automatic');
  });

  it('should reset the speed property to 0', () => {
    camry.stopCar();
    expect(camry.speed).to.be.equal(0);
  });
});

