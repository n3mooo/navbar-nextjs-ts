import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import NavLinks from './NavLinks';
import styles from './Header.module.scss';
import clsx from 'clsx';
import header from '@/contents/header.json';
import Brand from './Brand';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const [classSticky, setClassSticky] = useState('');
  const [open, setOpen] = useState(false);

  //Sticky navbar
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setClassSticky(styles.stickyNav) : setClassSticky('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      stickNavbar();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        stickNavbar();
      });
    };
  }, []);

  return (
    <div
      className={`${classSticky} lg:absolute top-0 w-full z-50 bg-[rgba(255,255,255,0.7)] hover:bg-white`}
    >
      <div className="container flex items-center font-medium justify-between">
        <div className="z-40 py-4 lg:w-auto w-full flex justify-between">
          <Brand header={header} />
          <div className="lg:hidden my-auto" onClick={() => setOpen(!open)}>
            {open ? (
              <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </div>
        </div>
        <ul className="lg:flex hidden items-center gap-4">
          <NavLinks header={header} />
        </ul>
        <div className="lg:block hidden">
          <Button header={header} />
        </div>
        {/* Mobile nav */}
        <div
          className={clsx(
            `lg:hidden bg-white absolute z-30 w-full h-full bottom-0 pt-16 duration-500`,
            open ? 'left-0 right-0' : 'left-[-100%]'
          )}
        >
          <ul className={clsx(`container bg-white min-h-screen`)}>
            <NavLinks header={header} />
            <div className="py-5">
              <Button header={header} />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
