import {NavBar, NavBarLink} from './NavBar';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar>
        <NavBarLink iconSrc="/icons/home-icon.svg" alt="Home icon" href="/" />
        <NavBarLink iconSrc="/icons/heart-icon.svg" alt="Favorites icon" href="/favorites" />
      </NavBar>
      {children}
    </>
  );
}

export {
  Layout
}