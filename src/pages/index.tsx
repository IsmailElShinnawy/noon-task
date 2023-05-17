import { NavBar, NavBarLink } from "@/components" 

export default function Home() {
  return <NavBar>
    <NavBarLink iconSrc="/icons/home-icon.svg" alt="Home icon" href="/" />
    <NavBarLink iconSrc="/icons/heart-icon.svg" alt="Favorites icon" href="/favorites" />
  </NavBar>
}