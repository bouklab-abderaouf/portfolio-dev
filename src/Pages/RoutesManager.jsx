import React, { createContext, useRef } from "react";


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
import {Footer } from "../components/Footer";

export const RefContext = createContext();

function Layout() {
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <RefContext.Provider value={{ myRef1, myRef2, myRef3 }}>
      <div className={`w-full font-Montserrat`}>
        <Navbar scrollToRef={scrollToRef} />
        <Outlet />
        {/* <Footer scrollToRef={scrollToRef}/> */}
      </div>
    </RefContext.Provider>
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
