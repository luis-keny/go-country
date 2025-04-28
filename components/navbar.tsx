import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import { Link } from '@heroui/link';

import { siteConfig } from '@/config/site';
import { ThemeSwitch } from '@/components/theme-switch';
import { GithubIcon, Logo } from '@/components/icons';

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="top-0 backdrop:blur"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <div className="flex justify-start items-center gap-1">
          <Logo />
          <p className="font-bold text-inherit">Go.Country</p>
        </div>
      </NavbarContent>

      <NavbarContent className="flex basis-1/5" justify="end">
        <NavbarItem className="flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
