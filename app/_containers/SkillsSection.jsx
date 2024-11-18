import skills from "@/app/_assets/pgarg.jpg";
import { DiAptana } from "react-icons/di";
import { BiFootball } from "react-icons/bi";
import kanav from "@/app/_assets/kanav.jpg";
//import i2 from '../../_assets/i2.jpg';
//import kanav from '../../_assets/kanav.jpg';
import tushar from "@/app/_assets/tushar.png";
import nic from "@/app/_assets/nic.png";
import sahil from "@/app/_assets/sahil.jpg";
import neela from "@/app/_assets/neela.png";
import adi from "@/app/_assets/adi.png";

 
const SkillsSection = () => {
  return (
    <section
      id="garg"
      className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8"
    >
      <div className="flex items-center justify-center w-full pt-6 h-full max-w-screen-2xl border-t border-[#2e2e2e] mx-auto">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div className="flex items-start justify-start w-full h-full flex-col md:flex-row gap-[2rem] border-b border-[#2e2e2e] py-12">
            <div className="flex items-start justify-start w-full md:w-[50%] flex-col gap-2">
              <div className="flex flex-col h-full w-full items-start justify-start text-red-500">
                <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-4xl sm:text-6xl md:text-5xl lg:text-6xl  duration-500 ">
                  WE ARE CAAN
                </h1>
                <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-5xl lg:text-7xl">

                </h1>
              </div>
              <div className="flex items-end justify-end w-full h-full pt-6">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex w-[65%] md:w-[50%] items-start justify-start">
                    <p className="text-white text-2xl lg:text-4xl font-semibold uppercase w-full h-full hover:text-yellow-500 transition ease-in-out duration-500">
                    We celebrate legacies that inspire !!<br></br>
                    Empowering the future through innovation and unity!!
                    </p>
                  </div>
                  <DiAptana className=" mt-[180px] w-[70px] h-[70px] animate-spin-slow text-[#f5c833]" />
                  <DiAptana className="w-[70px] h-[70px] animate-spin-slow text-[#e6e0e0]" />
                  <DiAptana className=" mt-[180px] w-[70px] h-[70px] animate-spin-slow text-[#f73030]" />
                </div>
              </div>
            </div>
            <div className="flex  items-center justify-center w-full md:w-[50%]">
              <img
                src={skills.src}
                alt="skills"
                className="object-cover w-full h-full rounded-full hover:scale-105 transition ease-in-out duration-700"
              />
            </div>
          </div>
          <div id="people" className="w-full h-full grid md:grid-cols-3 items-center justify-start s:grid-cols-2 grid-cols-1 border-b border-[#2e2e2e]">

            <div className="w-full h-64 flex items-end justify-end p-4 s:pl-0 s:border-r border-b border-[#2e2e2e]">
              <div className="w-full  flex items-center justify-between text-white">
                <img className=" w-full rounded-full h-full object-cover  overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700 " src={kanav.src} alt="Kanav Kapoor"></img>
                <p className="w-[75%]  h-full font-bold font-mattone hover:text-yellow-500 text-xs sm:text-sm lg:text-base transition ease-in-out duration-500">Kanav Kapoor</p>

                <BiFootball className="w-10 h-10 flex text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 md:border-r border-b border-[#393838]">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src={tushar.src} alt="Tushar Bhatnagar"></img>
                <p className="hover:text-yellow-500 transition ease-in-out duration-500 w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Tushar Bhatnagar</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 md:pl-4 s:pl-0 md:pr-0 border-b border-[#2e2e2e] md:border-r-0 s:border-r">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src={nic.src} alt="Nickita Kumar"></img>
                <p className=" hover:text-yellow-500 transition ease-in-out duration-500 w-[75%] h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Nickita Kumar</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 pl-4 md:pl-0 md:border-r border-b md:border-b-0 border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src={sahil.src} alt="Sahil Devid"></img>
                <p className="w-[75%] hover:text-yellow-500 transition ease-in-out duration-500 h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Sahil Devid</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 s:border-r border-b md:border-b-0 border-[#2e2e2e]">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src={neela.src} alt="Dr. Neelakshi Majumdar"></img>
                <p className="w-[75%] hover:text-yellow-500 transition ease-in-out duration-500 h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Dr. Neelakshi Majumdar</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
            <div className="w-full h-64 flex items-end justify-end p-4 s:pr-0">
              <div className="w-full flex items-center justify-between text-white">
                <img className="w-full rounded-full h-full object-cover overflow-hidden mx-[12px] hover:scale-105 transition ease-in-out duration-700" src={adi.src} alt="Aaditya Khanna"></img>
                <p className="w-[75%] hover:text-yellow-500 transition ease-in-out duration-500 h-full font-bold font-mattone text-xs sm:text-sm lg:text-base">Aaditya Khanna</p>
                <BiFootball className="w-10 h-10 text-[#e6e0e0] animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
