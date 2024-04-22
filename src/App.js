import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components'
import { Dashboard, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Stock , Login, Register } from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css'

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  const isLoginPage = window.location.pathname === '/';
  const isRegisterPage = window.location.pathname === '/register';

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {!isLoginPage && !isRegisterPage &&(
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent 
                content="Settings" 
                position="Top"
              >
                <button 
                  type="button" 
                  className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}> 
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
          )} 
          {!isLoginPage && !isRegisterPage &&(
            <div className={activeMenu ? "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" : "w-0 dark:bg-secondary-dark-bg"}>
              <Sidebar />
            </div>
          )} 
          <div className={
            `dark:bg-main-dark-bg bg-main-bg min-h-scren w-full 
            ${activeMenu && !isLoginPage ? 'md:ml-72' : 'flex-2'}`
            
          }>
            {!isLoginPage && !isRegisterPage &&(
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
            )} 

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Login and Register */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* DashBoard */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
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
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
