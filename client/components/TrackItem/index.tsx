import React from 'react';
import { ITrack } from '../../types/track';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TrackPicture = styled.img`
  width: 48px;
  height: 48px;
`;

const TrackInfo = styled.div`
  display: flex;
`;

const TrackItem: React.FC<TrackItemProps> = ({track, active = false }) => {
  return (
    <TrackWrapper>
      <FontAwesomeIcon icon={!active ? faPlayCircle : faStopCircle} />

      <TrackPicture src={track.picture} alt={track.name} />

      <TrackInfo>
        <div>{track.name}</div>
        <div>{track.artist}</div>
      </TrackInfo>

      {active && <div>02:42 / 03:22</div>}
    </TrackWrapper>
  );
}

export default TrackItem;
