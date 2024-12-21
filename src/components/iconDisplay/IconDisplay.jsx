import useGetIcon from '../../hooks/useGetIcon';
import PropTypes from 'prop-types';
import styles from './IconDisplay.module.css';

function IconDisplay({ iconId }) {
  const path = useGetIcon(iconId);

  if (!path) return <p>no icon was found</p>;
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
