import React from 'react';

interface VolumeProgressProps {
  left: number;
  right: number;
  onChange: (e) => void;
}

const VolumeProgress: React.FC<VolumeProgressProps> = ({left, right, onChange}) => {
  return (
    <div>
      <input type="range" min={0} max={right} value={left} onChange={onChange} />
      <div>{left} / {right}</div>
    </div>
  );
}

export default VolumeProgress;
