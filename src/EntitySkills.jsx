import { useState } from "react";
import EditText from './EditElement';

export default function EntitySkills() {
    const [skills, setSkills] = useState([]);

    function handleClickAdd() {
        setSkills([...skills, {
            id: Math.random().toString(36).substring(7),
            skill: 'New skill',
        }]);
    }

    function handleClickDelete(id) {
        setSkills(skills.filter(item => item.id !== id));
    }

    return (
        <ul>
            {skills.map(item => (
                <li key={item.id}>
                    <button className='btn' onClick={() => handleClickDelete(item.id)}>X</button>
                    <EditText typeElement="p" textElement={item.skill} />
                </li>
            ))}
            <button className='btn' onClick={handleClickAdd}>+ Add new skill</button>
        </ul>
    );
}