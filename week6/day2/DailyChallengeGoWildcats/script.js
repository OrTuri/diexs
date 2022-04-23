"use strict";
const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1

const usernames = [];

gameInfo.forEach((item) => {
  usernames.push(item.username + "!");
});

// 2

const usersScoreHigher5 = [];

gameInfo.forEach((item) => {
  item.score > 5 ? usersScoreHigher5.push(item.username) : undefined;
});

// 3

let totalScore = gameInfo.reduce((a, b) => a + b.score, 0);
