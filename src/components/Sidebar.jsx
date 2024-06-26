import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import   logo   from '../data/logo.png';
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();
  const navigate = useNavigate();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }
  
  // Logout
  const logout = () => {
    // ทำการตั้งค่าสถานะของ Navbar และ Sidebar เมื่อ Logout
    setActiveMenu(false);
    // รีเฟรชหน้าเว็บหลังจาก Logout
    navigate('/');

  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-base font-extrabold tracking-tight dark:text-white text-slate-900">
          <img src={logo} alt="Logo" className="h-8 w-auto" style={{ borderRadius:'50%' }} /> <span>Storage Corporation</span> 
          </Link>
          <TooltipComponent content="Close" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu((preActiveMenu) => !preActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-slate-400 mt-4 block">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className="mt-10">
          {links.map((item) => ( 
          <div key={item.title}>
            <p className="text-gray-400 m-3 mt-4 uppercase">
            {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink
                to={`/${link.name}`}
                key={link.name}
                onClick={handleCloseSideBar}
                
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor: ''
                })}

                className={({ isActive }) => isActive ? activeLink : normalLink}
              >
                {link.icon}
                <span className="capitalize">
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div> ))}
        </div>
        <div className="flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2">
          <button onClick={logout}>Logout</button>
        </div>
      </>)}
    </div>
  )
}

export default Sidebar