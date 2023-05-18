import { Product } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { Flex } from './Flex'

const Wrapper = styled.article`
  border-radius: 0.5rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`

const Header = styled.header`
  height: 3rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0 0.5rem;
`
  
const Body = styled.div<{src: string}>`
  height: 15rem;
  background-image: 
    linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), 
    url(${props => props.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  color: white;
  padding: 0.5rem 1rem
`

const Footer = styled.footer`
  height: 6rem;
`

const AvatarImage = styled(Image)`
  border-radius: 50%;
`

type CardProps = {
  product: Product
}

const Card = ({product}: CardProps) => {
  const {seller, img, title, price} = product;
  return <Wrapper>
    <Header>
      <AvatarImage src={seller.img} alt={`${seller.username} profile picture`} width={32} height={32}/>
      <Link href="#">
        {seller.username}
      </Link>
    </Header>
    <Body src={img}>
      <Flex justify='space-between' isCentered>
        <Flex direction='column' gap="0.5rem">
          <h3>{title}</h3>
          <span>AED {price.toFixed(0)}</span>
        </Flex>
        <Image src="/icons/heart-icon.svg" alt='favorite' width={24} height={24}/>
      </Flex>
    </Body>
    <Footer />
  </Wrapper>
}

export {
  Card
}