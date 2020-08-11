import React from "react";
import ReactDOM from "react-dom";
import cars from './practice';

// import animals, {useAnimals} from './data';

// // destructure object
// const [cat,dog] = animals;

// //destructure property from object
// // const {name, sound} = cat;


// //give different name for property
// const {name: catName, sound: catSound} = cat;
// // const {name: dogName, sound: dogSound} = dog;

// //set default values
// // const {name = "Cat", sound = "Purr"} = cat;

// //nested objects
// const {name, sound, feedingRequirements:{food, water}} = cat;


// const [animal,makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();


const [honda, tesla] = cars;
const {speedStats:{topSpeed: hondaTopSpeed}} = honda;
const {speedStats:{topSpeed: teslaTopSpeed}} = tesla;
const {coloursByPopularity: [hondaTopColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;


ReactDOM.render(
  // <div>
  //   <h1>{catName +" "+ catSound+" "+food+" "+water}</h1>

  // </div>,
  
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
