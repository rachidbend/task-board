import { useIcons } from '../../../context/IconProvider';
import styles from './IconPicker.module.css';
import PropTypes from 'prop-types';

function IconPicker({ register }) {
  const { icons } = useIcons();

  return (
    <div>
      <p className="modal-label">Icon</p>
      <fieldset className={`${styles.field}`} {...register('iconId')}>
        {icons.map(({ id, path }) => (
          <div key={`input-container-${id}`}>
            <input
              className={`${styles.input}`}
              name="icon-picker"
              type="radio"
              id={`icon-picker-${id}`}
            />
            <label className={`${styles.label}`} htmlFor={`icon-picker-${id}`}>
              <img src={path} alt="" />
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
IconPicker.propTypes = {
  register: PropTypes.func,
};

export default IconPicker;
