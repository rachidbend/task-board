import PropTypes from 'prop-types';
import styles from './TaskDescription.module.css';

function TaskDescription({ description }) {
  return <p className={`${styles.description}`}>{description}</p>;
}

TaskDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default TaskDescription;
