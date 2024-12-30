import { createContext, useContext, useState } from 'react';
import tasks from '../helpers/data';
import PropTypes from 'prop-types';

const tasksContext = createContext();
function TasksProvider({ children }) {
  const [tasksList, setTasksList] = useState(tasks);

  /**
   * Adds a new task to the list of tasks
   * A new task is given a random id and has a default title and description
   * The new task is added to the beginning of the list of tasks
   */
  function addTask() {
    const newId = Math.floor(Math.random() * (2 ** 32 - 1) + 2 ** 31);
    const newTask = {
      id: newId,
      title: 'New Task',
      description: 'This task is new and has no status',
      status: 'no-status',
      iconId: 1,
    };
    setTasksList([newTask, ...tasksList]);
  }

  return (
    <tasksContext.Provider value={{ tasksList, addTask }}>
      {children}
    </tasksContext.Provider>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.node,
};

export const useTasks = () => {
  const value = useContext(tasksContext);
  if (value === undefined) {
    throw new Error('useTasks must be used within a TasksProvider');
  }
  return value;
};

export default TasksProvider;
