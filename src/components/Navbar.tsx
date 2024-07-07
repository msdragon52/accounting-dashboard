import Link from 'next/link';
import { Separator } from './ui/separator';

export default function Navbar() {
  const navLinks = [
    {
      label: 'Home',
      ref: '',
    },
    {
      label: 'About',
      ref: '#',
    },
    {
      label: 'Upgrade',
      ref: '#',
    },
    {
      label: 'FAQs',
      ref: '#',
    },
    {
      label: 'Support',
      ref: '#',
    },
  ];

  return (
    <nav className='p-8 w-[15rem] text-white bg-blue-500 border-r border-white'>
      <ul className='flex flex-col items-center justify-center'>
        <Link
          href='/login'
          className='m-4 hover:underline'
        >
          Login
        </Link>
        <Link
          href='/sign-up'
          className='m-4 hover:underline'
        >
          Sign Up
        </Link>
        <Separator
          orientation='horizontal'
          className='w-6 m-8'
        />
        {navLinks.map(({ label, ref }, index) => (
          <Link
            key={index}
            className='m-4 hover:underline'
            href={`/${ref}`}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
