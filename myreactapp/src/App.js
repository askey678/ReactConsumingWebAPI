import MasterPage from "./Pages/RouteMaster";
import React from "react";
import AuthProvider from "./Context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<MasterPage/>} /> 
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
