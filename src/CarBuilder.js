import Car from './Car';
const Builder= require('./Builder');

class CarBuilder extends Builder {
  constructor() {
    super();
    this.car = new Car();
  }

  reset() {
    this.car = new Car();
  }

  setSeats(number) {
    this.car.seats = number;
  }

  setEngine(engine) {
    this.car.engine = engine;
  }

  setTripComputer(hasTripComputer) {
    this.car.tripComputer = hasTripComputer;
  }

  setGPS(hasGPS) {
    this.car.gps = hasGPS;
  }

  getProduct() {
    return this.car;
  }
}

module.exports = CarBuilder;