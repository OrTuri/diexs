"use strict";
const form = document.forms.form;
const sendItemToServer = async (e) => {
  try {
    e.preventDefault();
    const formData = new FormData(form);
    const dataObj = [...formData].reduce((acc, curr) => {
      return { ...acc, [curr[0]]: curr[1] };
    }, {});
    const res = await fetch("/form", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });
    if (res.status !== 200) {
      throw error;
    }
    location.href = "/shoppingList";
  } catch (err) {
    console.log(err);
  }
};
form.addEventListener("submit", sendItemToServer);
