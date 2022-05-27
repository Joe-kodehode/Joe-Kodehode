// ToDo List
// Global variables
const toDoInput = document.querySelector(".toDoInput");
const toDoBtn = document.querySelector(".toDoBtn");
const toDoList = document.querySelector(".toDoList");

// listening for click on 'Add ToDo' button, runs addToDo function
toDoBtn.addEventListener("click", addToDo);

// listening for ENTER keypress, runs addToDo function
toDoInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  addToDo();
});

// Function which is called upon when the user clicks 'addToDo or presses enter on keyboard.
function addToDo() {
  // if the value of the input is empty(not true) the function returns and the user is given an alert.
  if (!toDoInput.value) {
    return alert("Please enter a ToDo");
  }

  // variables are declared which create a p inside an li to hold our text, as well as a delete button.
  const newItem = document.createElement("li");
  const newItemText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  // the li > p text is assigned from what the user entered into the input.
  newItemText.textContent = toDoInput.value;

  // now that they have been created, we need to append the newItem(li) to the list(ul) as well as appending the newItemText(p) and deleteBtn(btn) both to the newItem(li)
  toDoList.append(newItem);
  newItem.append(newItemText, deleteBtn);

  // next the delete button is given the 'delete' text and both the newItem(li) and deleteBtn(btn) are assigned classes so they can get styling from our CSS.
  deleteBtn.textContent = "Delete";
  newItem.classList.add("newItem");
  newItemText.classList.add("listItem");
  deleteBtn.classList.add("btn", "deleteBtn", "fontPrimary");

  // the input is emptied so the user doesn't need to delete it each time they want to enter a new value, the input is also focused and the value of the input is trimmed to remove any accidental whitespace before & after their input.
  toDoInput.value = "";
  toDoInput.focus();
  toDoInput.value.trim();

  // Click event listener on the list text, adds or removes the 'strikeout' class depending on if it already had it or not. (allows the user the ability to cross off items without deleting them)
  newItemText.addEventListener("click", () => {
    newItemText.classList.contains("strikeout")
      ? newItemText.classList.remove("strikeout")
      : newItemText.classList.add("strikeout");
  });

  // the final part of the function is to listen for a click on the delete button, which, using .remove will delete the newItem (parent element of the text and delete button) which was created at the same time as the delete button was.
  deleteBtn.addEventListener("click", () => {
    newItem.remove();
  });
}

// delete all button to remove all items from the list using a forEach method.
document.querySelector(".delAllToDoBtn").addEventListener("click", () => {
  let itemArray = [...document.querySelectorAll(".newItem")];

  itemArray.forEach((newItem) => newItem.remove());
});

// ToDo list sort button event listener, calls the sortToDo function
document.querySelector(".sortToDo").addEventListener("click", sortToDo);

// Function to sort the list alphabetically. targets the list items and uses spread operator to place them in an array, the new array is sorted using .sort with parameters of the text's content. ToDoList is then cleared and replaced with the sorted listItems using .append.
function sortToDo() {
  let toDoListItems = [...toDoList.children];

  toDoListItems.sort((a, b) => {
    return a.children[0].textContent.localeCompare(b.children[0].textContent);
  });

  toDoList.textContent = "";
  toDoListItems.forEach((e) => toDoList.append(e));
}

// ---------------- Shopping List ---------------------------

// Shopping List (for the most part this is identical to the ToDo list so I won't re-document, however it allows the user to assign a quantity)
const shoppingInput = document.querySelector(".shoppingInput");
const shoppingBtn = document.querySelector(".shoppingBtn");
const shoppingList = document.querySelector(".shoppingList");
const quantity = document.querySelector(".quantity");

shoppingBtn.addEventListener("click", addShopping);
shoppingInput.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  addShopping();
});

function addShopping() {
  if (!shoppingInput.value) {
    return alert("Please enter a shopping item");
  }

  const newItem = document.createElement("li");
  const newItemText = document.createElement("p");
  const deleteBtn = document.createElement("button");

  // This is the only difference between todo and shopping lists, the textContent of the paragraph also inclued the ammount entered into the ammount input as well as the text input.
  newItemText.textContent = `${quantity.value} x ${shoppingInput.value}`;

  shoppingList.append(newItem);
  newItem.append(newItemText, deleteBtn);

  deleteBtn.textContent = "Delete";
  newItem.classList.add("newItem");
  newItemText.classList.add("listItem");
  deleteBtn.classList.add("btn", "deleteBtn", "fontPrimary");

  shoppingInput.value = "";
  quantity.value = "1";
  shoppingInput.focus();
  shoppingInput.value.trim();

  newItemText.addEventListener("click", () => {
    newItemText.classList.contains("strikeout")
      ? newItemText.classList.remove("strikeout")
      : newItemText.classList.add("strikeout");
  });

  deleteBtn.addEventListener("click", () => {
    newItem.remove();
  });
}

document.querySelector(".delAllShoppingBtn").addEventListener("click", () => {
  console.log(toDoList);
  let itemArray = [...document.querySelectorAll(".newItem")];

  itemArray.forEach((newItem) => newItem.remove());
});

// Shopping list sort
document.querySelector(".sortShopping").addEventListener("click", sortShopping);

function sortShopping() {
  let shoppingListItems = [...shoppingList.children];

  shoppingListItems.sort((a, b) => {
    return a.children[0].textContent.localeCompare(b.children[0].textContent);
  });

  shoppingList.textContent = "";
  shoppingListItems.forEach((e) => shoppingList.append(e));
}
