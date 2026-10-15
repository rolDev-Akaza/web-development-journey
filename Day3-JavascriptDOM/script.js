const title = document.querySelector(".title");
const des = document.querySelector(".des");
const btn = document.querySelector(".btn");
let isSuccessful = false;

title.textContent = "DOM Manipulation";
des.textContent = "Take risk muna bago!";

btn.addEventListener("click", function () {
  if (isSuccessful === false) {
    des.textContent = "Maging Successful";
    des.classList.add("font-bold");
    isSuccessful = true;
  } else {
    des.textContent = "Take risk muna bago!";
    des.classList.remove("font-bold");
    isSuccessful = false;
  }
});
