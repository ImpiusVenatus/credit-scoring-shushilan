export default function Impact() {
    return (
      <div>
          <div className="flex flex-col py-16">
            <h6 className="max-w-[60rem] m-auto text-center font-semibold text-2xl pb-8">Our customised and diverse range of products support families to access financial 
                services, manage and build assets, invest in small enterprises, access employment 
                opportunities and cope during emergencies. Complementing this, we build financial 
                literacy and have instituted a range of client protection measures that distinguish us 
                for our commitment towards client-centric service delivery.
            </h6>
            <div className="flex gap-4 justify-center">
                <button className="px-8 py-2 rounded-md bg-teal-400 text-gray-800 font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                    View Factsheet
                </button>
                <button className="px-8 py-2 rounded-md bg-teal-400 text-gray-800 font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                View COVID-19 Factsheet
                </button>
                <button className="px-8 py-2 rounded-md bg-teal-400 text-gray-800 font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                    Programme Brief
                </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-teal-400 py-8 ">
                <h2 className="text-6xl text-center font-bold z-50 text-white">Impact</h2>
            </div>
            <div className="bg-teal-400 -z-10 absolute w-[5rem] h-[5rem] rotate-45 -bottom-5 left-[calc(50%-2.5rem)]"></div>
          </div>
          <div className="container py-16 flex justify-around gap-16">
            <div className="text-center w-[33.33%] bg-gray-800 py-8 rounded-2xl">
                <h6 className="font-bold text-2xl text-white">11 Million</h6>
                <p className="text-gray-500">Clients</p>
            </div>
            <div className="text-center w-[33.33%] bg-gray-800 py-8 rounded-2xl">
                <h6 className="font-bold text-2xl text-white">90%</h6>
                <p className="text-gray-500">of clients served are women</p>
            </div>
            <div className="text-center w-[33.33%] bg-gray-800 py-8 rounded-2xl">
                <h6 className="font-bold text-2xl text-white">USD 6 billion</h6>
                <p className="text-gray-500">amount of loan disbursed in Bangladesh in 2023</p>
            </div>
          </div>
      </div>
    );
  }
  