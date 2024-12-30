import StatusIndicator from '../../components/statusIndicator/StatusIndicator';
import PropTypes from 'prop-types';
import styles from './AddNewTask.module.css';

function AddNewTask({ taskHandler }) {
  return (
    <button className={`${styles.button}`} onClick={taskHandler}>
      <StatusIndicator status="new" />
      <p className={`${styles.text}`}>Add new task</p>
    </button>
  );
}

AddNewTask.propTypes = {
  taskHandler: PropTypes.func.isRequired,
};

export default AddNewTask;
