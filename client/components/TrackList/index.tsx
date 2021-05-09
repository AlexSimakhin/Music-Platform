import React from 'react';
import { ITrack } from '../../types/track';
import TrackItem from '../TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
  const trackListJSX = tracks.map(track => <TrackItem key={track._id} track={track} />)

  return (
    <div>
      {trackListJSX}
    </div>
  );
}

export default TrackList;
