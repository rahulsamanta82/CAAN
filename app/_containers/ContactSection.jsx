import caan from "@/app/_assets/caan.jpg";
const ContactSection = () => {
  return (
    <section  id="contact" className="w-full flex items-center min-h-screen justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8">
      <div className="flex items-center justify-center pt-16 w-full h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
          <div className="flex items-center justify-center flex-col gap-[1.2rem] w-full">
            <div className=" flex items-center justify-center flex-col p-2 text-white uppercase text-center ">
              {/* <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl  md:text-7xl">
                LOOKING FOR A
              </h1>
              <h1 className="font-mattone font-bold text-3xl xs:text-4xl s:text-5xl sm:text-6xl md:text-7xl">
                POWERFUL WEBSITE? web side 
              </h1> */}

              <img  className=" w-full h-[450px] overflow-hidden rounded-3xl object-cover hover:scale-95 transition ease-in-out duration-700 " src={caan.src} alt="CEED LOGO"></img>
            </div>
            <div className="flex items-center justify-center ">
              <p className="hover:text-white transition ease-in-out duration-500 font-semibold uppercase text-[#807e7e] max-w-lg md:max-w-xl text-center text-md md:text-base ">
              The Chitkara Alumni Association Network (CAAN) empowers alumni to drive innovation and foster entrepreneurship. Aligned with the nation's vision for a thriving startup ecosystem, CAAN nurtures collaborative growth and impactful leadership. Through mentorship and networking, CAAN helps transform ideas into successful ventures.
              </p>
            </div>
            <div className="flex items-center justify-center">
            <a
              href="https://www.chitkara.edu.in/can/"
              className="bg-white hover:bg-transparent hover:border hover:border-white hover:text-white transition ease-in-out duration-500 border border-transparent rounded-full font-medium  flex items-center justify-center text-[#17191e] px-10 py-4 text-center text-lg"
            >
              Explore CAAN !!
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
