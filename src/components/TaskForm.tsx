import { useRef, useState } from 'react';
import type { FormEvent } from 'react';

type TaskFormProps = {
  onAddTask: (title: string, description: string) => void;
};

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const titleInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) {
      setError('Введіть назву завдання.');
      titleInputRef.current?.focus();
      return;
    }

    onAddTask(title.trim(), description.trim());
    setTitle('');
    setDescription('');
    setError('');
    titleInputRef.current?.focus();
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-xl font-bold">Нове завдання</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium">
          Назва *
          <input
            ref={titleInputRef}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'title-error' : undefined}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-blue-500"
          />
        </label>
        <label className="block text-sm font-medium">
          Опис
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
            className="mt-1 w-full resize-y rounded-lg border border-slate-300 px-3 py-2 focus:outline-blue-500"
          />
        </label>
        {error && <p id="title-error" role="alert" className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
          Додати завдання
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
