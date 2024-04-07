'use client';
import cntl from 'cntl';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { NavLinks } from './_partials/nav-links';
import { Logo } from '@/../public/assets/img/logos';
import Image from 'next/image';

const styles = {
  navThinLink: `flex items-center transition-colors p-[2px] rounded-sm`,
  navSlim: (type: 'visible' | 'invisible') =>
    cntl`leading-none transition-all text-[10px] md:text-[11px] lg:text-xs text-[#757575] bg-[#FBFBFB] px-[5vw] md:px-[10vw] lg:px-[15vw] ${
      type === 'visible' ? cntl`` : cntl`invisible`
    }`,
  navMain: `text-[#1E1E1E] px-[5vw] md:px-[10vw] lg:px-[15vw]`,
  navAll: (type: 'fixed' | 'hidden') =>
    cntl`fixed top-0 z-30 flex flex-col w-full font-medium transition-transform shadow-[0_4px_8px_0px_rgba(0,0,0,0.1)] bg-white ${
      type === 'fixed'
        ? cntl`shadow-none`
        : cntl`-translate-y-9 md:-translate-y-[38px] lg:-translate-y-10`
    }`,
  navMobile: (sidebarOpen: boolean) =>
    cntl`absolute flex flex-col flex-grow w-screen h-screen p-8 transition-transform ease-out bg-white gap-[4vh] top-[80px] -right-[100vw] md:hidden text-[#1E1E1E] ${
      sidebarOpen ? cntl`translate-x-[-100vw]` : ''
    }`,
};

export function Navbar() {
  const navAll = useRef<HTMLDivElement>(null);
  const navSlim = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [auth, setAuth] = useState(false);
  const onScroll = useCallback(handleNavbarScroll, [sidebarOpen]);
  function handleNavbarScroll() {
    const { scrollY } = window;
    if (!navAll.current || !navSlim.current) {
      return;
    }
    navAll.current.className = styles.navAll('fixed');
    navSlim.current.className = styles.navSlim('visible');
    if (sidebarOpen) {
      return (navAll.current.className = styles.navAll('hidden'));
    }
    if (scrollY > 100) {
      navAll.current.className = styles.navAll('hidden');
      navSlim.current.className = styles.navSlim('invisible');
    }
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 767;

  function handleMobileNavigationToggler() {
    setSidebarOpen((current) => {
      const bodyClasses = document.body.classList;
      if (isMobile && !current) {
        bodyClasses.add('overflow-hidden');
      } else {
        bodyClasses.remove('overflow-hidden');
      }
      return !current;
    });
  }
  useEffect(() => {
    onScroll();
    localStorage.getItem('token') == null ? setAuth(false) : setAuth(true);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <nav
      className={`${styles.navAll('fixed')}`}
      ref={navAll}
      data-cy="main-nav"
      tabIndex={0}
    >
      <div className={styles.navMain}>
        <div className="flex items-center justify-between h-20 mx-auto max-w-7xl">
          <div>
            <Link href="/">
              <Image src={Logo} width={200} height={200} />
            </Link>
          </div>
          <div
            className="items-center hidden md:gap-1 lg:gap-2 md:flex"
            data-cy="desktop-nav"
          >
            <NavLinks />
          </div>
          <div>
            <Link
              href={'/donate'}
              className="rounded-xl px-3 p-2 bg-black text-center hover:bg-gray-900 text-white md:text-base lg:text-lg font-semibold"
            >
              Donate
            </Link>
            {auth ? (
              <Link
                href={'/dashboard'}
                className="rounded-xl px-3 p-2 bg-eco text-center hover:bg-black hover:text-white md:text-base lg:text-lg font-semibold ml-2"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href={'/login'}
                className="rounded-xl px-3 p-2 bg-eco text-center hover:bg-black hover:text-white md:text-base lg:text-lg font-semibold ml-2"
              >
                Login
              </Link>
            )}
          </div>
          <button
            className="flex items-center md:hidden"
            data-cy="hamburger"
            title="Buka menu"
            type="button"
            onClick={handleMobileNavigationToggler}
          >
            {sidebarOpen ? <MdMenuOpen size={32} /> : <MdMenu size={32} />}
          </button>
        </div>
      </div>
      <aside className={styles.navMobile(sidebarOpen)} data-cy="mobile-nav">
        <NavLinks />
      </aside>
    </nav>
  );
}
