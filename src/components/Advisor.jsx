import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import dicovercircle from "../assets/discover-circle.png";
import { Link } from "react-router-dom";

const Advisor = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center ">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                      Project Advisor
                    </div>
                  </div>
                </div>
                <div className="w-full flex p-8 text-[20px] place-content-center mt-3 font-semibold">
                  Ask your academia advisor anything?
                </div>
                <div className="w-full flex place-content-center mb-5">
                  <input
                    type="text"
                    placeholder="Enter your question here"
                    className="w-[535px] border-2 border-grey-30 rounded-[8px] p-3"
                  />
                </div>

                <div className="w-full flex items-center gap-7 mt-5 px-20">
                  <div className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
                    <div className="flex flex-1 items-start px-5 pt-5">
                      <div className="mr-4">
                        <div className="w-[16px] h-[16px] border-2 border-green-800 rounded-full"></div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Project Advice
                        </div>
                        <div className="text-[12px]">
                          Get the information you need to get through student
                          clearance quickly and easily.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full mb-2">
                      <div className="border-b border-grey-30 my-2 h-full"></div>
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[55px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Get started now
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
                    <div className="flex flex-1 items-start px-5 pt-5">
                      <div className="mr-4">
                        <div className="w-[16px] h-[16px] border-2 border-green-800 rounded-full"></div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Online Tutor
                        </div>
                        <div className="text-[12px]">
                          Get the information you need to get through student
                          clearance quickly and easily.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full mb-2">
                      <div className="border-b border-grey-30 my-2 h-full"></div>
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[55px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Get started now
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
                    <div className="flex flex-1 items-start px-5 pt-5">
                      <div className="mr-4">
                        <div className="w-[16px] h-[16px] border-2 border-green-800 rounded-full"></div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Fun
                        </div>
                        <div className="text-[12px]">
                          Get the information you need to get through student
                          clearance quickly and easily.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full mb-2">
                      <div className="border-b border-grey-30 my-2 h-full"></div>
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[55px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Get started now
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex p-5 place-content-center mt-5 font-semibold">
                  Your conversations
                </div>

                <div className="w-full flex flex-col items-center place-content-center">
                  <div className="flex justify-between items-start p-5 mb-5 bg-green-800 rounded-2xl h-[100px] w-[535px]">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[40px] h-[40px] border-2 border-grey-20 rounded-full overflow-hidden">
                          <img
                            src={dicovercircle}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-white text-[14px]">
                          Advisor AI
                        </div>
                        <div className="text-[12px] text-shades-white">
                          Discover the power of AI and how it can help you reach
                          your educational goals.
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-white ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Continue
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start p-5 bg-shades-white rounded-2xl h-[100px] w-[535px]">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[40px] h-[40px] border-2 border-grey-20 rounded-full overflow-hidden">
                          <img
                            src={dicovercircle}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Biodata
                        </div>
                        <div className="text-[12px] text-shades-black">
                          This part of your biodata provides essential
                          information about your identity.
                        </div>
                      </div>
                    </div>
                    <Link to="/advisor-chatbot" className="flex">
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Continue
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </Link>
                  </div>

                  <div className="flex justify-between items-start p-5 mt-5 bg-shades-white rounded-2xl h-[100px] w-[535px]">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[40px] h-[40px] border-2 border-grey-20 rounded-full overflow-hidden">
                          <img
                            src={dicovercircle}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Biodata
                        </div>
                        <div className="text-[12px] text-shades-black">
                          This part of your biodata provides essential
                          information about your identity.
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Continue
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Advisor;
