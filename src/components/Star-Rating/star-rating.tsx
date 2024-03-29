import { Star } from 'lucide-react';
import { useState } from 'react';

export default function StarRating() {
  const [prevIndex, setPrevIndex] = useState<number>(-1);
  const [index, setIndex] = useState<number>(-1);
  const [determined, setDetermined] = useState<boolean>(false);
  const determineRating = (idx: number) => {
    setDetermined(true);
    setIndex(idx);
    setPrevIndex(idx);
  };

  const starIcons = Array.from({ length: 5 }, (_, idx) => (
    <Star
      key={idx}
      size={100}
      strokeWidth={0}
      fill={index >= idx ? 'yellow' : 'black'}
      onMouseEnter={() => setIndex(idx)}
      onMouseLeave={() => (!determined ? setIndex(-1) : setIndex(prevIndex))}
      onClick={() => determineRating(idx)}
      style={{
        cursor: 'pointer',
        transition: 'all 100ms ease-in-out',
      }}
    />
  ));

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      {starIcons}
    </div>
  );
}
