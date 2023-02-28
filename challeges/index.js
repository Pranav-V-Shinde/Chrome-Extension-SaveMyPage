const clickMe = document.querySelector(".clickMe");
clickMe.addEventListener("click", function () {
  console.log(`I want to open the box`);
});

const container = document.querySelector(".container");
const buyBtn = document.querySelector(".buy-btn");

buyBtn.addEventListener("click", function () {
  // container.innerHTML += "<p>Thanks for Buying...</p>";
  const p = document.createElement("p");
  p.textContent = "Thanks for buying";
  container.append(p);
});

//Template string
const myFavSuperHero = "Batman";
const statementWithStringConcatination =
  "My favorite superhero is " + myFavSuperHero + ".";
console.log(statementWithStringConcatination);
const templateString = `My favourite superhero is ${myFavSuperHero}`;
console.log(templateString);

const sender = "pranav";
const reciever = "shinchan";
const email = `Hey ${reciever}! \nI'm ${sender} \nand im a big fan of you.`;
console.log(email);

let credits = 12;
if (NaN) {
  console.log("Lets play 🤑💵💶💷💸💴💰");
} else {
  console.log("No sir you dont have money 💀");
}
//Truth values
//Falsey values 1. 0  2. undefined  3. NaN   4. null   5. false 6. ""
//Null = how developer defiens emptiness undefined =How Js defines emptiness

let currentViewers = null;
console.log(currentViewers);

let abc;
console.log(abc);
console.log(typeof abc);

let truthyOrFalsy = Boolean("false");
console.log(truthyOrFalsy);

console.log(Boolean(-0));

const welcome = document.querySelector(".welcome");
function welcomeMessage(name) {
  welcome.textContent = "";
  welcome.innerHTML = `<b>Welcome back! ${name}</b>`;
}
welcomeMessage("Pranav");

function customGreet(name, greet, emote) {
  welcome.textContent = `${greet} ! How are you ${name}? ${emote}`;
}
customGreet("pranav", "Howdy", "🕺");

/////        Parameters
function add(num1, num2) {
  return num1 + num2;
}
//             arguments
let addn = add(15, 16);
console.log(addn);

function pickFirst(arr) {
  return arr[0];
}
console.log(pickFirst([777777777, 15, 89]));

let arr = [1, 2, 3, 4];
function listArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
listArray(arr);
// localStorage.setItem("Item", "Saving to local storage");

const local = document.querySelector(".localStorage");
local.textContent = localStorage.getItem("Item");

const orangeBtn = document.querySelector(".orange-btn");
let data = [
  { name: "Brock", score: 30 },
  { name: "undertaker", score: 30 },
];
console.log(orangeBtn);
orangeBtn.addEventListener("click", function () {
  let currentPlayerScore = data[1].score;
  orangeBtn.textContent = currentPlayerScore;
});

let countries = ["India", "US", "Russia"];
let fruits = ["apple", "Orange"];
function best(array, desc) {
  let baseString = `The ${array.length} ${desc} are `;
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      baseString += array[i] + ".";
      return baseString;
    }
    baseString += array[i] + " , ";
  }
}
console.log(best(countries, "countries"));

const imgs = ["images/hip1.jpg", "images/hip1.jpg", "images/hip1.jpg"];

const picContainer = document.querySelector(".picContainer");
function renderImages() {
  let allPics = "";
  for (let i = 0; i < imgs.length; i++) {
    allPics += `<img src="${imgs[i]} alt="pic-${i}"> `;
  }
  picContainer.innerHTML += allPics;
}

renderImages();
