import React from 'react';
import './App.css';

function App() {
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const today = new Date().toLocaleDateString('pt-BR', dateOptions);

  const handleTaskClick = (e) => {
    if (e.target.classList.contains('task-checkbox')) return;
    const checkbox = e.target.closest('.task-item').querySelector('.task-checkbox');
    checkbox.checked = !checkbox.checked;
  };

  return (
    <div className="App">
      <div className="central-panel">
        <h1 className="date">{today}</h1>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Procurar tarefa" 
        />

        <div className="tasks">
          <div className="task-item" onClick={handleTaskClick}>
            <input type="checkbox" className="task-checkbox" id="task1" />
            <span className="task-name">Nome da Tarefa</span>
            <button className="task-button">Apagar</button>
            <button className="task-button">Editar</button>
          </div>
          <div className="task-item" onClick={handleTaskClick}>
            <input type="checkbox" className="task-checkbox" id="task2" />
            <span className="task-name">Nome da Tarefa</span>
            <button className="task-button">Apagar</button>
            <button className="task-button">Editar</button>
          </div>
          {/* Adicione mais tarefas aqui */}
        </div>
      </div>

      <button className="new-task-button">Nova Tarefa</button>
    </div>
  );
}
export default App;
