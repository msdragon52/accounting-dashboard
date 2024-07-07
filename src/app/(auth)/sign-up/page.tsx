'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
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
      <form>
        <div className='mt-2 grid grid-cols-2 gap-2'>
          <div className='gap-4 m-4'>
            <Label
              className='text-lg'
              htmlFor='email'
            >
              Name:
            </Label>
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='My name'
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
            <Input
              id='email'
              type='email'
              name='email'
              placeholder='Password'
              className='p-4'
              required
            />
          </div>
          <div className='gap-4 m-4'>
            <Label
              className='text-lg'
              htmlFor='password'
            >
              Confirm Password:
            </Label>
            <Input
              id='password'
              type='password'
              name='password'
              placeholder='Confirm Password'
              className='p-4'
              required
            />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center m-8'>
          <Button
            variant='secondary'
            type='submit'
            className='text-md uppercase'
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}
