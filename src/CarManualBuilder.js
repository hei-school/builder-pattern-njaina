const Manual= require('./Manual');
const Builder= require('./Builder');

class CarManualBuilder extends Builder {
  constructor() {
    super();
    this.manual = new Manual();
  }

  reset() {
    this.manual = new Manual();
  }

  setSeats(number) {
    this.manual.content += `Set the number of seats to ${number}\n`;
  }

  setEngine(engine) {
    this.manual.content += `Install the ${engine} engine\n`;
  }

  setTripComputer(hasTripComputer) {
    if (hasTripComputer) {
      this.manual.content += "Install the trip computer\n";
    }
  }

  setGPS(hasGPS) {
    if (hasGPS) {
      this.manual.content += "Install the GPS\n";
    }
  }

  getProduct() {
    return this.manual;
  }
}

module.exports = CarManualBuilder;