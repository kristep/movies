import React from 'react'

const Test = (props) => {
  console.log(props.belekas)


  class Animal {
    constructor(name) {
      this.animalType = 'Animal'
      this.name = name;
    }
    type() {
      console.log(this.name, 'is type', this.animalType);
    }
    speak() {
      console.log(this.name, 'speaks.');
    }
  }

  class Dog extends Animal {
    constructor(name, collarColor) {
      super(name);
      this.animalType = 'Dog';
      this.collarColor = collarColor;
    }
    speak() {
      console.log(this.name, 'barks.');
    }
    collar() {
      console.log(this.name, 'has a', this.collarColor, 'collar.');
    }
  }

  let spot = new Dog('Spot', 'red');
  spot.type();
  spot.speak();
  spot.collar();

  return (
    <div>
      <h2>valiooo</h2>
      <p>{props.belekas}</p>








    </div>

  )
}

export default Test