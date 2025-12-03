import Link from 'next/link';
import {site_title, site_title__screen_reader } from '../globalcontroll';

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className='w-full max-w-4xl p-4'>
        <Link href="/">
          <h2>
            <span aria-hidden="true">{site_title}</span>
            <span className="sr-only">{site_title__screen_reader}</span>
          </h2>
        </Link>
      </div>
    </footer>
  )
}