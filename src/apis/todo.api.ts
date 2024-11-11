import api from '@/apis/common.api';

export interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const findAll = () => {
  return api.request<{
    data: Todo[];
  }>({
    url: '/todos',
  });
};

const create = (title: string, content: string) => {
  return api.request<{
    data: Todo;
  }>({
    method: 'POST',
    url: '/todos',
    data: {
      title,
      content,
    },
  });
};

const update = (id: string, title: string, content: string) => {
  return api.request<{
    data: Todo;
  }>({
    method: 'PUT',
    url: `/todos/${id}`,
    data: {
      title,
      content,
    },
  });
};

const remove = (id: string) => {
  return api.request<{
    data: null;
  }>({
    method: 'DELETE',
    url: `/todos/${id}`,
  });
};

export default { findAll, create, update, remove };
