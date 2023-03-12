import React from 'react';
import { useState } from 'react';
import { addListAction } from '../redux/actions';

function Input(props) {
    const [value, setValue] = useState("")
    
    function handleClick(){
        //将用户填写的内容提交到仓库
        //dispatch 方法会怕发一个action对象到reducer里面
        //action描述对象，该对象会被dispatch（派发到reducer里）
        props.store.dispatch(addListAction(value));
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