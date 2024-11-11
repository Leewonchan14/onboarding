import MainButton from '@/components/Button/MainButton';
import { AuthContext } from '@/contexts/AuthContext';
import useThrottleCallback2 from '@/hooks/useThrottleCallback2';
import EmailInput from '@/pages/auth/components/EmailInput';
import PwInput from '@/pages/auth/components/PwInput';
import useAuthForm from '@/pages/auth/hooks/useAuthForm';
import { useContext, useState } from 'react';

export default function AuthPage() {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error('Cannot find AuthContext');
  // const { login: 로그인_상태변경 } = authContext;
  const { isLoginForm, errors, onSubmit, toggleForm, register } =
    useAuthForm();

  const [count, setCount] = useState(0);
  const increase = useThrottleCallback2(
    () => {
      setCount(count + 1);
    },
    1000,
    [count],
  );

  return (
    <form
      onSubmit={onSubmit}
      className="w-80 flex flex-col gap-4 items-center"
    >
      <button type="button" onClick={() => increase()}>
        click
      </button>
      {count}
      <h2 className="text-2xl font-bold">
        {isLoginForm ? '로그인' : '회원가입'}
      </h2>
      {errors.root?.message && (
        <h2 className="text-center text-red-500 whitespace-pre-wrap">
          {errors.root?.message}
        </h2>
      )}
      <EmailInput errors={errors} register={register} />
      <PwInput errors={errors} register={register} />
      <MainButton
        type="submit"
        text={isLoginForm ? '로그인' : '회원가입'}
      />
      <MainButton
        type="button"
        className="bg-white !text-blue-600 w-auto !p-0"
        onClick={toggleForm}
        text={isLoginForm ? '회원가입 하러 가기' : '로그인 하러 가기'}
      />
    </form>
  );
}
