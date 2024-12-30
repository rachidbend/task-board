import StatusIndicator from '../../../components/statusIndicator/StatusIndicator';
import styles from './StatusPicker.module.css';
import PropTypes from 'prop-types';

const statuses = ['in-progress', 'completed', 'wont-do'];

const formatText = status => {
  const split = status.split('-');
  if (status === 'wont-do') {
    return `Won't do`;
  }
  return split.join(' ');
};

function StatusPicker({ register }) {
  return (
    <div>
      <p className="modal-label">Status</p>
      <fieldset className={`${styles.field}`} {...register('status')}>
        {statuses.map(status => (
          <div
            key={`status-picker-${status}`}
            className={`${styles.inputContainer}`}>
            <input
              className={`${styles.input}`}
              type="radio"
              name={'status-picker'}
              id={`status-picker-${status}`}
              value={status}
            />
            <label
              className={`${styles.label}`}
              htmlFor={`status-picker-${status}`}>
              <StatusIndicator status={status} />
              {formatText(status)}
              <span className={`${styles.checkedIcon}`}>
                <img
                  className={`${styles.icon}`}
                  src="./Done_round.svg"
                  alt=""
                />
              </span>
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
StatusPicker.propTypes = {
  register: PropTypes.func,
};

export default StatusPicker;
