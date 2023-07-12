"use strict";

// Exercise 1. Създайте масив от обекти, всеки обект съдържа следните пропъртита(name, age, hasChildren). След това филтрирайте хората които са над 35.

/*const arr = [
  { name: "Mitko", age: 21, hasChildren: 0 },
  { name: "Ivan", age: 45, hasChildren: 1 },
  { name: "Nikolai", age: 37, hasChildren: 2 },
  { name: "Liam", age: 19, hasChildren: 0 },
];

const above35 = arr.filter((obj) => {
  return obj.age > 35;
});
console.log(above35);*/

// Exercise 3. Добавете Мюнхен след Берлин в масива за Германия.
/*const cities = {
  France: ["Lyon", "Paris"],
  Germany: ["Berlin"],
  Bulgaria: ["Sofia", "Varna", "Plovdiv"],
  Italy: ["Milano", "Torino"],
  Greece: ["Athens"],
};

cities.Germany.push("Munich");
console.log(cities);*/

//Exercise 4: Създайте масив от числа и чрез arrow функция, изпишете на конзолата корен квадратен на елементите.
/*const numbers = [4, 5, 2];

const square = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * arr[i]);
  }
};

square(numbers);*/

const color = document.querySelector(".color");
const table = document.getElementById("mytable");
let rand = Math.trunc(Math.random() * 3) + 1;
const clear = document.querySelector(".clear");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const saveJan = document.getElementById("savingsJan").textContent;
const saveFeb = document.getElementById("savingsFeb").textContent;
const moneyJan = document.getElementById("moneyJan").textContent;
const moneyFeb = document.getElementById("moneyFeb").textContent;

let cashJan = Number(saveJan.replace(/[^0-9.-]+/g, ""));
let cashFeb = Number(saveFeb.replace(/[^0-9.-]+/g, ""));
let bankJan = Number(moneyJan.replace(/[^0-9.-]+/g, ""));
let bankFeb = Number(moneyFeb.replace(/[^0-9.-]+/g, ""));

console.log(cashJan, cashFeb, bankFeb, bankJan);

color.addEventListener("click", function () {
  if (rand === 1) {
    table.style.backgroundColor = "red";
  } else if (rand === 2) {
    table.style.backgroundColor = "blue";
  } else {
    table.style.backgroundColor = "green";
  }
  rand = Math.trunc(Math.random() * 3) + 1;
});

clear.addEventListener("click", function () {
  table.style.backgroundColor = "white";
});

add.addEventListener("click", function () {
  if (bankJan <= 0 || bankFeb <= 0) {
    alert("You cannot put money!");
  } else {
    cashFeb += 5;
    cashJan += 5;
    bankFeb -= 5;
    bankJan -= 5;
    document.getElementById("savingsJan").textContent = `$${cashJan}`;
    document.getElementById("savingsFeb").textContent = `$${cashFeb}`;
    document.getElementById("moneyJan").textContent = `$${bankJan}`;
    document.getElementById("moneyFeb").textContent = `$${bankFeb}`;
  }
  console.log(cashJan, cashFeb, bankFeb, bankJan);
});

remove.addEventListener("click", function () {
  if (cashJan <= 0 || cashFeb <= 0) {
    alert("You cannot withdraw money!");
  } else {
    cashFeb -= 5;
    cashJan -= 5;
    bankFeb += 5;
    bankJan += 5;
    document.getElementById("savingsJan").textContent = `$${cashJan}`;
    document.getElementById("savingsFeb").textContent = `$${cashFeb}`;
    document.getElementById("moneyJan").textContent = `$${bankJan}`;
    document.getElementById("moneyFeb").textContent = `$${bankFeb}`;
  }
  console.log(cashJan, cashFeb, bankFeb, bankJan);
});
