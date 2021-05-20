import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Player from '../components/Player';

const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */

  display: flex;
  flex-direction: column;
`;

const MainLayout: React.FC = ({children}) => {
  return (
    <Container>
      <Header />
      {children}
      <Player />
    </Container>
  );
}

export default MainLayout;
