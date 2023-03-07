import { Outlet, NavLink } from "react-router-dom";

function About(props) {
    return (
        <div>
            一个React练习（练习ReactRouter）
            联系我：
            <NavLink to={'tel'}>电话</NavLink>
            <NavLink to={'email'}>邮箱</NavLink>
            <Outlet />
        </div>
    );
}

export default About;