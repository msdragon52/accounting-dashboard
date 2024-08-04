import { z } from 'zod';

export const AuthValidator = z
  .object({
    name: z.string({ required_error: 'Name is required.' }),
    email: z.string().email('Invalid email'),
    password: z.string().min(8, {
      message: 'Password must be at least 8 characters.',
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match. Please confirm password.',
        path: ['confirmPassword'],
      });
    }
  });

export type AuthState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;

export const LoginValidator = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email')
    .min(1, 'Email is Required'),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
});

export type LoginState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
