import styles from './TaskDescriptionInput.module.css';
import PropTypes from 'prop-types';

function TaskDescriptionInput({ register }) {
  return (
    <div className={`${styles.container}`}>
      <p className="modal-label">Description</p>
      <textarea
        className={`${styles.descriptionInput}`}
        {...register('description')}
      />
    </div>
  );
}

TaskDescriptionInput.propTypes = {
  register: PropTypes.func,
};

export default TaskDescriptionInput;
