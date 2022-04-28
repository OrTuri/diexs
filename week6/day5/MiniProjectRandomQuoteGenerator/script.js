"use strict";
const quotes = [
  {
    id: 0,
    author: "Lao Tzu",
    quote: "The journey of a thousand miles begins with one step",
  },
  {
    id: 1,
    author: "Friedrich Nietzsche",
    quote: "That which does not kill us makes us stronger",
  },
  {
    id: 2,
    author: "John Lennon",
    quote: "Life is what happens when you’re busy making other plans",
  },
  {
    id: 3,
    author: "Joe Kennedy",
    quote: "When the going gets tough, the tough get going",
  },
  {
    id: 4,
    author: "Mahatma Gandhi",
    quote: "You must be the change you wish to see in the world",
  },
  {
    id: 5,
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough",
  },
  {
    id: 6,
    author: "Robert H. Schuller",
    quote: "Tough times never last but tough people do",
  },
  {
    id: 7,
    author: "Stephen King",
    quote: "Get busy living or get busy dying",
  },
  {
    id: 8,
    author: "Henry Ford",
    quote: "Whether you think you can or you think you can't, you're right",
  },
  {
    id: 9,
    author: "Alrded Lord Tennyson",
    quote: "Tis better to have loved and lost than to have never loved at all",
  },
];
const generateBtn = document.querySelector(".generate-btn");
const authorName = document.querySelector(".author-name");
const quote = document.querySelector(".quote");
const quoteForm = document.forms.quoteForm;
const formAuthor = document.forms.quoteForm.authorInput;
const formQuote = document.forms.quoteForm.quoteInput;
const btnCharSpace = document.querySelector(".btn-char-space");
const btnCharNoSpace = document.querySelector(".btn-char-no-space");
const btnWord = document.querySelector(".btn-word");
const statsBtnContainer = document.querySelector(".stats-btn-container");
const collapseSpace = document.querySelector(".collapse-space .card");
const collapseNoSpace = document.querySelector(".collapse-no-space .card");
const collapseWord = document.querySelector(".collapse-word .card");
const likeBtn = document.querySelector(".like-btn");
const searchForm = document.forms.searchForm;
const searchFormInput = document.forms.searchForm.authorSearchInput;
const collapseSearch = document.querySelector(".collapse-search");
let currentQuote = -1;
const moveQuotes = () => {
  currentQuote++;
  if (currentQuote > quotes.length - 1) currentQuote = 0;
  quote.textContent = quotes[currentQuote].quote;
  authorName.textContent = quotes[currentQuote].author;
};
moveQuotes();
// const pushQuotesToLocalStorage = () => {
//   localStorage.setItem("data", JSON.stringify(quotes));
// };
// pushQuotesToLocalStorage();
function checkLikeBtn() {
  if (quotes[currentQuote]?.like) {
    likeBtn.classList.add("like-btn-red");
  } else {
    likeBtn.classList.remove("like-btn-red");
  }
}
generateBtn.addEventListener("click", function (e) {
  moveQuotes();
  checkLikeBtn();
});
quoteForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formAuthor.value !== "" && formQuote.value !== "") {
    quotes[quotes.length] = {
      id: quotes[quotes.length - 1].id + 1,
      author: formAuthor.value,
      quote: formQuote.value,
    };
    formAuthor.value = "";
    formQuote.value = "";
  } else alert("You need to fill all the fields");
});
function refreshStats() {}

statsBtnContainer.addEventListener("click", function (e) {
  if (e.target === btnCharSpace) {
    collapseSpace.textContent = `The number charcters in the current quote (including space) is: ${quotes[currentQuote].quote.length} charcters`;
  }
  if (e.target === btnCharNoSpace) {
    collapseNoSpace.textContent = `The number charcters in the current quote (NOT including space) is: ${
      quotes[currentQuote].quote.replaceAll(" ", "").length
    } charcters`;
  }
  if (e.target === btnWord) {
    collapseWord.textContent = `The number words in the current quote is: ${
      quotes[currentQuote].quote.split(" ").length
    } words`;
  }
});
likeBtn.addEventListener("click", function (e) {
  if (quotes[currentQuote]?.like) {
    quotes[currentQuote].like = false;
    likeBtn.classList.remove("like-btn-red");
  } else {
    quotes[currentQuote].like = true;
    likeBtn.classList.add("like-btn-red");
  }
});
let collapse = false;
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  collapseSearch.textContent = "";
  if (searchFormInput.value !== "") {
    document.querySelector(".search-alert").classList.remove("d-flex");
    document.querySelector(".search-alert").classList.add("d-none");
    if (!collapse) {
      new bootstrap.Collapse(document.querySelector(".collapse-search-2"));
    }
    collapse = true;
    quotes.forEach((item) => {
      if (
        item.author.toLowerCase().includes(searchFormInput.value.toLowerCase())
      ) {
        const textNode = `${item.quote} (${item.author})`;
        const li = document.createElement("li");
        li.append(textNode);
        collapseSearch.append(li);
      }
    });
  } else {
    document.querySelector(".search-alert").classList.add("d-flex");
    document.querySelector(".search-alert").classList.remove("d-none");
  }
});
