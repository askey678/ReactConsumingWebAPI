
import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Context/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();


  console.log("In Require Auth " + auth?.token + "  and  " + auth?.roles);

  // Check if authentication data has been loaded
  if (auth === null) {
    console.log("authh is null here");

    // Alternatively, you can redirect to a login or unauthorized page
    return <Navigate to="/unauthenticated" state={{ from: location }} replace />;
  }

  console.log("In Require Auth "+ auth.token +"  and  "+ auth.roles);
  if (!auth?.token) {
    // If no token in storage, redirect to login page
    console.log("first condition");
    return <Navigate to="/unauthenticated" state={{ from: location }} replace />;
  }
  if (!allowedRoles || allowedRoles.length === 0) {
    // If no allowedRoles prop is provided or it's an empty array, allow access to no pages
    return <Navigate to="/unauthorized" state={{from: location}} replace />;
  }

  // Check if the user has the required roles
  const hasAllowedRoles = allowedRoles.some((role) => auth?.roles?.includes(role));

  console.log(hasAllowedRoles);
  console.log(allowedRoles);

  if (hasAllowedRoles) {
    // If user has allowed roles, render the nested routes
    console.log("i found some role for authorisation");
    return <Outlet />;
  } else {
    // If user does not have allowed roles, redirect to unauthorized page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
