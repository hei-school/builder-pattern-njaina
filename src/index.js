const CarBuilder = require('./CarBuilder');
const CarManualBuilder = require('./CarManualBuilder');
const Director = require('./Director');

class Application {
  makeCar() {
    const director = new Director();

    const carBuilder = new CarBuilder();
    director.constructSportsCar(carBuilder);
    const car = carBuilder.getProduct();
    console.log(car);

    const manualBuilder = new CarManualBuilder();
    director.constructSportsCar(manualBuilder);
    const manual = manualBuilder.getProduct();
    console.log(manual);
  }
}

const app = new Application();
app.makeCar();