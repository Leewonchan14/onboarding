import AuthLayout from '@/layouts/AuthLayout';
import MainLayout from '@/layouts/MainLayout';
import AuthPage from '@/pages/auth';
import TodosPage from '@/pages/todos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Private from '@/providers/Private';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<AuthPage />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Private element={<TodosPage />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
