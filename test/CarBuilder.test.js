import CarBuilder from '../src/CarBuilder.js';
import Director from '../src/Director.js';

describe('CarBuilder', () => {
  it('should build a car with the correct specifications', () => {
    const builder = new CarBuilder();
    const director = new Director();
    director.constructSportsCar(builder);
    const car = builder.getProduct();

    expect(car.seats).toBe(2);
    expect(car.engine).toBe('Sports Engine');
    expect(car.tripComputer).toBe(true);
    expect(car.gps).toBe(true);
  });
});