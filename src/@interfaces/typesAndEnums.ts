export type RegistrationForm = {
  username: string;
  email: string;
  password: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';
