import userApi from '@/apis/user.api';
import AuthForm from '@/pages/auth/types';
import { MutationOptions, useMutation } from '@tanstack/react-query';

export default function useSignUpMutate() {
  return useMutation(signUpMutationOption());
}

export function signUpMutationOption(): MutationOptions<
  string,
  unknown,
  AuthForm
> {
  return {
    mutationKey: ['signup'],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { data } = await userApi.signUp(email, password);
      return data.token;
    },
  };
}
