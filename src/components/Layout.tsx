import { HeartFilledIcon, HeartOutlineIcon, HomeFilledIcon, HomeOutlineIcon } from '@/icons';
import {NavBar, NavBarLink} from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar>
        <NavBarLink defaultIcon={HomeOutlineIcon} filledIcon={HomeFilledIcon} href="/" />
        <NavBarLink defaultIcon={HeartOutlineIcon} filledIcon={HeartFilledIcon} href="/favorites" />
      </NavBar>
      {children}
    </>
  );
}

export {
  Layout
}