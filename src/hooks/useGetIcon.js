import { useState } from 'react';

const initialIcons = [
  {
    id: 1,
    path: './icons/browsing.png',
  },
  {
    id: 2,
    path: './icons/weight-lifting.png',
  },
  {
    id: 3,
    path: './icons/chat.png',
  },
  {
    id: 4,
    path: './icons/alarm-clock.png',
  },
  {
    id: 5,
    path: './icons/bookshelf.png',
  },
  {
    id: 6,
    path: './icons/coffee.png',
  },
];

const useGetIcon = iconId => {
  const [icons, setIcons] = useState(initialIcons);
  const icon = icons.find(icon => icon.id === iconId);

  if (icon === undefined) return null;

  return icon.path;
};

export default useGetIcon;
