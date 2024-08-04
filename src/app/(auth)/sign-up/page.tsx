'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { register } from '@/lib/auth/actions';
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
      {pending ? (
        <Loader2 className='h-8 w-8 animate-spin' />
      ) : (
        'Create Account'
      )}
    </Button>
  );
}

export default function Page() {
  const [state, formAction] = useFormState(register, undefined);
  const router = useRouter();

  if (state?.message === 'SUCCESS') {
    router.refresh();
    router.push('/login');
  }

  return (
    <div className='bg-gradient-to-b from-blue-500 to-green-300 h-screen flex flex-col justify-center items-center p-32'>
      <h1 className='text-3xl'>Sign Up</h1>
      <Link href='/login'>
        <Button
          variant='link'
          className='my-2 text-xl'
        >
          Already have an account? Sign in &rarr;
        </Button>
      </Link>
      {state?.message !== 'SUCCESS' ? (
        <p className='text-sm text-red-500'>{state?.message}</p>
      ) : (
        ''
      )}
      <form action={formAction}>
        <div className='mt-2 grid grid-cols-2 gap-2'>
          <div className='gap-4 m-4'>
            <Label
              className='text-lg'
              htmlFor='name'
            >
              Name:
            </Label>
            {state?.errors?.name && (
              <p className='text-sm text-red-500'>{state.errors.name}</p>
            )}
            <Input
              id='name'
              type='name'
              name='name'
              placeholder='John Smith'
              className='p-4'
              required
            />
          </div>
          <div className='gap-4 m-4'>
            <Label
              className='text-lg'
              htmlFor='email'
            >
              Email:
            </Label>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='you@example.com'
              className='p-4'
              required
            />
          </div>
          <div className='gap-4 m-4'>
            <Label
              className='text-lg'
              htmlFor='email'
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
          <div className='gap-4 m-4'>
            <Label
              className='text-lg'
              htmlFor='confirmPassword'
            >
              Confirm Password:
            </Label>
            {state?.errors?.confirmPassword && (
              <p className='text-sm text-red-500'>
                {state.errors.confirmPassword}
              </p>
            )}
            <Input
              id='confirmPassword'
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              className='p-4'
              required
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center m-8'>
          <Submit />
        </div>
      </form>
    </div>
  );
}
