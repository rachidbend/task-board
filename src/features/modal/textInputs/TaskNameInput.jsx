import styles from './TaskNameInput.module.css';
import PropTypes from 'prop-types';

function TaskNameInput({ register }) {
  return (
    <div className={`${styles.container}`}>
      <p className="modal-label">Task name</p>
      <input
        className={`${styles.titleInput}`}
        type="text"
        {...register('title')}
      />
    </div>
  );
}

TaskNameInput.propTypes = {
  register: PropTypes.func,
};

export default TaskNameInput;
