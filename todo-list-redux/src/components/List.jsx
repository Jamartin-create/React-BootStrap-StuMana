import React from 'react';
import { changeListAction, delListAction } from '../redux/actions';

function List(props) {

    function handleClick(id){
        props.store.dispatch(delListAction(id))
    }

    function handleChange(id){
        props.store.dispatch(changeListAction(id));
    }

    //在redux，通过.getState() 来获取仓库数据
    const lis = props.store.getState().list.map((it, id)=> {
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