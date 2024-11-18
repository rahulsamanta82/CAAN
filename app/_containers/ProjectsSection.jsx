import floema from "@/app/_assets/innovest.jpg";
import aala from "@/app/_assets/i2.jpg";
import codingninjas from "@/app/_assets/techstars.jpg";
import happiness from "@/app/_assets/summit.jpg";
import marble from "@/app/_assets/marble.jpg";
import podcast from "@/app/_assets/podcast.jpg";
import Link from "next/link";
import TechnologySection from "./TechnologySection";
const projects = [
  {
    id: 1,
    title: "Global Week 2022 Magazine",
    description:
      "Chitkara University and Birmingham City University signed an MoU for collaboration, with CAAN’s Dr. Madhu Chitkara and Shivani Gautam.",
    image: floema.src,
    // link: "https://floema-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Entrepreneurship and Marketing",
    description:
      "CAAN Himachal Pradesh hosted the 'Alumni Connect Series' with Kanav Kapoor, sharing insights on entrepreneurship and marketing.",
   image: aala.src,
    // link: "https://aalav1.vercel.app/",
  },
  {
    id: 3,
    title: "launched the CEO@20 program",
    description:
      "CAAN launched the CEO@20 program at Chitkara University, featuring Divam Wadhwa (Chai Nagri) and Tushar Bhatnagar (VidBoard.ai).",
    image: codingninjas.src,
    // link: "https://coding-ninjas-cuiet.vercel.app/",
  },
  {
    id: 4,
    title: "Empower, Innovate, Inspire",
    description: "CAAN's 'Beyond Coding' event at Chitkara University, featuring Sahil David, inspired future tech innovators in AI/ML.",
    image: happiness.src,
    // link: "https://happiness-center.vercel.app/",
  },
  {
    id: 5,
    title: "Alumni Contribution",
    description: "Divam Wadhwa contributed Rs 1 Lakh to Chitkara University caan.",
    image: marble.src,
    // link: "https://marble-studio.vercel.app/",
  },
  {
    id: 6,
    title: "Podcast",
    description: "'Legacy Cup 2023' united alumni and faculty in a spirited cricket match.",
    image: podcast.src,
    // link: "https://po dcast-tau-bay.vercel.app/",
  },
];
const ProjectsSection = () => {
  return (
    <section
      id="events"
      className="w-full flex items-center justify-center h-full md:border-r md:border-l border-[#2e2e2e] p-2 sm:p-8"
    >
      <div className="flex items-center justify-center w-full pt-14 h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
          <div className="flex items-center justify-center flex-col gap-[2.5rem] w-full">
            <div className="w-full flex items-start justify-start flex-col text-white hover:text-yellow-500 transition ease-in-out duration-500 uppercase">
              <h1 className="font-mattone font-bold text-xl xs:text-2xl s:text-4xl md:text-5xl lg:text-6xl xl:text-[5.2rem] ">
              Event Highlights !!
              </h1>
            </div>
            <div className="grid md:grid-cols-2 items-center justify-start gap-[1.4rem] s:grid-cols-2 grid-cols-1 border-b border-[#2e2e2e] py-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-start justify-start flex-col gap-3 mb-12"
                >
                  {/* <Link href={project.link}> */}
                    <div className="flex items-center justify-center w-full h-full overflow-hidden">
                      <img
                        src={project.image}
                        alt="demo"
                        className="object-cover h-full w-full  object-top aspect-[16/9] hover:scale-110 transition ease-in-out duration-700 rounded-3xl"
                      />
                    </div>
                  {/* </Link> */}
                  <div className="flex items-start justify-start w-full">
                    <p className="uppercase font-mattone font-bold text-xl lg:text-xl xl:text-xl text-yellow-500 transition ease-in-out duration-500">
                      {project.title}
                    </p>
                  </div>
                  <div className="flex items-start justify-start w-[85%] xl:w-[80%]">
                    <p className="uppercase text-[#979595] hover:text-white transition ease-in-out duration-500 font-semibold text-sm xl:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              id="services"
              className="flex items-center justify-center w-full lg:p-24"
            >
              <div className="flex items-center justify-center w-full flex-col gap-2">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">01</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Alumni Engagement
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">02</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Networking Opportunities
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">03</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Career Support
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">01</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Entrepreneurial Support
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">02</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Empowering Mentorship
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">03</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Nurturing Innovation
                    </p>
                  </div>
                  
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">01</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Strengthening Community
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">02</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Accelerating Career Growth
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white hover:bg-white hover:text-[#2e2e2e] transition duration-500 ease-in-out">
                    <sup className="font-mattone text-sm sm:text-base">03</sup>
                    <p className="font-mattone font-bold text-sm sm:text-lg">
                    Building Lifelong Bonds
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <TechnologySection/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
