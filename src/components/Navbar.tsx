import Link from 'next/link';
import { Separator } from './ui/separator';

export default function Navbar() {
  const navLinks = [
    {
      label: 'Login',
      ref: 'login',
    },
    {
      label: 'Sign Up',
      ref: 'sign-up',
    },
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
        {navLinks.map(({ label, ref }, index) => (
          <div key={index}>
            <Link
              className='m-4 hover:underline'
              href={`/${ref}`}
            >
              {label}
            </Link>
            {label === 'Sign Up' && (
              <Separator
                orientation='horizontal'
                className='w-6 m-8'
              />
            )}
          </div>
        ))}
      </ul>
    </nav>
  );
}
