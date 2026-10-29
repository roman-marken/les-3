import type { Task } from '../types/Task';

type TaskDetailsProps = {
  task: Task | null;
  onToggleCompleted: (id: number) => void;
};

function TaskDetails({ task, onToggleCompleted }: TaskDetailsProps) {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-xl font-bold">Деталі завдання</h2>
      {task ? (
        <>
          <h3 className="break-words text-lg font-medium">{task.title}</h3>
          <p className="mt-3 whitespace-pre-wrap break-words text-slate-600">
            {task.description || 'Опис не додано.'}
          </p>
          <label className="mt-5 flex cursor-pointer items-center gap-2 text-sm font-medium">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleCompleted(task.id)}
              className="h-4 w-4 accent-blue-600"
            />
            Завдання виконано
          </label>
        </>
      ) : (
        <p className="text-slate-500">Оберіть завдання зі списку, щоб переглянути деталі.</p>
      )}
    </section>
  );
}

export default TaskDetails;
