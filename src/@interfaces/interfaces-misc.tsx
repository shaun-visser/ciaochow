import { ButtonHTMLAttributes } from 'react';
import { ButtonVariant } from './typesAndEnums';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | null;
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export interface FooterButtonProp extends ButtonProps {
  foodItems: any;
}
