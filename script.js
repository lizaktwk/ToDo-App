const date = new Date();
date.getDay();
date.getDate();
date.getMonth();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentDay = days[date.getDay()];
const currentMonth = months[date.getMonth()];

let tasks = [];
let completedTasks = 0;
let progressBarFill = document.querySelector("#progress-bar-fill");
let taskProgress = document.querySelector("#task-progress");

let myTasks = document.querySelector(".my-tasks");
let taskContainer = document.querySelector(".task-container");

let addTaskBtn = document.getElementById("addTaskButton");
addTaskBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addTask();
});

document.getElementById("week-day").textContent = currentDay;
document.getElementById("date").textContent = date.getDate();
document.getElementById("month").textContent = currentMonth;

function updateTaskProgress() {
  const totalTasks = tasks.length;
  const completed = completedTasks;
  const progressPercent = totalTasks === 0 ? 0 : (completed / totalTasks) * 100;
  progressBarFill.style.width = `${progressPercent}%`;
  taskProgress.textContent = `${completed}/${totalTasks} Tasks completed`;
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    const taskItem = document.createElement("div");
    taskItem.className = "task-container";
    taskItem.innerHTML = `
      <label class="custom-checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
      <span class="task-text">${taskText}</span>
      <button class="delete-task">X</button>
    `;
    myTasks.appendChild(taskItem);
    taskInput.value = "";
    updateTaskProgress();
  }
}
