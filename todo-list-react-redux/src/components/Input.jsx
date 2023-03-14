import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../redux2/todolistSlice';

function Input(props) {
    const [value, setValue] = useState("")
    const dispatch = useDispatch();
    
    function handleClick(){
        dispatch(add(value));
        setValue("");
    }
    return (
        <div className='form-inline'>
            <input 
                type="text"
                className='form-control'
                placeholder='请输入待办事项'
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
            <button
                className='btn btn-primary' 
                style={{
                    marginLeft: '10px'
                }}
                onClick={handleClick}
            >提交</button>
        </div>
    );
}

export default Input;