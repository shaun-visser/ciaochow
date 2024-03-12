import { ButtonProps } from '@/@interfaces/interfaces-misc';
import { ButtonState, ButtonVariant } from '@/@interfaces/typesAndEnums';
import React from 'react';

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: 'bg-white text-green',
    hover: '',
    focus: '',
    disabled: '',
  },
  secondary: {
    default: 'bg-green text-white shadow-btn',
    hover: '',
    focus: '',
    disabled: '',
  },
};

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  disabled = false,
  type,
  ...buttonProps
}: ButtonProps) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  return (
    <button
      {...buttonProps}
      className={`py-[14px] w-full font-semibold rounded-md flex items-center justify-center whitespace-nowrap transition duration-150 ease-in-out text-base ${className}
      ${!disabled ? ButtonVariantClassName.default : ''}
      ${!disabled ? ButtonVariantClassName.hover : ''}
      ${!disabled ? ButtonVariantClassName.focus : ''}
      ${disabled ? ButtonVariantClassName.disabled : ''}
      ${disabled ? 'pointer-events-none' : ''}
      `}
      type={type}
    >
      {children}
    </button>
  );
};
