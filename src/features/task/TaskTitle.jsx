import PropTypes from 'prop-types';

function TaskTitle({ title }) {
  return <h3>{title}</h3>;
}

TaskTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskTitle;
