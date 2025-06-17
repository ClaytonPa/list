import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit} className="flex gap-2">
			<input
				type="text"
				name="description"
				value={description}
				onChange={onInputChange}
				placeholder="¿Qué hay que hacer?"
				className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>

			<button
				type="submit"
				className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
			>
				Agregar
			</button>
		</form>
	);
};
