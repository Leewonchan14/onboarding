import AuthInputTag from '@/pages/auth/components/AuthInputTag';
import InputErrorMessages from '@/pages/auth/components/InputErrorMessages';
import AuthForm from '@/pages/auth/types';
import extractErrorFromForm from '@/utils/extractErrorFromForm';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export default function EmailInput({
  errors,
  register,
}: {
  errors: FieldErrors<AuthForm>;
  register: UseFormRegister<AuthForm>;
}) {
  const emailRegister = register('email', {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: '이메일 형식이 올바르지 않습니다.',
    },
  });

  const messages = extractErrorFromForm(errors, 'email');

  return (
    <AuthInputTag register={emailRegister}>
      <InputErrorMessages messages={messages} />
    </AuthInputTag>
  );
}
