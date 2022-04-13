"use strict";
const submitBtn = document.querySelector(".submit-btn");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");
const taskUl = document.querySelector(".task-ul");
const tasksList = [];
submitBtn.title = "Add new task";
function addTask(text) {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task");
  const textNode = document.createTextNode(text);
  const li = document.createElement("li");
  taskContainer.append(li);
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-trash");
  deleteIcon.title = "Delete";
  taskContainer.append(deleteIcon);
  li.append(textNode);
  taskUl.append(taskContainer);
  const checkbox = document.createElement("input");
  checkbox.title = "Mark as done";
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  taskContainer.append(checkbox);
  deleteIcon.style.marginLeft = "auto";
  deleteIcon.style.marginRight = "10px";
}
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  tasksList.push(taskInput.value);
  if (taskInput.value !== "") {
    addTask(taskInput.value);
    taskInput.value = "";
  }
  checked();
  deleteTask();
});
function checked() {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function (e) {
      if (this.checked) {
        e.target.closest("div").querySelector("li").classList.add("checked");
      } else {
        e.target.closest("div").querySelector("li").classList.remove("checked");
      }
    });
  });
}
function deleteTask() {
  const deleteIcons = document.querySelectorAll(".fa-trash");
  deleteIcons.forEach((deleteIcon) => {
    deleteIcon.addEventListener("click", function (e) {
      this.closest("div").remove();
    });
  });
}
