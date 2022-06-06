const input = document.querySelector(".input");
const toDoBtn = document.querySelector(".toDoBtn");
const list = document.querySelector(".list");

// listening for click on 'Add ToDo' button, runs addToDo function
toDoBtn.addEventListener("click", addToDo);

// listening for ENTER keypress, runs addToDo function
input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  addToDo();
});

// Function which is called upon when the user clicks 'addToDo or presses enter on keyboard.

function addToDo() {
  // if the value of the input is empty(not true) the function returns and the user is given an alert.
  if (!input.value) {
    return alert("Please enter a ToDo");
  }

  // variables are declared which create a p inside an li to hold our text, as well as a delete button.
  const newItem = document.createElement("li");
  const newItemText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  // the li > p text is assigned from what the user entered into the input.
  newItemText.textContent = input.value;

  // now that they have been created, we need to append the newItem(li) to the list(ul) as well as appending the newItemText(p) and deleteBtn(btn) both to the newItem(li)
  list.append(newItem);
  newItem.append(newItemText, deleteBtn);

  // next the delete button is given the 'delete' text and both the newItem(li) and deleteBtn(btn) are assigned classes so they can get styling from our CSS.
  deleteBtn.textContent = "Delete";
  newItem.classList.add("newItem");
  deleteBtn.classList.add("btn", "deleteBtn", "fontPrimary");

  // the input is emptied so the user doesn't need to delete it each time they want to enter a new value, the input is also focused and the value of the input is trimmed to remove any accidental whitespace before & after their input.
  input.value = "";
  input.focus();
  input.value.trim();

  // the final part of the function is to listen for a click on the delete button, which, using .remove will delete the newItem (parent element of the text and delete button) which was created at the same time as the delete button was.
  deleteBtn.addEventListener("click", () => {
    newItem.remove();
  });
}

// delete all button to remove all items from the list using a forEach method.
document.querySelector(".delAllBtn").addEventListener("click", () => {
  console.log(list);
  let itemArray = [...document.querySelectorAll(".newItem")];

  itemArray.forEach((newItem) => newItem.remove());
});

// sort button to sort the list items alphabetically.
// document.querySelector(".sortBtn").addEventListener("click", () => {
//   let itemArray = [...document.querySelectorAll(".newItem")];
//   itemArray.sort();
//   console.log(itemArray);
// });
