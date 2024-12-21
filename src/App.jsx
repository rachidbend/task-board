import './App.css';
import IconDisplay from './components/iconDisplay/IconDisplay';
import StatusIndicator from './components/statusIndicator/StatusIndicator';
import TaskDescription from './features/task/desciption/TaskDescription';
import Task from './features/task/Task';
import TaskTitle from './features/task/title/TaskTitle';

const tasks = [
  {
    id: 1,
    title: 'Task in progress',
    description: '',
    status: 'in-progress',
    iconId: 1,
  },
  {
    id: 2,
    title: 'Task completed',
    description: '',
    status: 'completed',
    iconId: 4,
  },
  {
    id: 3,
    title: 'Task wont do',
    description: '',
    status: 'wont-do',
    iconId: 6,
  },
  {
    id: 4,
    title: 'Task to do',
    description: 'This task is new and has no status',
    status: 'no-status',
    iconId: 1,
  },
];

function App() {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

// 1) main view, shows a header, a list of tasks, and a add new task
// 2) each task has an icon, title, description, and a status indicator
// 3) when you click add new task, a new task is added with default title
// 4) if you click on a task, a modal apears
//  the modal allows you to change the title, description, icon, and status
// there a re two buttons in the modal, a save, and delete
// the save button saves your changes
// the delete button deletes the task

export default App;
