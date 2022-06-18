"use strict";
const form = document.forms.form;

const sendDataToServer = async (data) => {
  const res = await fetch("/items", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const resBody = await res.json();
  console.log(resBody);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  const dataObject = [...formData].reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
  sendDataToServer(dataObject);
});
