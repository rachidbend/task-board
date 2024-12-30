import { useTasks } from '../../context/tasksContext';
import AddNewTask from '../../features/addNewTask/AddNewTask';
import Modal from '../../features/modal/Modal';
import Task from '../../features/task/Task';
import Header from '../Header/Header';
import styles from './Layout.module.css';

function Layout() {
  const { tasksList: tasks, addTask } = useTasks();

  return (
    <div className={`${styles.container}`}>
      <Header />
      <main className={`${styles.main}`}>
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </main>
      <AddNewTask taskHandler={addTask} />
      <div>
        <Modal />
      </div>
    </div>
  );
}

export default Layout;
