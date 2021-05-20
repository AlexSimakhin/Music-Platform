import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { ReactSVG } from 'react-svg';
import logoPath from './LogoWhite.svg';

import LogoLink from './LogoLink';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';


const menuItems = [
  {
    text: 'Главная', href: '/',
  },
  {
    text: 'Навигатор', href: '/explore',
  },
  {
    text: 'Библиотека', href: '/library/playlist',
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
    width: 40px;
    height: 40px;
    
    .st0 {
      fill: #ffffff;
    }
  }
`;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`

`;

const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: #fff;
`;


const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const navJSX = menuItems.map(({ text, href }, index) => {
    return (
      <HeaderLink key={index} className={router.pathname === href ? 'active' : ''} onClick={() => router.push(href)}>
        {text}
      </HeaderLink>
    )
  });

  

  return (
    <HeaderStyle>
      
      <LogoLink href="#">
        <Logotip src={logoPath} />
      </LogoLink>

      <NavBarWrapper>
        <NavBar>
          {navJSX}
        </NavBar>

        <SearchInput onChange={e => setInputValue(e.target.value)} />

      </NavBarWrapper>

      <UserProfile>
        <UserImage />
      </UserProfile>

    </HeaderStyle>
  );
}

export default Header;
