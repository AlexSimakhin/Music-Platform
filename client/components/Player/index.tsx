import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ITrack } from '../../types/track';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import VolumeProgress from './VolumeProgress';

const PlayerStyle = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: flex;
`;

let audio;

const Player: React.FC = () => {
  const track: ITrack = {
    _id: '1', name: 'Трек 1', artist: 'Исполнитель 1', text: 'Какой-то текст...', listens: 10, audio: 'http://localhost:5000/audio/c467d4f6-0ce5-4d8a-b0c4-0edd218ee8c0.mp3', picture: 'http://localhost:5000/image/3718c514-607d-4bbf-8b2a-a2c912602890.jpg', comments: []
  };
  
  const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player);
  const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack } = useActions();
  
  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  }

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }
  
  return (
    <PlayerStyle>
      <FontAwesomeIcon icon={pause ? faPlayCircle : faStopCircle} onClick={play} />

      <div>
        <div>{active?.name}</div>
        <div>{active?.artist}</div>
      </div>

      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />

      Volume
      <VolumeProgress left={volume} right={100} onChange={changeVolume} />
    </PlayerStyle>
  );
}

export default Player;
