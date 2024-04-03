import PropTypes from 'prop-types';
import { useState } from 'react';

export default function EditText({ typeElement, classElement, textElement }) {
    const [name, setName] = useState(textElement);
    const [isEditing, setIsEditing] = useState(false);

    const Element = typeElement;

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleClick() {
        setIsEditing(true);
    }

    function handleBlur() {
        setIsEditing(false);
    }

    return (
        <>
            {isEditing ? (
                <textarea className={classElement} onBlur={handleBlur} onChange={handleChange} autoFocus>{name}</textarea>
            ) : (
                <Element className={classElement} onClick={handleClick}>{name}</Element>
            )}
        </>
    );
}

EditText.propTypes = {
    typeElement: PropTypes.string.isRequired,
    classElement: PropTypes.string.isRequired,
    textElement: PropTypes.string.isRequired
};