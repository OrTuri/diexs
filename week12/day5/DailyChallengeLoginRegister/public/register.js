"use strict";

import {
  getFormData,
  activateRegisterButton,
  displayMessage,
} from "./FormModule.js";

const form = document.forms.registerForm;

form.addEventListener("input", (e) => {
  const data = getFormData(e.currentTarget);
  activateRegisterButton(e.currentTarget, data);
});

const sendDataToServer = async (e, emptyFields) => {
  e.preventDefault();
  const data = getFormData(e.currentTarget);
  if (emptyFields) {
    [...form.querySelectorAll("input")].forEach((elem) => (elem.value = ""));
  }
  const res = await fetch("/registerData", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  return { body, status: res.status };
};

// const displayMessage = (status, message) => {
//   const messageHeading = document.querySelector(".message");
//   messageHeading.textContent = message;
//   if (status === 200) {
//     messageHeading.classList.remove("d-none");
//     messageHeading.classList.add("text-success");
//     messageHeading.classList.remove("text-danger");
//   } else if (status === 406) {
//     messageHeading.classList.remove("d-none");
//     messageHeading.classList.add("text-danger");
//     messageHeading.classList.remove("text-success");
//   }
// };

form.addEventListener("submit", async (e) => {
  const response = await sendDataToServer(e, true);
  displayMessage(response.status, response.body);
});
