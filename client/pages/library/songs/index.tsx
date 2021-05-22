import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../../layout/MainLayout';
import { useRouter } from 'next/router';
import { ITrack } from '../../../types/track';
import TrackList from '../../../components/TrackList';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from './../../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../../store';
import { fetchTracks } from './../../../store/actions-creators/track';


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


const Index: React.FC = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector(state => state.track);

  if (error) {
    return (
      <MainLayout>{error}</MainLayout>
    )
  }

  return (
    <MainLayout
      title={'Послнедние треки — Музыкальная платформа'}
      description={'Лучшие треки.'}
    >
      <GridWrapper>
        <Card>
          <TrackList tracks={tracks} />
        </Card>
      </GridWrapper>
    </MainLayout>
  );
}

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(await fetchTracks());
})