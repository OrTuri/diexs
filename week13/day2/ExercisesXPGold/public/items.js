"use strict";

const getList = async () => {
  try {
    const res = await fetch("/getList", {
      method: "post",
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const showInDom = (itemObject) => {
  const ol = document.querySelector(".list-group");
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-start"
>
  <div class="ms-2 me-auto">
    <div class="fw-bold">${itemObject.item}</div>
  </div>
  <span class="badge bg-primary rounded-pill">${itemObject.amount}</span>
</li>`;
  ol.insertAdjacentHTML("afterbegin", html);
};

const showNoItems = () => {
  const ol = document.querySelector(".list-group");
  const html = `<h1 class="text-center lead">There are no items in the list! please add items 🚫⛔</h1>`;
  ol.insertAdjacentHTML("afterbegin", html);
};

getList().then((res) => {
  res?.forEach((item) => {
    showInDom(item);
  });

  if (!res) showNoItems();
});
