# ``The creational pattern``


## Builder Pattern

The **Builder pattern** is a creational design pattern that is used to construct complex objects step by step. It provides a way to separate the construction of an object from its representation, allowing the same construction process to create different representations.

The primary goal of the Builder pattern is to abstract the construction process of an object so that the same construction process can be used to create different variations or configurations of the object. This pattern is particularly useful when the construction process involves multiple steps or when there are different ways to configure an object.

Here are the key components involved in the Builder pattern:

1. **Builder**: This is an interface or abstract class that defines the common methods to create different parts of the complex object. It provides methods for setting properties or adding components to the object being built.

2. **Concrete Builders**: These are the classes that implement the Builder interface. Each concrete builder provides its own implementation of the builder methods. Concrete builders are responsible for constructing and assembling the parts of the object being built.

3. **Director**: The director class is responsible for managing the construction process. It receives a concrete builder object and orchestrates the steps needed to construct the object. The director doesn't know the specifics of the object being built but uses the builder interface to build it.

4. **Product**: This is the complex object being built. The product class typically contains a set of properties and methods that represent the final object.

The typical workflow of the Builder pattern involves the following steps:

1. Create a concrete builder object.
2. Pass the builder object to the director.
3. The director calls the builder's methods in a specific order to construct the object step by step.
4. Once the object is fully constructed, the client can obtain the final product from the builder.

**``The Builder pattern allows you to create complex objects with a clear separation of concerns. It provides flexibility in configuring and creating different variations of objects while keeping the construction process consistent.``**

**``
Some common use cases of the Builder pattern include constructing configuration objects, creating complex data structures, or building objects with optional or variable components.
``**
## How to use
### Clone the app
``git clone https://github.com/hei-school/builder-pattern-njaina``
### Run the app
``npm start``
### Test the app
``npm run test``