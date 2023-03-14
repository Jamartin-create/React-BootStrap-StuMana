import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change, del } from '../redux2/todolistSlice';

function List(props) {

    const {list} = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    function handleClick(id){
        dispatch(del(id));
    }

    function handleChange(id){
        dispatch(change(id));
    }
    
    const lis = list.map((it, id)=> {
        return (
            <li key={id} className='list-group-item' style={{
                textDecoration: it.status ? 'line-through' : 'none',
                cursor: 'pointer'
            }} >
                <span onClick={() => handleChange(id)}>{it.content}</span>
                <button
                    type='button'
                    className='close'
                    onClick={() => handleClick(id)}
                >&times;</button>
            </li>
        )
    })

    return (
        <div style={{
            marginTop: '20px'
        }}>
            <ul className='list-group'>
                {lis}
            </ul>
        </div>
    );
}

export default List;