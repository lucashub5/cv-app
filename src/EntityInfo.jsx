import { useState } from 'react';
import EditText from './EditElement';

export default function AddSection() {
    const [info, setInfo] = useState([]);

    function handleClickAdd() {
        setInfo([...info, {
            id: Math.random().toString(36).substring(7),
            entity: 'insertEntity',
            positionDescription: 'insertDescription',
            date: 'insertDate',
            moreDescriptions: [],
        }]);
    }

    function handleClickDelete(id) {
        setInfo(info.filter(item => item.id !== id));
    }

    function handleCLickAddMoreDesc(infoId) {
        const updatedInfo = info.map(item => {
            if (item.id === infoId) {
                return {
                    ...item,
                    moreDescriptions: [...item.moreDescriptions, {
                        id: Math.random().toString(36).substring(7),
                        moreDescription: 'insertMoreDescription',
                    }],
                };
            }
            return item;
        });
        setInfo(updatedInfo);
    }

    function handleClickDeleteMoreDesc(infoId, moreDescId) {
        const updatedInfo = info.map(item => {
            if (item.id === infoId) {
                return {
                    ...item,
                    moreDescriptions: item.moreDescriptions.filter(desc => desc.id !== moreDescId),
                };
            }
            return item;
        });
        setInfo(updatedInfo);
    }

    return (
        <>
            <ul>
                {info.map(item => (
                    <li key={item.id}>
                        <div className='entity-type'>
                            <div className='entity-header'>
                                <button className='btn delete' onClick={() => handleClickDelete(item.id)}>X</button>
                                <div>
                                    <EditText typeElement="h4" textElement={item.entity} />
                                    <EditText typeElement="p" textElement={item.positionDescription} />
                                </div>
                            </div>
                            <EditText typeElement="p" className='entity-date' textElement={item.date} />
                        </div>
                        <ul className='entity-desc'>
                            {item.moreDescriptions.map(desc => (
                                <li key={desc.id}>
                                    <button className='btn delete' onClick={() => handleClickDeleteMoreDesc(item.id, desc.id)}>X</button>
                                    <EditText typeElement="p" textElement={desc.moreDescription} />
                                </li>
                            ))}
                            <button className='btn' onClick={() => handleCLickAddMoreDesc(item.id)}>+ Add more Description</button>
                        </ul>
                    </li>
                ))}
                <button className='btn' onClick={handleClickAdd}>+ Add new entity</button>
            </ul>

        </>
    );
}

