import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import { MenuBar } from "components/common/menu-bar/Menubar";
const  Candidates = React.lazy(()=> import("./pages/candidates/Candidates"));
const DashBoard = React.lazy(()=> import('./pages/dashboard/Dashboard'));
const Groups = React.lazy(()=> import('./pages/groups/Groups'));
const Subjects = React.lazy(()=> import('./pages/subjects/Subjects'));

function App() {
  return (
    <>
      <MenuBar/>
      <Routes>
        <Route path="/"  element={<DashBoard/>}/>
        <Route path="/candidates" element={<Candidates/>}/>
        <Route path="/groups" element={<Groups/>}/>
        <Route path="/subjects" element={ <Subjects/> }/>
      </Routes>
    </>
  );
}
export default App;
