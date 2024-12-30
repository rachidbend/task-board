import ModalHeader from './modalHeader/ModalHeader';
import TaskDescriptionInput from './textInputs/TaskDescriptionInput';
import TaskNameInput from './textInputs/TaskNameInput';
import IconPicker from './iconPicker/IconPicker';
import StatusPicker from './statusPicker/StatusPicker';

function Modal() {
  return (
    <div>
      <ModalHeader onClose={() => {}}>Task details</ModalHeader>
      <div>
        <TaskNameInput register={() => {}} />
        <TaskDescriptionInput register={() => {}} />
        <IconPicker register={() => {}} />
        <StatusPicker register={() => {}} />
      </div>
      <div>
        <button>Delete</button>
        <button>Save</button>
      </div>
    </div>
  );
}

export default Modal;
