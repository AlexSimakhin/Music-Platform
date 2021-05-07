import { FC } from 'react';
import styled from 'styled-components';

const LinkStyle = styled.a`
color: black;
text-decoration: none;
`;

interface LinkProps {
  src: string,
  children: React.ReactChild | React.ReactNode,
}

const Link: FC<LinkProps> = ({src, children}) => {
  return (
    <LinkStyle href={src}>
      {children}
    </LinkStyle>
  );
}

export default Link;
