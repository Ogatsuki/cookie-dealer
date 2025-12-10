import Link from 'next/link';
import {site_title, site_title__screen_reader } from '../globalcontroll';

export default function Footer() {
  return (
    <footer className="h-40 flex justify-center items-center bg-slate-800/90 text-white">
      <div className='w-full max-w-4xl p-4'>
        <Link href="/">
          <h2 className='text-xl'>
            <span aria-hidden="true">{site_title}</span>
            <span className="sr-only">{site_title__screen_reader}</span>
          </h2>
        </Link>
        <p className='text-sm'>&copy; 2025 Cookie Dealer</p>
      </div>
    </footer>
  )
}