import AuthForm from '@/pages/auth/types';
import mergeRef from '@/utils/mergeRef';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

const AuthInputTag = React.forwardRef(function AuthInputTag(
  {
    register: { ref: registerRef, ...register },
    children,
    ...props
  }: React.InputHTMLAttributes<HTMLInputElement> &
    React.HTMLAttributes<HTMLInputElement> & {
      register: UseFormRegisterReturn<keyof AuthForm>;
    },
  ref,
) {
  return (
    <label className="w-full" htmlFor={register.name}>
      {register.name === 'email' ? '이메일' : '비밀번호'}
      <img />
      <input
        id={register.name}
        className={`w-full text-xl p-2 outline-none border-2 rounded-lg ${props.className}`}
        {...props}
        {...register}
        ref={mergeRef(ref, registerRef)}
      />
      {children}
    </label>
  );
});
export default AuthInputTag;
