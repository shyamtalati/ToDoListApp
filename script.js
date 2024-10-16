document.addEventListener("DOMContentLoaded", function() {
    const addTaskButton = document.getElementById("addTaskButton");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            taskList.removeChild(li);
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Mark as completed on click
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
    }
});