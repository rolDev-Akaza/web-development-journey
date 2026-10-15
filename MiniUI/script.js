const btn = document.getElementById("btn");
const Task = document.getElementById("Task");
isSuccessful = false;

btn.addEventListener("click", function () {
  if (isSuccessful === false) {
    Task.classList.add("font-bold");
    isSuccessful = true;
  } else {
    Task.classList.remove("font-bold");
    isSuccessful = false;
  }
});
