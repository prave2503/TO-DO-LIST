function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  delBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}
