'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
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
      <form>
        <div className='mt-2 grid gap-2'>
          <div className='grid gap-1 py-2'>
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
          <div className='grid gap-1 py-2'>
            <Label
              className='text-lg'
              htmlFor='password'
            >
              Password:
            </Label>
            <Input
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              className='p-4'
              required
            />
          </div>
          <Link href='/forgot-password'>
            <Button
              variant='link'
              className='mx-6 -my-1 text-md'
            >
              Forgot password?
            </Button>
          </Link>
          <Button
            variant='outline'
            type='submit'
            className='text-md uppercase'
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
