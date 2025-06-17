import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

/**Marco Antonio Padilla */

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = (e) => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

		handleUpdateTodo(id, description);
		setDisabled(!disabled);
		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate} className="flex items-center gap-2 w-full">
			<input
				type="text"
				name="updateDescription"
				value={updateDescription}
				onChange={onInputChange}
				readOnly={disabled}
				ref={focusInputRef}
				placeholder="¿Qué hay que hacer?"
				className={`
					flex-1 px-3 py-1 rounded border text-sm
					${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
					${todo.done ? 'line-through text-gray-400' : 'text-gray-800'}
					focus:outline-none focus:ring-2 focus:ring-blue-400
				`}
			/>

			<button
				type="submit"
				className="text-yellow-500 hover:text-yellow-600 transition"
				title="Editar tarea"
			>
				<FaEdit />
			</button>
		</form>
	);
};
