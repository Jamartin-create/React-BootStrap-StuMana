import { useEffect, useState } from "react";
import { getStuByID, saveStuList, updateStuByID } from "../api/student";
import { useLocation, useNavigate } from 'react-router-dom'

function AddOrEdit(props) {
    const navigate = useNavigate();
    const { state } = useLocation();
    let id = '';
    if(state && state.id) id = state.id;
    const [type, setType] = useState('add');
    const [stu, setStu] = useState({
      name: "",
      age: "",
      phone: "",
      email: "",
      education: "benke",
      graduationschool: "",
      profession: "",
      profile: "",
    })

    useEffect(()=>{
        if(!id) return
        setType('edit')
        getStuByID(id).then(res=>{
            setStu(res)
        })
    }, [id])

    function updateUserInfo(newInfo, attr){
        if(attr === 'age' && isNaN(newInfo)) return;
        const newStu = {...stu};
        newStu[attr] = newInfo;
        setStu(newStu);
    }

    function handleSubmit(e){
        e.preventDefault()
        for(let key in stu){
            if(!stu[key]) {
                alert('请完整填写表单!');
                return;
            }
        }
        if(type === 'add'){
            saveStuList(stu).then(_=>{
                navigate("/home", {
                    state: {
                        info: "用户添加成功",
                        type: "success",
                    }
                });
            });
        }else{
            updateStuByID(stu, id).then(_=>{
                navigate("/home", {
                    state: {
                        info: '用户编辑成功',
                        type: 'success'
                    }
                })
            })
        }
    }

    return (
        <div className="container">
            <h3 className="page-header">添加学生</h3>
            <form onSubmit={ handleSubmit }>
                <div className="well">
                    <div className="form-group">
                        <label>姓名</label>
                        <input value={stu.name} type="text" className="form-control" placeholder="请填写姓名"  onChange={(e) => updateUserInfo(e.target.value, 'name')}/>
                    </div>
                    <div className="form-group">
                        <label>年龄</label>
                        <input value={stu.age} type="text" className="form-control" placeholder="请填写年龄"  onChange={(e) => updateUserInfo(e.target.value, 'age')}/>
                    </div>
                    <div className="form-group">
                        <label>电话</label>
                        <input  value={stu.phone} type="text" className="form-control" placeholder="请填写电话"  onChange={(e) => updateUserInfo(e.target.value, 'phone')}/>
                    </div>
                    <div className="form-group">
                        <label>邮箱</label>
                        <input  value={stu.email} type="text" className="form-control" placeholder="请填写邮箱"  onChange={(e) => updateUserInfo(e.target.value, 'email')}/>
                    </div>
                    <div className="form-group">
                        <label>学历</label>
                        <select className="form-control" value={stu.education} onChange={(e) => updateUserInfo(e.target.value, 'education')}>
                            <option value="xiaoxue">小学</option>
                            <option value="chuzhong">初中</option>
                            <option value="gaozhong">高中或职高</option>
                            <option value="zhuanke">专科</option>
                            <option value="benke">本科</option>
                            <option value="shuoshi">硕士</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>毕业院校</label>
                        <input  value={stu.graduationschool} type="text" className="form-control" placeholder="请填写毕业院校"   onChange={(e) => updateUserInfo(e.target.value, 'graduationschool')}/>
                    </div>
                    <div className="form-group">
                        <label>职业</label>
                        <input  value={stu.profession} type="text" className="form-control" placeholder="请填写职业" onChange={(e) => updateUserInfo(e.target.value, 'profession')} />
                    </div>
                    <div className="form-group">
                        <label>自我介绍</label>
                        <textarea  value={stu.profile} className="form-control" placeholder="请填写自我介绍" onChange={(e) => updateUserInfo(e.target.value, 'profile')} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">提交</button>
            </form>
        </div>
    );
}

export default AddOrEdit;