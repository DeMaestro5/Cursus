import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'white'
  | 'accent'
  | 'blue'
  | 'gray';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 border border-transparent',
  secondary:
    'bg-neon text-white hover:bg-secondary/90 border border-transparent',
  outline:
    'bg-transparent text-primary border border-primary hover:bg-primary/10',
  white: 'bg-white text-primary hover:bg-primary/10 border border-primary',
  accent: 'bg-accent text-white hover:bg-accent/90 border border-transparent',
  blue: 'bg-blue text-white hover:bg-blue/90 border-transparent',
  gray: '',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full font-medium cursor-pointer transition-all duration-200 disabled:cursor-not-allowed focus:outline-none focus:ring-primary focus:ring-offset-2 disabled:opacity-50';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className='animate-spin h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8v8z'
            />
          </svg>
        )}

        {!isLoading && leftIcon && <span className='shrink-0'>{leftIcon}</span>}
        {children}
        {rightIcon && <span className='shrink-0'>{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
