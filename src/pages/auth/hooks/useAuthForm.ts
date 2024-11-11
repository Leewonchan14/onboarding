import { AuthContext } from '@/contexts/AuthContext';
import useLoginMutation from '@/pages/auth/mutations/useLoginMutation';
import useSignUpMutate from '@/pages/auth/mutations/useSignUpMutate';
import AuthForm from '@/pages/auth/types';
import { AxiosError } from 'axios';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { redirect } from 'react-router-dom';

export default function useAuthForm() {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('Cannot find AuthContext');
  const { login: globalLogin } = authContext;
  const [isLoginForm, setIsLoginForm] = useState(false);
  const { mutateAsync: 로그인 } = useLoginMutation();
  const { mutateAsync: 회원가입 } = useSignUpMutate();
  const {
    reset,
    setError,
    clearErrors,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<AuthForm>({
    mode: 'onTouched',
    criteriaMode: 'all',
  });

  const onSubmit = handleSubmit(async ({ email, password }: AuthForm) => {
    clearErrors();
    let errorMessage =
      '알 수 없는 오류가 발생했습니다. \n 잠시후 다시 시도해주세요';

    if (isLoginForm) {
      try {
        const token = await 로그인({ email, password });
        globalLogin(token);
        redirect('/');
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.details ?? errorMessage;
        }
      }
    } else {
      try {
        await 회원가입({ email, password });
        reset();
        alert('회원가입이 완료되었습니다. 로그인 해주세요.');
        return;
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.details ?? errorMessage;
        }
      }
    }

    setError('root', {
      type: 'manual',
      message: errorMessage,
    });
  });

  const toggleForm = () => {
    setIsLoginForm((prev) => !prev);
    reset();
  };

  return {
    isLoginForm,
    onSubmit,
    toggleForm,
    errors,
    rootMessage: errors.root?.message,
    register,
  };
}
