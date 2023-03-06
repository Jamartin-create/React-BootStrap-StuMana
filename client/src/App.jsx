import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import AddOrEdit from './components/AddOrEdit';
import './css/App.css'
import Detail from './components/Detail';

function App() {
  return (
    //最外层
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="true"
              aria-controls="navbar"
            >
              <span className="sr-only">学生管理系统</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="navbar-brand">学生信息管理</span>
          </div>
          <div
            id="navbar"
            className="navbar-collapse collapse in"
            aria-expanded="true"
          >
            <ul className="nav navbar-nav">
              <li className="active">
              <NavLink to='/home'>主页</NavLink>
              </li>
              <li>
              <NavLink to='/about'>关于我们</NavLink>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
              <NavLink to='/add'>添加</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container content">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/add' element={<AddOrEdit />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/'  element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
