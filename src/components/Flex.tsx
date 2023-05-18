import styled from "styled-components"

type FlexProps = {
  gap?: string
  direction?: 'row' | 'column'
  justify?: 'end' | 'space-between'
  isCentered?: boolean
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '0'};
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.isCentered ? 'center' : 'start'};
`

export {
  Flex
}
