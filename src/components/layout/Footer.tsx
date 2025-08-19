'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rattus Solutions. Rat Race SMP. All rights reserved.
          </p>
          {/*<div className="flex justify-center space-x-4 mt-3 text-sm text-white-400">
            <Link href="/privacy" className="transition-colors hover:text-red-400 border-b-1">
              Privacy Policy
            </Link>
            <p>⦁</p>
            <Link href="/terms" className="transition-colors hover:text-red-400 border-b-1">
              Terms of Service
            </Link>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
