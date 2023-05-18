import styled from "styled-components"

type FlexProps = {
  gap?: string
  direction?: 'row' | 'column'
  justify?: 'end' | 'space-between'
  isCentered?: boolean
  children?: React.ReactNode
  className?: string
}

const FlexComponent = ({children, className}: FlexProps) => {
  return <div className={className}>{children}</div>
}

const Flex = styled(FlexComponent)`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || '0'};
  justify-content: ${props => props.justify || 'start'};
  align-items: ${props => props.isCentered ? 'center' : 'start'};
  flex-wrap: wrap;
`

export {
  Flex
}
