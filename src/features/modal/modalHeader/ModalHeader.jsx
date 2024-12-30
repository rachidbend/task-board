import PropTypes from 'prop-types';
import styles from './ModalHeader.module.css';

function ModalHeader({ children, onClose }) {
  return (
    <div className={`${styles.modalHeader}`}>
      <h3 className={`${styles.heading}`}>{children}</h3>
      <button onClick={onClose} className={`${styles.closeButton}`}>
        <img
          className={`${styles.closeIcon}`}
          src="./close-round-duotone.svg"
          alt="close modal icon"
        />
      </button>
    </div>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
