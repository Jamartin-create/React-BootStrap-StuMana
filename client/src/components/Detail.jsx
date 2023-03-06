import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { getStuByID, delStuByID } from '../api/student'

function Detail(props) {
    const navigator = useNavigate();
    const [stu, setStu] = useState({
        name: "",
        age: "",
        phone: "",
        email: "",
        education: "benke",
        graduationschool: "",
        profession: "",
        profile: ""
    })
    const {id} = useParams();
    useEffect(()=>{
        getStuByID(id).then(res=>{
            setStu(res)
        })
    }, [id])

    function back(){
        navigator('/home')
    }
    function del(){
        if(window.confirm('你确定要删除这个用户吗')){
            delStuByID(id).then(_=>{
                navigator('/home', {
                    state: {
                        info: '用户删除成功',
                        type: 'success'
                    }
                })
            })
        }
    }

    function edit(){
        navigator('/add', {
            state: {
                id
            }
        })
    }

    return (
        <div className='details container'>
            <button className='btn btn-default' onClick={back}>返回</button>
            <h1 className="page-header">
                {stu.name}
                <span className="pull-right">
                    <button className="btn btn-primary" onClick={edit} style={{marginRight: 10}}>修改</button>
                    <button className="btn btn-danger" onClick={del}>删除</button>
                </span>
            </h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-phone">电话：{stu.phone}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-headphones">年龄：{stu.age}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-envelope">邮箱：{stu.email}</span>
                </li>
            </ul>
            <ul className='list-group'>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-education">学历：{stu.education}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-road">毕业院校：{stu.graduationschool}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-blackboard">专业：{stu.profession}</span>
                </li>
                <li className="list-group-item">
                    <span className="glyphicon glyphicon-profile">个人简介：{stu.profile}</span>
                </li>
            </ul>
        </div>
    );
}

export default Detail;