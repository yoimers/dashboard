import "./App.css"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { useState } from "react"
import { FiSettings } from "react-icons/fi"
import { Route, Routes } from "react-router-dom"
import { Navbar, Pie, Sidebar, Stacked } from "./components"
import {
  Orders,
  Customers,
  Kanban,
  Editor,
  Calendar,
  ColorPicker,
  Line,
  Area,
  Bar,
  Financial,
  ColorMapping,
  Pyramid,
  Ecommerce,
  Employees,
} from "./pages"
import { useRecoilState } from "recoil"
import { activeMenuState } from "./contexts/activeMenu"

const App = () => {
  const [activeMenu, setActiveMenu] = useRecoilState(activeMenuState)
  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="TopLeft">
          <button
            className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
            style={{ background: "blue", borderRadius: "50%" }}>
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }>
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
