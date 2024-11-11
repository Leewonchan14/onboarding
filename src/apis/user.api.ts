import api from '@/apis/common.api';

const login = (email: string, password: string) => {
  return api.request<{
    message: string;
    token: string;
  }>({
    method: 'POST',
    url: '/users/login',
    data: {
      email,
      password,
    },
  });
};

const signUp = (email: string, password: string) => {
  return api.request<{
    message: string;
    token: string;
  }>({
    method: 'POST',
    url: '/users/create',
    data: {
      email,
      password,
    },
  });
};

export default { login, signUp };
