"use strict";

function mergeWords(func) {
  return function (a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return function (e) {
            return function (f) {
              return function (g) {
                return func(a, b, c, d, e, f, g);
              };
            };
          };
        };
      };
    };
  };
}
function args(a = "", b = "", c = "", d = "", e = "", f = "", g = "") {
  return `${a} ${b} ${c} ${d} ${e} ${f} ${g}`;
}
const words = mergeWords(args);
console.log(words("hey")("there")("how")("are")("you")("?")("!"));
