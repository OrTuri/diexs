"use strict";
let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordNot < wordBad) {
  const newSentence = sentence.replace(
    sentence.slice(wordNot, wordBad + 3),
    "good"
  );
  console.log(newSentence);
}
