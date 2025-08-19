'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LucideIcon, Menu, X, Home, Info, Server, FileText } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, children }) => {
  return (
    <Link href={href} className="flex items-center space-x-2 hover:text-red-400 transition-colors">
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    setIsScrolled(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`transition text-white fixed w-full z-50 duration-300 ${
        isScrolled || isMenuOpen ? 'shadow-lg bg-black' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
            <Image src="/images/rat-head.png" width={50} height={50} alt="Rat head" />
            <span className="text-red-400">Rat Race</span>
          </Link>

          <div className="hidden md:flex space-x-4 ml-6">
            <NavLink href="#" icon={Home}>
              Home
            </NavLink>
            {/*<NavLink href="/about" icon={Info}>
              About
            </NavLink>
            <NavLink href="/servers" icon={Server}>
              Servers
            </NavLink>
            <NavLink href="/rules" icon={FileText}>
              Rules
            </NavLink>*/}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-4">
            <a
              href="https://discord.gg/EeQK5KcjEh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 125 100"
                className="transition h-6 w-6 flex-no-shrink fill-current hover:fill-red-400"
              >
                <path d="M81.15,0c-1.2376,2.1973-2.3489,4.4704-3.3591,6.794-9.5975-1.4396-19.3718-1.4396-28.9945,0-.985-2.3236-2.1216-4.5967-3.3591-6.794-9.0166,1.5407-17.8059,4.2431-26.1405,8.0568C2.779,32.5304-1.6914,56.3725.5312,79.8863c9.6732,7.1476,20.5083,12.603,32.0505,16.0884,2.6014-3.4854,4.8998-7.1981,6.8698-11.0623-3.738-1.3891-7.3497-3.1318-10.8098-5.1523.9092-.6567,1.7932-1.3386,2.6519-1.9953,20.281,9.547,43.7696,9.547,64.0758,0,.8587.7072,1.7427,1.3891,2.6519,1.9953-3.4601,2.0457-7.0718,3.7632-10.835,5.1776,1.97,3.8642,4.2683,7.5769,6.8698,11.0623,11.5419-3.4854,22.3769-8.9156,32.0509-16.0631,2.626-27.2771-4.496-50.9172-18.817-71.8548C98.9811,4.2684,90.1918,1.5659,81.1752.0505l-.0252-.0505ZM42.2802,65.4144c-6.2383,0-11.4159-5.6575-11.4159-12.6535s4.9755-12.6788,11.3907-12.6788,11.5169,5.708,11.4159,12.6788c-.101,6.9708-5.026,12.6535-11.3907,12.6535ZM84.3576,65.4144c-6.2637,0-11.3907-5.6575-11.3907-12.6535s4.9755-12.6788,11.3907-12.6788,11.4917,5.708,11.3906,12.6788c-.101,6.9708-5.026,12.6535-11.3906,12.6535Z" />
              </svg>
            </a>
          </div>
        </div>

        <div
          className={`transition-opacity bg-black absolute top-full left-0 w-full duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100 shadow-lg' : 'opacity-0 left-2000'
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink href="/" icon={Home}>
              Home
            </NavLink>
            {/*<NavLink href="/about" icon={Info}>
              About
            </NavLink>
            <NavLink href="/servers" icon={Server}>
              Servers
            </NavLink>
            <NavLink href="/rules" icon={FileText}>
              Rules
            </NavLink>*/}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
