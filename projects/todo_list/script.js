const inputButton = document.querySelector(".input-button");
const inputText = document.querySelector(".input-text");
const taskList = document.querySelector(".task-list");

function newTask() {
  // alert on empty field
  if (inputText.value == "") {
    alert("Cannot create empty task!");
  } else {
    //add new div "list-div" to taskList
    const listDiv = document.createElement("div");
    listDiv.classList.add("list-div");
    taskList.appendChild(listDiv);

    //add child element "list-checkbox"
    const listCheckbox = document.createElement("input");
    listCheckbox.setAttribute("type", "checkbox");
    listCheckbox.classList.add("list-checkbox");
    listDiv.appendChild(listCheckbox);
    //toggle class "checked" for listDiv on click of checkbox
    listCheckbox.addEventListener("click", function () {
      listDiv.classList.toggle("checked");
    });

    //add child element "list-item" w/ input field value
    const listItem = document.createElement("p");
    listItem.innerHTML = inputText.value;
    listItem.classList.add("list-item");
    listDiv.appendChild(listItem);

    //add child element "delete-button"
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove";
    deleteButton.classList.add("delete-button");
    listDiv.appendChild(deleteButton);
    //remove parent listDiv on click of delete button if checkbox is checked
    deleteButton.addEventListener("click", function () {
      const isChecked = listCheckbox.checked;
      if (isChecked == true) {
        deleteButton.parentNode.remove();
      } else {
        alert("Cannot remove uncompleted task!");
      }
    });

    //empty input field
    inputText.value = "";
  }
}

inputButton.addEventListener("click", function () {
  newTask();
});
// fungerer

inputText.addEventListener("keydown", function () {
  if (Event.key === "Enter") {
    console.log("Enter pressed!");
    inputButton.click();
  }
});
// ingen respons i konsoll, ingen click event
