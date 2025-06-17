import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

export const Instructions = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6 relative">

                <h1 className="text-3xl font-bold text-blue-600 mb-4 mt-4">Manual de Uso</h1>

                <ol className="list-decimal space-y-3 pl-5 text-gray-700">
                    <li>En la pantalla principal, verás el contador de tareas totales y pendientes.</li>
                    <li>Usa el campo de texto para escribir una nueva tarea y haz clic en <strong>Agregar</strong>.</li>
                    <li>
                        Cada tarea se mostrará en una lista con tres botones:
                        <ul className="list-disc pl-6 mt-1">
                            <li>⚪ para marcar como completada.</li>
                            <li>📝 para editar la tarea.</li>
                            <li>🗑️ para eliminarla.</li>
                        </ul>
                    </li>
                    <li>Una vez completada, la tarea se mostrará con una línea atravesada.</li>
                    <li>Puedes volver a editar una tarea aunque esté completada.</li>
                </ol>

                <div className="mt-6 text-right">
                    <Link to="/" className="text-blue-500 hover:underline">
                        ← Volver a la lista de tareas
                    </Link>
                </div>

                <img
                    src="/PolimataAI.png"
                    alt="Logo PolimataAI"
                    className="max-w-[9rem] h-auto py-4"
                />

            </div>
        </div>
    );
};
