"use strict";
const form = document.forms.tasksForm;
const tasksContainer = document.querySelector(".tasks-container");
const myModal = new bootstrap.Modal("#myModal");
const deleteModal = new bootstrap.Modal("#deleteModal");
let tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
const pushTasksArrayToLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
class task {
  id = Math.random();
  constructor({
    taskName,
    taskDescription,
    taskStartDate,
    taskEndDate,
    isCompleted,
  }) {
    this.isCompleted = isCompleted;
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.taskStartDate = new Date(taskStartDate);
    this.taskEndDate = new Date(taskEndDate);
    this.createTaskInDom();
    this.taskContainerElem.addEventListener(
      "click",
      this.modalHandler.bind(this)
    );
    this.statusInputElem.addEventListener(
      "click",
      this.inputStatusHandler.bind(this)
    );
    this.statusInputLabel.addEventListener(
      "click",
      this.inputStatusHandler.bind(this)
    );
    this.onLoadStatus();
  }

  createTaskInDom() {
    const taskContainer = document.createElement("div");
    taskContainer.className = "text-center mb-4 task-container p-3";
    const taskNameH4 = document.createElement("h4");
    taskNameH4.className = "display-6 task-name mb-3";
    taskNameH4.textContent = this.taskName;
    const taskStartingDateP = document.createElement("p");
    taskStartingDateP.className = "lead task-start-date mb-3";
    taskStartingDateP.textContent = `Starting Date: ${this.taskStartDate.toDateString()}`;
    const taskDaysLeftP = document.createElement("p");
    taskDaysLeftP.className = "task-days-left lead fw-bold";
    taskDaysLeftP.textContent = `${this.calcRemainingDays(
      this.taskEndDate
    )} Days remaining (Until ${this.taskEndDate.toDateString()})`;
    taskContainer.insertAdjacentElement("beforeend", taskNameH4);
    taskContainer.insertAdjacentElement("beforeend", taskStartingDateP);
    taskContainer.insertAdjacentElement("beforeend", taskDaysLeftP);
    const statusInputDiv = document.createElement("div");
    statusInputDiv.className = "form-check justify-content-center d-flex gap-2";
    const statusInput = document.createElement("input");
    statusInput.className = "form-check-input task-status-input";
    statusInput.type = "checkbox";
    statusInput.id = "defaultCheck1";
    const statusInputLabel = document.createElement("label");
    statusInputLabel.className = "form-check-label text-danger fw-bold";
    statusInputLabel.textContent = "Not completed!";
    statusInputDiv.insertAdjacentElement("beforeend", statusInput);
    statusInputDiv.insertAdjacentElement("beforeend", statusInputLabel);
    taskContainer.insertAdjacentElement("beforeend", statusInputDiv);
    tasksContainer.insertAdjacentElement("beforeend", taskContainer);
    this.taskContainerElem = taskContainer;
    this.statusInputElem = statusInput;
    this.statusInputLabel = statusInputLabel;
  }

  calcRemainingDays(futureDate) {
    return Math.ceil(
      (new Date(futureDate) - new Date()) / 1000 / (60 * 60 * 24)
    );
  }

  modalHandler() {
    const modalTitle = document.querySelector(".modal-title");
    const modalBody = document.querySelector(".modal-body");
    const deleteTaskBtn = document.querySelector(".delete-task-btn");
    modalBody.textContent = this.taskDescription;
    modalTitle.textContent = this.taskName;
    deleteTaskBtn.addEventListener("click", this.deleteTask.bind(this));
    myModal.show();
  }

  deleteTask() {
    deleteModal.show();
    myModal.hide();
    const deleteConfiramtionBtn = document.querySelector(".delete-confirm-btn");
    const deleteConfiramtionBtnNo = document.querySelector(
      ".delete-confirm-btn-no"
    );
    deleteConfiramtionBtn.addEventListener("click", () => {
      this.taskContainerElem.remove();
      myModal.hide();
      tasks.splice(
        tasks.findIndex((task) => task.id === this.id),
        1
      );
      pushTasksArrayToLocalStorage();
      deleteModal.hide();
    });
    deleteConfiramtionBtnNo.addEventListener("click", () => {
      deleteModal.hide();
      myModal.show();
    });
  }

  inputStatusHandler(e) {
    e.stopPropagation();
    if (e.target === this.statusInputLabel) {
      this.statusInputElem.checked = !this.statusInputElem.checked;
    }
    this.isCompleted = this.statusInputElem.checked;
    if (this.isCompleted) {
      this.statusInputLabel.textContent = "Completed!";
      this.statusInputLabel.classList.remove("text-danger");
      this.statusInputLabel.classList.add("text-success");
    } else {
      this.statusInputLabel.textContent = "Not completed!";
      this.statusInputLabel.classList.add("text-danger");
      this.statusInputLabel.classList.remove("text-success");
    }
    tasks[tasks.findIndex((task) => task.id === this.id)] = this;
    pushTasksArrayToLocalStorage();
  }

  onLoadStatus() {
    if (this.isCompleted) {
      this.statusInputElem.checked = true;
      this.statusInputLabel.textContent = "Completed!";
      this.statusInputLabel.classList.remove("text-danger");
      this.statusInputLabel.classList.add("text-success");
    } else {
      this.statusInputElem.checked = false;
      this.statusInputLabel.textContent = "Not completed!";
      this.statusInputLabel.classList.add("text-danger");
      this.statusInputLabel.classList.remove("text-success");
    }
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const taskObject = [...formData].reduce((acc, curr) => {
    return { ...acc, [curr[0]]: curr[1] };
  }, {});
  const taskObj = new task({ ...taskObject, isCompleted: false });
  [...form].forEach((item) => (item.value = ""));
  tasks.push(taskObj);
  pushTasksArrayToLocalStorage();
});

const loadTasksFromLocalStorage = () => {
  const tasksCopy = [...tasks];
  tasks = new Array();
  tasksCopy.forEach((item) => {
    tasks.push(new task(item));
  });
};
loadTasksFromLocalStorage();
