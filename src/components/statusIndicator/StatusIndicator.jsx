import PropTypes from 'prop-types';
import styles from './StatusIndicator.module.css';

/**
 * A StatusIndicator component that displays the status of a task
 * with a different background color and icon depending on the status
 *
 * @param {Object} props
 * @param {string} props.status The status of the task, one of:
 *   - new
 *   - wont-do
 *   - in-progress
 *   - completed
 * @returns A JSX element representing the status indicator
 */
function StatusIndicator({ status }) {
  // Check if the status is one of the valid statuses
  const isStatus =
    status === 'new' ||
    status === 'wont-do' ||
    status === 'in-progress' ||
    status === 'completed' ||
    'no-status';

  // Initialize variables for status color and icon path
  let statusColor;
  let iconPath = '';

  // Determine the status color and icon based on the status
  switch (status) {
    case 'new':
      statusColor = styles.new;
      iconPath = './Add_round_duotone.svg';
      break;
    case 'wont-do':
      statusColor = styles.wontDo;
      iconPath = './close_ring_duotone.svg';
      break;
    case 'in-progress':
      statusColor = styles.inProgress;
      iconPath = './Time_atack_duotone.svg';
      break;
    case 'completed':
      statusColor = styles.completed;
      iconPath = './Done_round_duotone.svg';
      break;
  }

  if (status === 'no-status') return null;

  // Render the status indicator with the appropriate style and icon
  return (
    <div className={`${styles.status} ${statusColor}`}>
      {isStatus ? (
        <img src={iconPath} alt="status icon" />
      ) : (
        'input a valid status'
      )}
    </div>
  );
}

StatusIndicator.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusIndicator;
