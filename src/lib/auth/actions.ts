'use server';

import prisma from '../prisma';
import {
  AuthState,
  AuthValidator,
  LoginState,
  LoginValidator,
} from '../validators/auth-validator';
import bcrypt from 'bcrypt';
import { createSession, deleteSession } from './session';
import { redirect } from 'next/navigation';

export async function register(prevState: AuthState, formData: FormData) {
  try {
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    };

    const parsedUserData = AuthValidator.safeParse(userData);

    if (parsedUserData.success) {
      const existingUser = await prisma.user.findUnique({
        where: { email: parsedUserData.data.email },
      });

      if (existingUser) {
        return { message: 'Email is already in use.' };
      }

      const salt = bcrypt.genSaltSync(10);

      const pwHash = bcrypt.hashSync(
        parsedUserData.data.password,
        salt
      ) as unknown as string;

      await prisma.user.create({
        data: {
          name: parsedUserData.data.name,
          email: parsedUserData.data.email,
          password: pwHash,
          salt,
        },
      });

      return { message: 'SUCCESS' };
    } else if (!parsedUserData.success) {
      return {
        errors: parsedUserData.error.flatten().fieldErrors,
      };
    }
  } catch (error) {
    console.error('Something went wrong', error);
    return { message: 'Something went wrong.' };
  }
}

export async function login(prevState: LoginState, formData: FormData) {
  try {
    const userData = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const parsedUserData = LoginValidator.safeParse(userData);

    if (parsedUserData.success) {
      const user = await prisma.user.findUnique({
        where: { email: parsedUserData.data.email },
      });

      if (!user) return { message: 'Invalid email or password.' };

      const passwordsMatch = bcrypt.compareSync(
        parsedUserData.data.password,
        user.password
      );

      if (passwordsMatch === false)
        return { message: 'Invalid email or password.' };

      await createSession(user.id);
      console.log('User logged in successfully');
      return { message: 'SUCCESS' };
    } else if (!parsedUserData.success) {
      return {
        errors: parsedUserData.error.flatten().fieldErrors,
      };
    }
  } catch (error) {
    console.error('Something went wrong', error);
    return { message: 'Something went wrong.' };
  }
}

export async function logout() {
  deleteSession();
  redirect('/login');
}
