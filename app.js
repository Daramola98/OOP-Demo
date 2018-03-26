import Car from './OOP/cars';
import Toyota from './OOP/toyota';

const mercedes = new Car(20, 20, 'Mercedes', 'Automatic', 4, '50kg');
mercedes.increaseSpeed();
console.log(mercedes.speed);

const corolla = new Toyota(30, 30, 'Toyota', 'Automatic', '2', '400kg', 50000, 2009, 'V8');
console.log(corolla);
