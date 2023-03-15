import React, { useState } from 'react'
import { useEffect } from 'react';
import { getStuList, getStudentsByName } from '../api/student';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import Alert from './Alert';
import { getStuListAsync } from '../redux/stuSlice';

function Home(props) {
    const {list} = useSelector((state) => state.stu);
    const dispatch = useDispatch();
    const [stuList, setStuList] = useState([]);
    const [searchItem, setSearchItem] = useState([]);

    useEffect(()=>{
        if(list.length === 0){
            dispatch(getStuListAsync())
        }
        setStuList(list);
    }, [list, dispatch])

    
    const [alertInfo, setAlertInfo] = useState(null)
    const location = useLocation();
    useEffect(() => {
        if(location.state){
            setAlertInfo(location.state)
        }
    }, [location])

    function getList(){
        getStuList().then(res=>{
            setStuList(res);
        })
    }

    function changeHanlder(value){
        setSearchItem(value)
    }
    function handleKeyDown(code){
        if(code !== 'Enter') return;
        if(searchItem.length === 0) {
            getList();
            return;
        }
        getStudentsByName(searchItem).then(res=>{
            setStuList(res);
        })
    }
    const trs = stuList.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.phone}</td>
                <td>
                    <NavLink to={`/detail/${item.id}`}>详情</NavLink>
                </td>
            </tr>
        )
    })

    const showAlert = alertInfo ? <Alert {...alertInfo} /> : null;
    return (
        <div>
            {showAlert}
            <h1>学生列表</h1>
            <input 
                type="text"
                placeholder='搜索'
                value={searchItem}
                onKeyDown={(e) => handleKeyDown(e.code)}
                onChange={(e) => changeHanlder(e.target.value)}
                className='form-control'
            />
            {/*表格*/}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>联系方式</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
        </div>
    );
}

export default Home;