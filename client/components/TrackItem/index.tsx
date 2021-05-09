import React from 'react';
import { ITrack } from '../../types/track';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false }) => {
  return (
    <div>
      <FontAwesomeIcon icon={!active ? faPlayCircle : faStopCircle} />
      {track.name}
    </div>
  );
}

export default TrackItem;
