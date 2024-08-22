import React, { useState } from 'react';

import './App.css';
import { ReactComponent as DeleteIcon } from './assets/icons/delete.svg';
import { ReactComponent as EditIcon } from './assets/icons/edit.svg';
import { ReactComponent as SearchIcon } from './assets/icons/search.svg'; 

import Modal from './pages/Modal/Modal'; 


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewTaskClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
  const today = new Date().toLocaleDateString('pt-BR', dateOptions);

  // Separar partes da data para estilização
  const [dayName, dayNumber, ...monthYear] = today.split(' ');

    // Capitalizar a primeira letra do dia e do mês
    const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const capitalizedMonthYear = monthYear
      .map((part, index) => {
        // Capitaliza apenas a primeira letra do mês, mantém o "de" em minúsculo
        if (index === 0) {
          return part.charAt(0).toUpperCase() + part.slice(1);
        }
        return part;
      })
      .join(' ');

  const handleTaskClick = (e) => {
    if (e.target.classList.contains('task-checkbox')) return;
    const checkbox = e.target.closest('.task-item').querySelector('.task-checkbox');
    checkbox.checked = !checkbox.checked;
  };

  return (
    <div className="App">
    <div className="central-panel">
    <h1 className="date">
          <span>{capitalizedDayName} </span>
          <span className="day-number">{dayNumber}</span>
          <span> {capitalizedMonthYear}</span>
        </h1>
      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Procurar tarefa" 
        />
        <SearchIcon className="search-icon" />
      </div>

        <div className="tasks">
          <div className="task-item" onClick={handleTaskClick}>
            <input type="checkbox" className="task-checkbox" id="task1" />
            <span className="task-name">Nome da Tarefa</span>
            <button className="task-button">
              <DeleteIcon />
            </button>
            <button className="task-button">
              <EditIcon />
            </button>
          </div>
          <div className="task-item" onClick={handleTaskClick}>
            <input type="checkbox" className="task-checkbox" id="task2" />
            <span className="task-name">Nome da Tarefa</span>
            <button className="task-button">
              <DeleteIcon />
            </button>
            <button className="task-button">
              <EditIcon />
            </button>
          </div>
          {/* Adicione mais tarefas aqui */}
        </div>
      </div>

      {/* <button className="new-task-button">Nova Tarefa</button> */}

      <button className="new-task-button" onClick={handleNewTaskClick}>
        Nova Tarefa
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* Conteúdo do Modal */}
        <p>Formulário para criar nova tarefa aqui.</p>
      </Modal>
    </div>
   
  );
}

export default App;
