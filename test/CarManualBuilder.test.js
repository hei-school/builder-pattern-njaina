import CarManualBuilder from '../src/CarManualBuilder.js';
import Director from '../src/Director.js';

describe('CarManualBuilder', () => {
  it('should build a car manual with the correct instructions', () => {
    const builder = new CarManualBuilder();
    const director = new Director();
    director.constructSportsCar(builder);
    const manual = builder.getProduct();

    expect(manual.content).toContain('Set the number of seats to 2');
    expect(manual.content).toContain('Install the Sports Engine engine');
    expect(manual.content).toContain('Install the trip computer');
    expect(manual.content).toContain('Install the GPS');
  });
});