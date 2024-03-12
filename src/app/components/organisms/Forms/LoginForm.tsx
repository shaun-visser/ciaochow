'use client';
import { LoginForm as LoginType } from '@/@interfaces/typesAndEnums';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/button/Button';
import Link from 'next/link';
import { loginAction } from '@/app/actions';
import { redirect } from 'next/navigation';

const LoginForm = () => {
  const [serverResponse, setServerResponse] = useState<{
    message: string | null;
    success: boolean;
  }>({ message: null, success: false });
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<LoginType>();
  const action: () => void = handleSubmit(async (formData) => {
    const response = await loginAction(formData);
    if (!response) redirect('/chow');
    setServerResponse(response);
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    serverResponse?.success
      ? redirect('/chow')
      : setErrorMessage(serverResponse.message ?? '');
  }, [serverResponse]);

  return (
    <form className="flex flex-col gap-y-2.5" action={action}>
      <div className="gap flex w-full flex-col gap-y-1.5">
        <label
          className="text-s text-black mr-auto inline-block cursor-pointer font-medium"
          htmlFor="email"
        >
          email
        </label>
        <input
          type="text"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          autoComplete="on"
          placeholder="yourmail@mail.com"
          className={`placeholder:text-xs text-xs placeholder:text-gray w-full py-4 px-2 bg-gray-400 rounded-[10px] ${
            errors['email'] ? 'outline-1 outline-rose-500' : ''
          }`}
        />
        {errors.email && (
          <p role="alert" className="text-xs text-rose-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="gap flex w-full flex-col gap-y-1.5">
        <label
          className="text-s text-black mr-auto inline-block cursor-pointer font-medium"
          htmlFor="password"
        >
          password
        </label>
        <div className="relative">
          <input
            id="password"
            type={passwordShown ? 'text' : 'password'}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              validate: (value) =>
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ||
                'Password must contain at least one letter and one number',
            })}
            autoComplete="on"
            placeholder="your password"
            className={`placeholder:text-xs text-xs placeholder:text-gray w-full py-4 px-2 bg-gray-400 rounded-[10px] ${
              errors['password'] ? 'outline-1 outline-rose-500' : ''
            }`}
          />
          <Image
            className="absolute top-[13px] right-[8px]"
            src="eye.svg"
            width={24}
            height={20}
            onClick={togglePasswordVisiblity}
            alt="show password"
          />
        </div>
        {errors.password && (
          <p role="alert" className="text-xs text-rose-500">
            {errors.password.message}
          </p>
        )}
      </div>
      {errorMessage?.length > 0 && (
        <p role="alert" className="text-xs text-rose-500">
          {errorMessage}
        </p>
      )}
      <Button
        className="mt-2"
        variant="secondary"
        type="submit"
        disabled={isSubmitting}
      >
        Login
      </Button>
      <p className="text-green text-xs text-center mt-[18px]">
        Don{"'"}t have an account?{' '}
        <Link href="/registration">
          <b>Register</b>
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
