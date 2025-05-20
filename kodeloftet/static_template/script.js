function clickButton() {
  const title = document.getElementById("title");
  const newTitle = "Welcome!";
  title.textContent = newTitle;
}

const button = document.getElementById("button-change");
button.addEventListener("click", clickButton);

// anonymous function
const buttonAdd = document.getElementById("button-add");
buttonAdd.addEventListener("click", function () {
  const subtitle = document.getElementById("subtitle");
  const subtitleNew = "Wow!";
  subtitle.textContent = subtitleNew;
});
