import PropTypes from 'prop-types';
import styles from './TaskTitle.module.css';
function TaskTitle({ title }) {
  return <h3 className={`${styles.title}`}>{title}</h3>;
}

TaskTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskTitle;
