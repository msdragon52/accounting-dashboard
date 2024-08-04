'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/lib/auth/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

function Submit() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant='outline'
      className='text-md uppercase'
      type='submit'
      disabled={pending}
    >
      {pending ? <Loader2 className='h-8 w-8 animate-spin' /> : 'Login'}
    </Button>
  );
}

export default function Page() {
  const [state, formAction] = useFormState(login, undefined);
  const router = useRouter();

  if (state?.message === 'SUCCESS') {
    router.refresh();
    router.push('/');
  }

  return (
    <div className='bg-gradient-to-b from-blue-500 to-green-300 h-screen flex flex-col justify-center items-center p-32'>
      <h1 className='text-3xl'>Login</h1>
      <Link href='/sign-up'>
        <Button
          variant='link'
          className='my-2 text-xl'
        >
          Don&apos;t have an account? Create one &rarr;
        </Button>
      </Link>
      {state?.message !== 'SUCCESS' ? (
        <p className='text-sm text-red-500'>{state?.message}</p>
      ) : (
        ''
      )}
      <form action={formAction}>
        <div className='mt-2 grid gap-2'>
          <div className='grid gap-1 py-2'>
            <Label
              className='text-lg'
              htmlFor='email'
            >
              Email:
            </Label>
            {state?.errors?.email && (
              <p className='text-sm text-red-500'>{state.errors.email}</p>
            )}
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='you@example.com'
              className='p-4'
              required
            />
          </div>
          <div className='grid gap-1 py-2'>
            <Label
              className='text-lg'
              htmlFor='password'
            >
              Password:
            </Label>
            {state?.errors?.password && (
              <p className='text-sm text-red-500'>{state.errors.password}</p>
            )}
            <Input
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              className='p-4'
              required
            />
          </div>
          <Link href='#'>
            <Button
              variant='link'
              className='mx-6 -my-1 text-md'
            >
              Forgot password?
            </Button>
          </Link>
          <Submit />
        </div>
      </form>
    </div>
  );
}
