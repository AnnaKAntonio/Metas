// Seleção de elementos
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Função para criar e adicionar tarefas
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obter os valores do formulário
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const taskDeadline = document.getElementById("taskDeadline").value;

  // Criar um elemento da tarefa
  const taskItem = document.createElement("li");

  taskItem.innerHTML = `
    <div class="task-info">
      <h3>${taskName}</h3>
      <p>${taskDescription}</p>
      <p><strong>Prazo:</strong> ${taskDeadline}</p>
    </div>
    <div class="task-actions">
      <button onclick="markAsCompleted(this)">Concluída</button>
      <button onclick="removeTask(this)">Excluir</button>
    </div>
  `;

  // Adicionar a tarefa à lista
  taskList.appendChild(taskItem);

  // Limpar o formulário
  taskForm.reset();
});

// Função para marcar como concluída
function markAsCompleted(button) {
  const taskItem = button.closest("li");
  const taskInfo = taskItem.querySelector(".task-info");
  taskInfo.classList.toggle("completed");
}

// Função para remover tarefas
function removeTask(button) {
  const taskItem = button.closest("li");
  taskItem.remove();
}
