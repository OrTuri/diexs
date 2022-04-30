"use strict";

// 1

class video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  // 2

  watch() {
    return `${this.uploader} watched all ${this.time} seconds of ${this.title}`;
  }
}

// 3

const user = new video("cat video 221", "Danny", 244);
console.log(user.watch());

// 4

const user2 = new video("dog video 43", "Jenny", 326);
console.log(user2.watch());

// 5

const users = [
  {
    title: "movie 1",
    uploader: "David",
    time: 1099,
  },
  {
    title: "movie 2",
    uploader: "Dan",
    time: 2234,
  },
  {
    title: "movie 3",
    uploader: "John",
    time: 1668,
  },
  {
    title: "movie 4",
    uploader: "Jenny",
    time: 2456,
  },
  {
    title: "movie 5",
    uploader: "Dana",
    time: 1564,
  },
];

// 6

users.forEach((user, i) => {
  user.instance = new video(user.title, user.uploader, user.time);
});
