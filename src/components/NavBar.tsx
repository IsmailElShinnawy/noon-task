import Image from "next/image";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

const NavBar  = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fb619b;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    justify-content: end;
  }
`

const StyledLink = styled(Link)`
  padding: 1rem;
`

type NavBarLinkProps = {
  iconSrc: string;
  alt: string;
} & LinkProps

const NavBarLink = ({iconSrc, alt, ...linkProps}: NavBarLinkProps) => {
  return <StyledLink {...linkProps}>
      <Image priority alt={alt} src={iconSrc} width={32} height={32} />
  </StyledLink>
}

export {
  NavBar,
  NavBarLink
}