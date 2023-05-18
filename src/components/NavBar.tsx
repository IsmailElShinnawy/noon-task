import { NAVBAR_HEIGHT } from '@/constants'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const NavBar = styled.nav`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fb619b;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: ${NAVBAR_HEIGHT};
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
    defaultIcon: React.FC<any>
    filledIcon: React.FC<any>
} & LinkProps

const NavBarLink = ({
    defaultIcon: DefaultIcon,
    filledIcon: FilledIcon,
    href,
    ...linkProps
}: NavBarLinkProps) => {
    const { pathname } = useRouter()
    return (
        <StyledLink href={href} {...linkProps}>
            {href === pathname ? (
                <FilledIcon width="32px" height="32px" fill="white" />
            ) : (
                <DefaultIcon width="32px" height="32px" />
            )}
        </StyledLink>
    )
}

export { NavBar, NavBarLink }
