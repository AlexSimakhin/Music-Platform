import React from 'react';
import styled from 'styled-components';
import { ITrack } from '../../types/track';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import TrackProgress from './TrackProgress';

const PlayerStyle = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
`;

const Player: React.FC = () => {
  const track: ITrack = {
    _id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст...', listens: 10, audio: 'http://localhost:5000/audio/c467d4f6-0ce5-4d8a-b0c4-0edd218ee8c0.mp3', picture: 'http://localhost:5000/image/3718c514-607d-4bbf-8b2a-a2c912602890.jpg', comments: []
  };
  const active = false;
  
  return (
    <PlayerStyle>
      <FontAwesomeIcon icon={!active ? faPlayCircle : faStopCircle} />

      <div>
        <div>{track.name}</div>
        <div>{track.artist}</div>
      </div>

      <TrackProgress left={0} right={100} onChange={() => {}} />
    </PlayerStyle>
  );
}

export default Player;
