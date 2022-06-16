"use strict";
import {
  getFormData,
  activateRegisterButton,
  displayMessage,
} from "./FormModule.js";
const form = document.forms.loginForm;

const sendDataToServer = async (e) => {
  e.preventDefault();
  const data = getFormData(e.currentTarget);
  const res = await fetch("/loginData", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  return { status: res.status, body };
};

form.addEventListener("input", (e) => {
  const data = getFormData(e.currentTarget);
  activateRegisterButton(e.currentTarget, data);
});

form.addEventListener("submit", async (e) => {
  const response = await sendDataToServer(e);
  displayMessage(response.status, response.body);
});
