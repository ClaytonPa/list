import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

/**Marco Antonio Padilla */

export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li
			className={`flex items-center justify-between p-4 rounded-lg border ${
				todo.done ? 'bg-green-100' : 'bg-gray-50'
			}`}
		>
			<div className="flex items-center gap-3 flex-1">
				{/* Checkbox personalizado */}
				<span
					onClick={() => handleCompleteTodo(todo.id)}
					className={`w-5 h-5 border-2 rounded-full cursor-pointer transition ${
						todo.done
							? 'bg-green-500 border-green-500'
							: 'border-gray-400 hover:border-blue-500'
					}`}
					title="Marcar como completado"
				></span>

				{/* Campo editable o texto */}
				<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			</div>

			{/* Botón eliminar */}
			<button
				onClick={() => handleDeleteTodo(todo.id)}
				className="ml-4 text-red-500 hover:text-red-700 transition"
				title="Eliminar tarea"
			>
				<FaTrash />
			</button>
		</li>
	);
};
