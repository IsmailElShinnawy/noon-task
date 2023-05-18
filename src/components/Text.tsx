import styled from "styled-components";

type TextProps = {
  className?: string;
  children: React.ReactNode;
  color?: string;
  minHeight?: string;
}

const TextComponent = ({className, children}: TextProps) => {
  return <p className={className}>{children}</p>
}

export const Text = styled(TextComponent)`
  color: ${({color}) => color || 'black'};
  min-height: ${({minHeight}) => minHeight || 'auto'}
`