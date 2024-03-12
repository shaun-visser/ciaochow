'use client';
import { RegistrationForm as RegistrationType } from '@/@interfaces/typesAndEnums';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/button/Button';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { registerAction } from '@/app/actions';

const RegistrationForm = () => {
  const [serverResponse, setServerResponse] = useState<{
    message: string | null;
    success: boolean;
  }>({ message: null, success: false });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<RegistrationType>();
  const action: () => void = handleSubmit(async (formData) => {
    const response = await registerAction(formData);
    setServerResponse(response);
  });

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  useEffect(() => {
    if (serverResponse.success) redirect('/login');
  }, [serverResponse.success]);

  return (
    <form className="flex flex-col gap-y-2.5" action={action}>
      <div className="gap flex w-full flex-col gap-y-1.5">
        <label
          className="text-s text-black mr-auto inline-block cursor-pointer font-medium"
          htmlFor="username"
        >
          username
        </label>
        <input
          type="text"
          {...register('username', {
            required: 'Username is required',
            maxLength: {
              value: 20,
              message: 'Username cannot be longer than 20 characters',
            },
            pattern: {
              value: /^[^\s]+$/,
              message: 'Username cannot contain spaces',
            },
          })}
          autoComplete="on"
          placeholder="muncher"
          id="username"
          className={`placeholder:text-xs text-xs placeholder:text-gray w-full py-4 px-2 bg-gray-400 rounded-[10px] ${
            errors['username'] ? 'outline-1 outline-rose-500' : ''
          }`}
        />
        {errors.username && (
          <p role="alert" className="text-xs text-rose-500">
            {errors.username.message}
          </p>
        )}
      </div>
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
      {serverResponse.message && (
        <p className="text-rose-500">{serverResponse.message}</p>
      )}
      <Button
        className="mt-2"
        variant="secondary"
        type="submit"
        disabled={isSubmitting}
      >
        Register
      </Button>
      <p className="text-green text-xs text-center mt-[18px]">
        Have an account?{' '}
        <Link href="/login">
          <strong>Login</strong>
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
