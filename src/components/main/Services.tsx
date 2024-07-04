import { FaCheck } from "react-icons/fa";

export default function Services() {
    return (
      <div className="container">
          <div className="py-16 text-center">
            <h2 className="text-gray-800 text-center font-normal text-3xl m-auto rounded-2xl">
                Software as a Service. No coding is required. Enhance your decision-making process with cutting-edge AI and boost your productivity
            </h2>
          </div>
          <div className="flex flex-wrap justify-between">
          <div className="w-[50%] flex flex-wrap">
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">Immediate start in data scoring</p>
            </div>
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">Tailored credit analysis data</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-wrap">
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">Enhanced data quality and accuracy</p>
            </div>
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">Compliance and robust security</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  