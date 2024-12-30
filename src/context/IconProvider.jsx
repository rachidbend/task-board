import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

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

const iconContext = createContext();

function IconProvider({ children }) {
  const [icons, setIcons] = useState(initialIcons);

  function getIcon(iconId) {
    const icon = icons.find(icon => icon.id === iconId);
    if (icon === undefined) return null;
    return icon.path;
  }
  return (
    <iconContext.Provider value={{ icons, getIcon }}>
      {children}
    </iconContext.Provider>
  );
}

IconProvider.propTypes = {
  children: PropTypes.node,
};

/**
 * useIcons hook
 *
 * This hook is used to get the icons from the IconProvider context.
 * It throws an error if the context is undefined.
 * returns icons, getIcon
 * @returns {Array.<Object>} The list of icons.
 */
export const useIcons = () => {
  const context = useContext(iconContext);
  if (context === undefined) {
    throw new Error('useIcons must be used within a IconProvider');
  }
  return context;
};

export default IconProvider;
