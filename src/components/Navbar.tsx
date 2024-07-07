import Link from 'next/link';
import { Separator } from './ui/separator';

export default function Navbar() {
  return (
    <nav className='p-8 w-[15rem] text-white bg-blue-500 border-r border-white'>
      <ul className='flex flex-col items-center justify-center'>
        <Link
          href='/login'
          className='m-4'
        >
          Login
        </Link>
        <Link
          href='/sign-up'
          className='m-4'
        >
          Sign Up
        </Link>
        <Separator
          orientation='horizontal'
          className='w-6 m-8'
        />
        <Link
          href='/sign-up'
          className='m-4'
        >
          About
        </Link>
        <Link
          href='/sign-up'
          className='m-4'
        >
          Upgrades
        </Link>
        <Link
          href='/sign-up'
          className='m-4'
        >
          FAQs
        </Link>
        <Link
          href='/sign-up'
          className='m-4'
        >
          Support
        </Link>
      </ul>
    </nav>
  );
}
