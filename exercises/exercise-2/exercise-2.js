let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

hogwarts.filter(obj => {
let {house: schoolHouse} = obj;
  return schoolHouse === "Gryffindor";
  
}).forEach(obj => {
let {firstName, lastName, house: schoolHouse, pet, occupation} = obj;
console.log(`${firstName} ${lastName}`);
})

//need to test
//tested
hogwarts.filter(obj => {
let {pet, occupation} = obj;
//console.log(!!pet && (occupation === "Teacher"));
  return !!pet && (occupation === "Teacher");
  
}).forEach(obj => {
let {firstName, lastName, house: schoolHouse, pet, occupation} = obj;
console.log(`
${firstName} ${lastName}`);
})

// could compress both into a funtion that takes arguments 
// can destruncture with arrow funciton argument 
/*
exampe with with arrow funciton 
hogwarts.filter(obj => {
let {house: schoolHouse} = obj;
  return schoolHouse === "Gryffindor";
  }).forEach(({firstName, lastName, house: schoolHouse, pet, occupation}) => {

console.log(`${firstName} ${lastName}`);
})
*/
