"use strict";
const searchBtn = document.querySelector(".btn-search");
const searchInput = document.querySelector(".search-input");
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const createImg = (imgSource) => {
  const imagesContainer = document.querySelector(".images-container");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const btn = document.createElement("button");
  const searchForm = document.forms.searchForm;
  btn.classList.add("btn", "btn-danger", "d-block", "m-auto", "mt-2");
  btn.textContent = "DELETE";
  img.src = imgSource;
  img.classList.add("d-block", "m-auto");
  img.style.maxWidth = "350px";
  div.classList.add("fade", "gif-div");
  div.classList.add("mb-3");
  div.insertAdjacentElement("beforeend", img);
  div.insertAdjacentElement("beforeend", btn);
  img.addEventListener("load", function () {
    setTimeout(() => {
      div.classList.remove("fade");
    }, 0);
  });
  imagesContainer.insertAdjacentElement("afterbegin", div);
  btn.addEventListener("click", function (e) {
    div.classList.add("fade");
    setTimeout(() => {
      this.closest("div").remove();
    }, 500);
  });
  if (!searchForm?.querySelector(".delete-all")) {
    const deleteAllBtn = document.createElement("button");
    deleteAllBtn.classList.add(
      "delete-all",
      "btn",
      "btn-danger",
      "text-nowrap"
    );
    deleteAllBtn.textContent = "DELETE ALL!";
    searchForm.insertAdjacentElement("beforeend", deleteAllBtn);
    deleteAllBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".gif-div").forEach((elem) => {
        elem.classList.add("fade");
      });
      setTimeout(() => {
        imagesContainer.innerHTML = "";
        deleteAllBtn.remove();
      }, 500);
    });
  }
};
// Using Fetch

// const searchGif = async (searchWord) => {
//   try {
//     const response = await fetch(
//       `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${searchWord}`
//     );
//     if (response.status !== 200) {
//       throw new Error(`Something went wrong!`);
//     }
//     const data = await response.json();
//     const dataLength = data.data.length;
//     const randomGifPosition = randomNum(0, dataLength);
//     const imgUrl = data.data[randomGifPosition]?.images.fixed_height.url;
//     createImg(imgUrl);
//   } catch (err) {
//     console.error(err);
//   }
// };

// Using XMLHttpRequest
const searchGif = (searchWord) => {
  try {
    const request = new XMLHttpRequest();
    request.open(
      "Get",
      `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${searchWord}`
    );
    request.send();
    request.addEventListener("load", function (e) {
      if (request.status !== 200) {
        throw new Error(`Something went wrong!`);
      }
      const data = JSON.parse(request.response);
      const dataLength = data.data.length;
      const randomGifPosition = randomNum(0, dataLength);
      const imgUrl = data.data[randomGifPosition]?.images.fixed_height.url;
      createImg(imgUrl);
    });
  } catch (err) {
    console.error(err);
  }
};
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (searchInput.value !== "" && isNaN(Number(searchInput.value))) {
    searchGif(searchInput.value);
  } else {
    errorPopup();
  }
});
function errorPopup() {
  const errorBtn = document.querySelector(".error-btn");
  const errorMsg = document.querySelector(".error-msg");
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.display = "block";
  errorMsg.style.display = "flex";
  errorMsg.classList.remove("shrink");
  setTimeout(() => {
    errorMsg.classList.add("grow");
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }, 0);
  //////////////////////////////
  errorBtn.addEventListener("click", function (e) {
    errorMsg.classList.add("shrink");
    errorMsg.classList.remove("grow");
    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      wrapper.style.display = "none";
      errorMsg.style.display = "none";
    }, 500);
  });
}
