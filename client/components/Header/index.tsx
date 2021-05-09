import React from 'react';
import styled from 'styled-components';

import A from './A';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import { useRouter } from 'next/router';
import { ReactSVG } from 'react-svg';

import logoPath from './LogoWhite.svg';

const menuItems = [
  {
    text: 'Главная', href: '/',
  },
  {
    text: 'Список треков', href: '/tracks',
  },
  {
    text: 'Список альбомов', href: '/albums',
  }
];

const HeaderStyle = styled.header`
  width: inherit;
  height: 64px;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  background: black;
`;

const Logotip = styled(ReactSVG)`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    
    .st0 {
      fill: #ffffff;
    }
  }
`;

function Header() {
  const router = useRouter();

  const navJSX = menuItems.map(({ text, href }, index) => {
    return (
      <HeaderLink key={index} onClick={() => router.push(href)}>
        {text}
      </HeaderLink>
    )
  });

  return (
    <HeaderStyle>
      
      <A href="#">
        <Logotip src={logoPath} />
      </A>

      <NavBar>
        {navJSX}
      </NavBar>

    </HeaderStyle>
  );
}

export default Header;
