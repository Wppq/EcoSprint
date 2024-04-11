import Link from 'next/link';
import { navLinks } from './nav-links.data';
import cntl from 'cntl';

const styles = {
  navMainLink: cntl`flex items-center justify-center p-2 rounded-lg md:text-sm lg:text-xl bg-[linear-gradient(to_top,var(--tw-gradient-stops))] h-fit hover:underline`,
  navHoverLink: `hover:text-blue-700 hover:bg-blue-600/10`,
  base: `gap-2 text-center w-full font-medium rounded-md md:text-base flex items-center justify-center`,
  dropdownLink: `flex items-center justify-start w-full gap-2 px-5  py-2 hover:text-blue-700 font-medium rounded-md hover:bg-blue-600/10`,
};

export function NavLinks() {
  const links = navLinks.map((navLink, index) => (
    <Link
      className={`${styles.navMainLink}`}
      data-cy={navLink.dataCyL}
      key={index}
      href={navLink.path}
    >
      {navLink.text}
    </Link>
  ));
  return <>{links}</>;
}
