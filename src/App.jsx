import './App.css';
import StatusIndicator from './components/statusIndicator/StatusIndicator';
import TaskDescription from './features/task/desciption/TaskDescription';
import TaskTitle from './features/task/title/TaskTitle';

function App() {
  return (
    <div>
      <TaskTitle title="Task in progress" />
      <TaskDescription description="Work on a Challenge on devChallenges" />
      <StatusIndicator status="completed" />
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
