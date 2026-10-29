import type { Task } from '../types/Task';

type TaskListProps = {
  tasks: Task[];
  selectedTaskId: number | null;
  onSelectTask: (id: number) => void;
};

function TaskList({ tasks, selectedTaskId, onSelectTask }: TaskListProps) {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-xl font-bold">Мої завдання ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p className="text-slate-500">Завдань поки немає. Додайте перше!</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id}>
              <button
                type="button"
                onClick={() => onSelectTask(task.id)}
                aria-pressed={selectedTaskId === task.id}
                className={`w-full rounded-lg border p-3 text-left ${selectedTaskId === task.id ? 'border-blue-400 bg-blue-50' : 'border-slate-200 hover:bg-slate-50'}`}
              >
                <span className={`block break-words font-medium ${task.completed ? 'text-slate-500 line-through' : ''}`}>
                  {task.title}
                </span>
                <span className={`mt-1 block text-sm ${task.completed ? 'text-green-700' : 'text-slate-500'}`}>
                  {task.completed ? 'Виконано' : 'У процесі'}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskList;
