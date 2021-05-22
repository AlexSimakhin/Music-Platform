import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Player from '../components/Player';
import Head from 'next/head';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Container = styled.div`
  width: 100vw;
  /* height: 100vh; */

  display: flex;
  flex-direction: column;
`;

const MainLayout: React.FC<MainLayoutProps> = ({children, title, description, keywords}) => {
  return (
    <>
      <Head>
        <title>{title || 'Музыкальная платформа'}</title>
        <meta name="description" content={'Музыкальная платформа. Идеальное место послушать качественную музыку. Просто погрузится в мир музыки и отдохнуть от тяжелых будней или же учёбы. ' + (description || '')} />
        <meta name="robots" content='index, follow' />
        <meta name="keywords" content={keywords || 'Музыка, треки, лучшая, хиты, топ, артисты'} />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Container>
        <Header />
        {children}
        <Player />
      </Container>
    </>
  );
}

export default MainLayout;
