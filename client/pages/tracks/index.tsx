import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../layout/MainLayout';
import Button from '../../elements/Button';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const GridCard = styled.div`
  display: grid;
`;


// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Index: React.FC = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст...', listens: 10, audio: 'http://localhost:5000/audio/c467d4f6-0ce5-4d8a-b0c4-0edd218ee8c0.mp3', picture: 'http://localhost:5000/image/3718c514-607d-4bbf-8b2a-a2c912602890.jpg', comments: []
    },
    {
      _id: '2', name: 'Трек 2', artist: 'Исполнитель 2', text: 'Какой-то текст...', listens: 20, audio: 'http://localhost:5000/audio/c467d4f6-0ce5-4d8a-b0c4-0edd218ee8c0.mp3', picture: 'http://localhost:5000/image/3718c514-607d-4bbf-8b2a-a2c912602890.jpg', comments: []
    },
    {
      _id: '3', name: 'Трек 3', artist: 'Исполнитель 3', text: 'Какой-то текст...', listens: 30, audio: 'http://localhost:5000/audio/c467d4f6-0ce5-4d8a-b0c4-0edd218ee8c0.mp3', picture: 'http://localhost:5000/image/3718c514-607d-4bbf-8b2a-a2c912602890.jpg', comments: []
    },
  ];

  return (
    <MainLayout>
      <GridWrapper>
        <Card>
          <GridCard>
            <h1>Список треков</h1>
            <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
          </GridCard>
          <TrackList tracks={tracks} />
        </Card>
      </GridWrapper>
    </MainLayout>
  );
}

export default Index;
