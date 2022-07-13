import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PopupReport from './components/PopupReport/PopupReport';
import AdminHome from './pages/Admin/AdminHome/AdminHome';
import Documentary from './pages/Admin/Documentary/Documentary';
import DrawingBuilding from './pages/Admin/DrawingBuilding/DrawingBuilding';
import DrawingOverView from './pages/Admin/DrawingOverView/DrawingOverView';
import Edit from './pages/Admin/Edit/Edit';
import Information from './pages/Admin/Information/Information';
import ManageTask from './pages/Admin/ManageTask/ManageTask';
import OverView from './pages/Admin/OverView/OverView';
import Payroll from './pages/Admin/Payroll/Payroll';
import Register from './pages/Admin/Register/Register';
import DocumentHome from './pages/Document/DocumentHome/DocumentHome';
import Login from './pages/Login/Login';
import UserHome from './pages/User/UserHome/UserHome';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';




function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='admin' element={<AdminTemplate />}>
          <Route path='adminhome' element={<AdminHome />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='edit' element={<Edit />}></Route>
          <Route path='information' element={<Information />}></Route>
          <Route path='overview' element={<OverView />}></Route>
          <Route path='drawingoverview' element={<DrawingOverView />}></Route>
          <Route path='drawingbuilding' element={<DrawingBuilding />}></Route>
          <Route path='payroll' element={<Payroll />}></Route>
          <Route path='documentary' element={<Documentary />}></Route>
          <Route path='managetask' element={<ManageTask />}></Route>
          <Route path='popupreport' element={<PopupReport />}></Route>



        </Route>

        <Route path='user' element={<AdminTemplate />}>
          <Route path='userhome' element={<UserHome />}></Route>
        </Route>
        <Route path='document' element={<AdminTemplate />}>
          <Route path='documenthome' element={<DocumentHome />}></Route>
        </Route>



        <Route path='/' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
