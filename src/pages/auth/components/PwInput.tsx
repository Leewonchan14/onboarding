import AuthInputTag from '@/pages/auth/components/AuthInputTag';
import InputErrorMessages from '@/pages/auth/components/InputErrorMessages';
import AuthForm from '@/pages/auth/types';
import extractErrorFromForm from '@/utils/extractErrorFromForm';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export default function PwInput({
  errors,
  register,
}: {
  errors: FieldErrors<AuthForm>;
  register: UseFormRegister<AuthForm>;
}) {
  const pwRegister = register('password', {
    required: '비밀번호를 입력해 주세요.',
    minLength: {
      value: 8,
      message: '비밀번호는 8자 이상 입력해 주세요',
    },
  });

  const messages = extractErrorFromForm(errors, 'password');

  return (
    <AuthInputTag type="password" register={pwRegister}>
      <InputErrorMessages messages={messages} />
    </AuthInputTag>
  );
}
