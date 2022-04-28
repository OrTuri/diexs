"use strict";
const checkTruthy = function () {
  for (let item of [...arguments]) {
    if (item) {
      continue;
    } else return false;
  }
  return true;
};
