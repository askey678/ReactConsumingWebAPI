
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LogIn from "./Public/Login";
import HomePage from "./Public/HomePage";
import Feature from "./Public/Features";
import SignUp from "./Public/SignUp";
import About from "./Public/About";
import MainPage from "./User/MainPage";
import UserService from "./User/UserServices";
import UserProfile from "./User/UserProfile";
import AdminPage from "./Admin/AdminPage";
import UserDetails from "../Components/UserDetails";
import RoleDetails from "../Components/RoleDetails";
import ManageUser from "./Admin/ManageUser";
import ManageRole from "./Admin/ManageRole";
import AdminProfile from "./Admin/AdminProfile";
import RequireAuth from "../Authentication/RequireAuth";
import Unauthorised from "./Public/Unauthorised";
import Unauthenticated from "./Public/Unauthenticated";


const ROLES = {
  'User': 'User',
  'ADMIN': 'ADMIN'
}

function MasterPage() {

  return (

    <Routes>
        // public routes
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/unauthorized" element={<Unauthorised />} />
      <Route path="/unauthenticated" element={<Unauthenticated />} />


        // private routes for user
      <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/user" element={<MainPage />} />
        <Route path="/user/service" element={<UserService />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Route>

        // private routes for admin
      <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/users" element={<ManageUser />} />
        <Route path="/admin/roles" element={<ManageRole />} />
        <Route path="/admin/users/details" element={<UserDetails />} />
        <Route path="/admin/roles/details" element={<RoleDetails />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
      </Route>
    </Routes>



  )
}

export default MasterPage;