import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";
function Footer(){
 return(
    <footer className="h-96 text-center">
        <div className="  bg-[url('../src/assets/bgdesktop.svg')]  bg-no-repeat bg-right bg-purple-950  p-16">
            <h2 className=" text-4xl mb-5 text-white font-semibold">Boost your links today</h2>
        <button className="rounded-[13px] px-3 py-2 text-xl text-white font-semibold bg-cyan-400 hover:bg-cyan-600">
                Get Started
              </button>
        </div>
        <div className="md:flex justify-around bg-black text-white p-28 max-sm:p-3">
            <div className="text-3xl text-center self-center ">
            <h2>Keyword Finder</h2>
            </div>
           <div className="footer md:flex text-xl font-semibold " >
           <div className="mx-12 text-left max-lg:mt-7">
                <h2 >Features</h2>
                <ul className="text-neutral-400 mt-3">
                    <li>keyword </li>
                    <li>Branded Keyword</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="mx-12 text-left max-lg:mt-7">
                <h2 >Resources</h2>
                <ul className="text-neutral-400 mt-3">
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
              <div className="mx-12 text-left max-lg:mt-7">
                <h2>Company</h2>
                <ul className="text-neutral-400 mt-3">
                    <li>Teams</li>
                    <li>Abouts</li>
                    <li>Privacy policy</li>
                    <li>Contact</li>

                </ul>
            </div>

           </div>
           <div>
            <ul>
            </ul>
           </div>
        </div>
        
    </footer>
 )
}
export default Footer;