import styles from './LoginForm.module.css';

const InputField = ({ type, placeholder, id, value, onChange }) => {
    return (
      <div className={styles.inputField}>
        {/* <div className={styles.inputWrapper}> */}
          {/* <div className={styles.inputContent}> */}
            <div className={styles.inputInner}>
              <label htmlFor={id} className={styles['visually-hidden']}>
                {placeholder}
              </label>
              <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value} // Controlled input
                onChange={onChange} // Handle input change
                aria-label={placeholder}
              />
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    );
  };
  
  export default InputField;
  