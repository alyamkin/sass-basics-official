const statusBar = document.querySelector("#status-bar");
const statusBarControl = document.querySelector(".status-bar-control");

statusBarControl.addEventListener("click", function (e) {
  const button = e.target.closest("button");
  if (!button) return;

  const className = button.dataset.btnStatus;

  const currentClass = statusBar.className;

  if (currentClass) {
    statusBar.classList.replace(currentClass, className);
  }
});
