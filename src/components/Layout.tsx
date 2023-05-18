import {
    HeartFilledIcon,
    HeartOutlineIcon,
    HomeFilledIcon,
    HomeOutlineIcon,
} from '@/icons'
import { NavBar, NavBarLink } from './NavBar'
import { styled } from 'styled-components'
import { NAVBAR_HEIGHT } from '@/constants'
import { useRouter } from 'next/router'

type LayoutProps = {
    children: React.ReactNode
}

const Wrapper = styled.main`
    padding-bottom: ${NAVBAR_HEIGHT};

    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <NavBar>
                <NavBarLink
                    defaultIcon={HomeOutlineIcon}
                    filledIcon={HomeFilledIcon}
                    href="/"
                />
                <NavBarLink
                    defaultIcon={HeartOutlineIcon}
                    filledIcon={HeartFilledIcon}
                    href="/favorites"
                />
            </NavBar>
            <Wrapper>{children}</Wrapper>
        </>
    )
}

export { Layout }
