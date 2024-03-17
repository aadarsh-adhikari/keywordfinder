import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars ,faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Header() {
   const [open , setOpen] =useState(false)
   const navItemes =[
    {navname: "Price", links: '/'},
    {navname: "Features", links: '/'},
    {navname: "Resources", links: '/'},

  ];
  return (
      <nav className="flex lg:justify-center items-center mt-8">
      <div className=" lg:flex lg:w-[80%]  h-16 items-center font-semibold max-lg:text-center ">
        <div className="text-4xl max-sm:text-3xl cursor-pointer max-lg:ml-24 max-sm:ml-5">
          Keyword Finder
        </div>
        <div className={`lg:flex justify-between lg:w-[62%] items-center text-xl max-lg:fixed max-lg:h-[50vh] max-lg:z-10 max-lg:bg-red-600 max-lg:w-full max-lg:mt-2 ${open ? 'max-lg:top-20 transition-all duration-500 ease-in' : 'max-lg:top-[-150%] transition-all duration-500 ease-in'}`}>
      <ul className="flex lg:ml-9 max-lg:flex-col max-lg:mt-16 " >
          {
            navItemes.map((link)=>(
              <li key={link.navname} className="p-2 max-lg:hover:bg-red-300 transition duration-150 delay-100 ease-in-out">
              <a href={link.links}>{link.navname}</a>
              </li>
            ))
          }
        </ul>
          <ul className="flex lg:items-center max-lg:flex-col ">
            <li className="p-2 transition duration-150 delay-100 ease-in-out max-lg:hover:bg-red-300">Login</li>
            <li className="lg:rounded-lg lg:ml-2 lg:bg-purple-400 lg:hover:text-white lg:hover:bg-purple-600 lg:px-3 lg:py-1 max-lg:p-2 text-xl max-lg:hover:bg-red-300 ">Sign in</li>
          </ul>
        </div>
      </div>
      <div className=" lg:hidden cursor-pointer  right-5 text-3xl z-20   ">
        <FontAwesomeIcon icon={open?faXmark:faBars} onClick={()=> setOpen (!open)} className="top-[45px] right-5 absolute" />
      </div>

    </nav>
    
  );
}
export default Header;
