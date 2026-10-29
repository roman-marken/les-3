import { useRef, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';
import type { Task } from './types/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Виконати домашнє завдання', description: 'Створити невеликий застосунок на React.', completed: false },
    { id: 2, title: 'Повторити useRef', description: 'Розібратися, як встановлювати фокус на поле введення.', completed: false },
    { id: 3, title: 'Прочитати конспект', description: 'Повторити передачу даних через пропси.', completed: true },
  ]);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const nextId = useRef(4);

  function addTask(title: string, description: string) {
    const newTask: Task = {
      id: nextId.current++,
      title,
      description,
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setSelectedTaskId(newTask.id);
  }

  function toggleCompleted(id: number) {
    setTasks((currentTasks) => currentTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    ));
  }

  const selectedTask = tasks.find((task) => task.id === selectedTaskId) ?? null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-slate-800">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Панель керування завданнями</h1>
        <p className="mt-2 text-slate-500">Додавайте справи, переглядайте деталі та відмічайте виконане.</p>
      </header>

      <div className="grid items-start gap-6 md:grid-cols-[300px_1fr]">
        <TaskForm onAddTask={addTask} />
        <div className="min-w-0 space-y-6">
          <TaskList
            tasks={tasks}
            selectedTaskId={selectedTaskId}
            onSelectTask={setSelectedTaskId}
          />
          <TaskDetails task={selectedTask} onToggleCompleted={toggleCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
