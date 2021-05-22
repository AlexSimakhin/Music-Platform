import router from 'next/router';
import React from 'react';
import MainLayout from './../../../layout/MainLayout';

const Index: React.FC = () => {
  return (
    <MainLayout title={'Плейлист — Музыкальная платформа'}>
      <div>
        <div>Playlists</div>
        <div onClick={() => router.push('/library/songs')} >Songs</div>
      </div>
    </MainLayout>
  );
}

export default Index;
