import { useState } from 'react';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-6 relative">


        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Lista de Tareas</h1>

        <div className="text-right mb-4">
          <Link to="/instrucciones" className="text-sm text-blue-500 hover:underline">
            📘 Ver instrucciones
          </Link>
        </div>

        <div className="flex justify-between text-gray-600 mb-4">
          <h3>
            Total: <span className="font-semibold text-black">{todosCount}</span>
          </h3>
          <h3>
            Pendientes: <span className="font-semibold text-black">{pendingTodosCount}</span>
          </h3>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Agregar Tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>

        <TodoList
          todos={todos}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
        />

        <img
          src="/PolimataAI.png"
          alt="Logo PolimataAI"
          className="max-w-[9rem] h-auto py-4"
        />
      </div>


    </div>
  );
}

export default App;
