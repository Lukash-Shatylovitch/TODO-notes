
const main = document.querySelector("#main");
const submit = document.querySelector("#add");
console.log(submit);


submit.addEventListener("click", () => {
  const main = document.querySelector("#main-container");
  const input = document.querySelector("#new_task_input");

  const container = document.createElement("div");
  container.id = "todo";
  container.className = "new-todo";

  const toDoString = document.createElement("p")

  toDoString.id = "string"

  toDoString.innerText = input.value;


if (!input.value) {
  return;
}

  const deleteButton = document.createElement("button");
  deleteButton.id = "delete";
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    container.remove();
  });

  main.append(container);

  container.append(toDoString);
  container.append(deleteButton);

  input.value = "";
});

