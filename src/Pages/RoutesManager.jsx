import React from 'react'
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from "react-router-dom";

import { Home } from "./Home"
import { About } from "./About"
import { Navbar } from "../components/Navbar"
import { Projects } from './Projects';

function Layout() {
  return (
    <div className={`w-full font-Montserrat`}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default function RoutesManager() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={ <Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
