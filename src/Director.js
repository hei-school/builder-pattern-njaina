class Director {
    constructSportsCar(builder) {
      builder.reset();
      builder.setSeats(2);
      builder.setEngine("Sports Engine");
      builder.setTripComputer(true);
      builder.setGPS(true);
    }
  
    constructSUV(builder) {
      builder.reset();
      builder.setSeats(4);
      builder.setEngine("SUV Engine");
      builder.setTripComputer(true);
      builder.setGPS(true);
    }
  }
  
  module.exports = Director;