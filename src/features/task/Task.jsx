import PropTypes from 'prop-types';
import IconDisplay from '../../components/iconDisplay/IconDisplay';
import TaskTitle from './title/TaskTitle';
import TaskDescription from './desciption/TaskDescription';
import StatusIndicator from '../../components/statusIndicator/StatusIndicator';
import styles from './Task.module.css';

const task = {
  id: 1,
  title: 'this is a title',
  description: 'this is a description',
  status: 'in-progress',
  iconId: 1,
};
function Task({ task }) {
  const { id, title, description, status, iconId } = task;
  return (
    <div key={id}>
      <IconDisplay iconId={iconId} />
      <div>
        <TaskTitle title={title} />

        {description && <TaskDescription description={description} />}
      </div>
      <StatusIndicator status={status} />
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
