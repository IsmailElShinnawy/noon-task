import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Text } from './Text'
import { HeartFilledIcon, HeartOutlineIcon } from '@/icons'

const Wrapper = styled.article`
    border-radius: 0.5rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`

const Header = styled.header`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    color: #4d5bcb;
    font-size: 0.8rem;
`

const Body = styled.div<{ src: string }>`
    height: 15rem;
    background-image: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0)
        ),
        url(${(props) => props.src});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: white;
    padding: 0.5rem 1rem;
`

const Footer = styled.footer`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.8rem;
`

const AvatarImage = styled(Image)`
    border-radius: 50%;
`

type CardProps = {
    product: Product
}

const Card = ({ product }: CardProps) => {
    const {
        seller,
        img,
        title,
        price,
        numberOfFavorites,
        description,
        tags,
        numberOfComments,
    } = product
    return (
        <Wrapper>
            <Header>
                <AvatarImage
                    src={seller.img}
                    alt={`${seller.username} profile picture`}
                    width={32}
                    height={32}
                />
                <Link href="#">{seller.username}</Link>
            </Header>
            <Body src={img}>
                <Flex justify="space-between" isCentered>
                    <Flex direction="column" gap="0.5rem">
                        <h3>{title}</h3>
                        <span>AED {price.toFixed(0)}</span>
                    </Flex>
                    <HeartOutlineIcon width="24px" height="24px" />
                </Flex>
            </Body>
            <Footer>
                <Flex gap="0.5rem" isCentered>
                    <HeartFilledIcon
                        width="16px"
                        height="16px"
                        fill="#4d5bcb"
                    />
                    <Text color="#4d5bcb">{numberOfFavorites} likes</Text>
                </Flex>
                <Flex direction="column" gap="0.25rem">
                    <Text minHeight="2.4rem">{description}</Text>
                    <Flex gap="0.25rem">
                        {tags.map((tag, idx) => (
                            <Link
                                href={`/search?tag=${tag}`}
                                key={`${tag}-${idx}`}
                            >
                                <Text color="#4d5bcb">#{tag}</Text>
                            </Link>
                        ))}
                    </Flex>
                </Flex>
                <span>View {numberOfComments} comments</span>
            </Footer>
        </Wrapper>
    )
}

export { Card }
