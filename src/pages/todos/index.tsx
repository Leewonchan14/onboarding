import TodoDetail from '@/pages/todos/components/TodoDetail';
import TodoList from '@/pages/todos/components/TodoList';

export default function TodosPage() {
  return (
    <div className="w-full h-full flex gap-8 items-center max-w-[800px] mx-auto">
      <TodoList />
      <TodoDetail />
    </div>
  );
}
