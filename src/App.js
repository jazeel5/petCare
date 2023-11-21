import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Component/Dashboard";
import User from "./Component/User";
import { useState } from "react";
import ViewPet from "./Component/ViewPet";
import AddPet from "./Component/AddPet";
import Header from "./Component/Header";
import EditPet from "./Component/EditPet";

function App() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/dashboard' element={<Dashboard setSidebar={setSidebar} sidebar={sidebar} />} />
          <Route exact path='/viewpet' element={<ViewPet setSidebar={setSidebar} sidebar={sidebar} />} />
          <Route exact path='/addpet' element={<AddPet setSidebar={setSidebar} sidebar={sidebar} />} />

          <Route exact path='/editpet/:id' element={<EditPet setSidebar={setSidebar} sidebar={sidebar} />} />
          <Route exact path='/user' element={<User />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
