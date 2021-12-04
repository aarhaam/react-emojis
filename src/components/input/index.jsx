import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({ onChange, value }) => {
    return (
        <input type="text" 
            className={styles.input}
            onChange={onChange}
            placeholder="Search"
            value={value}
        />
    )
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input;