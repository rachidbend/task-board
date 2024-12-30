import PropTypes from 'prop-types';
import styles from './IconDisplay.module.css';
import { useIcons } from '../../context/IconProvider';

/**
 * IconDisplay component
 *
 * This component takes an iconId and displays the icon. If there is no
 * icon matching the iconId, it displays a message saying that no icon
 * was found.
 *
 * @param {Object} props
 * @param {number} props.iconId The id of the icon to be displayed
 * @returns A JSX element representing the icon display
 */
function IconDisplay({ iconId }) {
  const { getIcon } = useIcons();
  const path = getIcon(iconId);

  // If there is no icon matching the iconId, display a message
  if (!path) return <p>no icon was found</p>;

  // Display the icon
  return (
    <div className={`${styles.container}`}>
      <img className={`${styles.icon}`} src={path} alt="icon" />
    </div>
  );
}

IconDisplay.propTypes = {
  iconId: PropTypes.number.isRequired,
};

export default IconDisplay;
