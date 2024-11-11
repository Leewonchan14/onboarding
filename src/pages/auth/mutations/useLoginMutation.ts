import userApi from '@/apis/user.api';
import AuthForm from '@/pages/auth/types';
import { MutationOptions, useMutation } from '@tanstack/react-query';

export default function useLoginMutation() {
  return useMutation(loginMutationOption());
}

export function loginMutationOption(): MutationOptions<
  string,
  unknown,
  AuthForm
> {
  return {
    mutationKey: ['login'],
    mutationFn: async ({ email, password }) => {
      const { data } = await userApi.login(email, password);
      return data.token;
    },
  };
}
