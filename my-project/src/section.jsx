import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBarChart } from "@fortawesome/free-solid-svg-icons";

import logo from "./assets/illu.svg";
function Section() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="flex justify-center  max-lg:flex-col-reverse  mt-14 w-[80%] mx-8  min-h-[520px]">
            <div className="text-left">
              <h1 className="text-cyan-500  lg:text-7xl text-5xl font-bold mt-11 mb-9 select-none">
                keyword for your website
              </h1>
              <h2 className="mb-9 text-2xl text-purple-500  font-serif lg:w-[400px]">
                Make your Website rank on top with the help of perfect match of
                the keyword
              </h2>
              <button className="rounded-[18px] px-5 py-4 text-2xl text-white font-semibold bg-purple-600 hover:bg-purple-800">
                Get Started
              </button>
            </div>
            <div>
              <img src={logo} alt="hehe" draggable="false" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="lg:h-28 h-16  bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-around items-center lg:w-[70%] w-[90%] rounded-lg:">
            <input
              className="rounded-md lg:w-[80%] w-[70%] lg:h-11 h-7 border-none focus:outline-blue-400 text-center placeholder-black "
              type="text"
              name=""
              id=""
              placeholder="Enter your keyword"
            />
            <button className="lg:text-lg: text-sm bg-cyan-300 hover:bg-cyan-400 transition rounded-xl  lg:px-5 px-3  lg:py-2 py-1">
              Submit
            </button>
          </div>
        </div>
        <div className="flex justify-center bg-gray-100 lg:pb-32  mt-[-40px] ">
          <div className="mt-[100px] max-lg:mb-[100px]">
            <div className="mb-16">
              <h2 className="text-5xl font-bold text-center">Our services</h2>
              <p className="mt-7 text-center text-xl font-semibold text-gray-400">
                Boost your business on top with the
                <br className="hidden lg:block " /> top quality of keywords
              </p>
            </div>
            <div className=" flex justify-center lg:flex-row flex-col relative ">
              <div className="lg:block hidden after:content-[''] lg:w-[50%] w-2px lg:h-2 h-[50%]  bg-purple-600 absolute top-[50%]"></div>

              <div className=" lg:w-[25%] bg-white p-7 m-4 relative">
                <div className="flex justify-center items-center absolute top-[-20%] left-14 bg-yellow-200 rounded-[50%] w-20 h-20 cursor-pointer ">
                  <FontAwesomeIcon
                    className="text-4xl text-orange-500"
                    icon={faEnvelope}
                  />
                </div>
                <h3 className="font-bold text-2xl mt-4">Brand Recognition</h3>
                <p className="text-gray-500 font-normal text-xl mt-3">
                  Boost your brand recognition with good keywords. A good
                  keyword help your content reach to a large amount of audience.
                </p>
              </div>

              <div className=" lg:w-[25%]  bg-white p-7 m-4 translate-y-10 ">
                <div className="flex justify-center items-center absolute top-[-20%] left-14 bg-yellow-200 rounded-[50%] w-20 h-20 cursor-pointer ">
                  <FontAwesomeIcon
                    className="text-4xl text-orange-500"
                    icon={faBarChart}
                  />
                </div>
                <h3 className="font-bold text-2xl mt-4">Brand Recognition</h3>
                <p className="text-gray-500 font-normal text-xl mt-3">
                  Boost your brand recognition with good keywords. A good
                  keyword help your content reach to a large amount of audience.
                </p>
              </div>
              <div className=" lg:w-[25%]  bg-white p-7 m-4 translate-y-16	">
                <div className="flex justify-center items-center absolute top-[-20%] left-14 bg-yellow-200 rounded-[50%] w-20 h-20 cursor-pointer ">
                  <FontAwesomeIcon
                    className="text-4xl text-orange-500"
                    icon={faEnvelope}
                  />
                </div>
                <h3 className="font-bold text-2xl mt-4">24/7 service</h3>
                <p className="text-gray-500 font-normal text-xl mt-3">
                  Experience our soothing massages anytime, day or night, with
                  our 24/7 service. Relax and rejuvenate with our skilled
                  therapists, ready to serve you round the clock
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
