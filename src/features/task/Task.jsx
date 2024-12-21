import PropTypes from 'prop-types';
import IconDisplay from '../../components/iconDisplay/IconDisplay';
import TaskTitle from './title/TaskTitle';
import TaskDescription from './desciption/TaskDescription';
import StatusIndicator from '../../components/statusIndicator/StatusIndicator';
import styles from './Task.module.css';

/**
 * Task component that displays a task with its details.
 *
 * @param {Object} props - Component properties
 * @param {Object} props.task - Task object containing details
 * @param {number} props.task.id - Unique identifier for the task
 * @param {string} props.task.title - Title of the task
 * @param {string} props.task.description - Description of the task
 * @param {string} props.task.status - Status of the task
 * @param {number} props.task.iconId - Icon identifier for the task
 * @returns {JSX.Element|null} A JSX element representing the task or null if data is incomplete
 */
function Task({ task }) {
  const { id, title, description, status, iconId } = task || {};

  // Ensure essential task details are available
  if (!id || !title || !status || !iconId) {
    return null;
  }

  // Determine the status color based on the task status
  let statusColor;
  switch (status) {
    case 'in-progress':
      statusColor = styles.inProgress;
      break;
    case 'wont-do':
      statusColor = styles.wontDo;
      break;
    case 'completed':
      statusColor = styles.completed;
      break;
    case 'no-status':
    default:
      statusColor = styles.noStatus;
      break;
  }

  // Render the task component with title, icon, status, and optional description
  return (
    <div className={`${styles.task} ${statusColor}`} key={id}>
      <div className={`${styles.container}`}>
        <IconDisplay iconId={iconId} />

        <TaskTitle title={title} />

        <StatusIndicator status={status} />

        {description && (
          <div className={`${styles.spacer}`}>
            <TaskDescription description={description} />
          </div>
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
