const getFormData = (form) => {
  const formData = new FormData(form);
  const inputDataObj = [...formData].reduce((acc, curr) => {
    return { ...acc, [curr[0]]: curr[1] };
  }, {});
  return inputDataObj;
};

const activateRegisterButton = (form, formData) => {
  const submitBtn = form.querySelector("button[type=submit]");
  const inputDataArray = Object.entries(formData);
  const allInputsHaveValue = inputDataArray.every((item) => !!item[1]);
  if (allInputsHaveValue) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const displayMessage = (status, message) => {
  const messageHeading = document.querySelector(".message");
  messageHeading.textContent = message;
  if (status === 200) {
    messageHeading.classList.remove("d-none");
    messageHeading.classList.add("text-success");
    messageHeading.classList.remove("text-danger");
  } else if (status === 406) {
    messageHeading.classList.remove("d-none");
    messageHeading.classList.add("text-danger");
    messageHeading.classList.remove("text-success");
  }
};

export { getFormData, activateRegisterButton, displayMessage };
