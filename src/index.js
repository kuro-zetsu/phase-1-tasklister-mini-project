document.addEventListener("DOMContentLoaded", () => {
  // get relevant target elements
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (taskDescription.value !== "") {
      // Create a new task item
      let newTask = document.createElement("li");
      newTask.textContent = taskDescription.value;

      // Append the new task to the task list
      taskList.appendChild(newTask);

      // Clear the input field
      taskDescription.value = "";
    }
  });
});
