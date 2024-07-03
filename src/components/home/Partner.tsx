import Image from "next/image";

export default function Partner() {
    return (
      <div>
          <div className="relative">
            <div className="bg-teal-400 py-8 ">
                <h2 className="text-6xl text-center font-bold z-50 text-white">Our Partners</h2>
            </div>
            <div className="bg-teal-400 -z-10 absolute w-[5rem] h-[5rem] rotate-45 -bottom-5 left-[calc(50%-2.5rem)]"></div>
          </div>
          <div className="container py-16">
            <h6 className="text-xl font-bold text-center">Customised products designed to meet the needs of our diverse group of clients</h6>
            <div className="container flex gap-4 py-8">
                <div className="w-[25%]">
                    <Image 
                        src="/Small-entrepreneurs-4.jpg"
                        alt="Entrepreneurs"
                        width={100}
                        height={100}
                        layout="responsive"
                        className="rounded-2xl cursor-pointer hover:scale-105 transition-all"
                    />
                </div>
                <div className="w-[25%]">
                    <Image 
                        src="/Small-entrepreneurs-3.jpg"
                        alt="Entrepreneurs"
                        width={100}
                        height={100}
                        layout="responsive"
                        className="rounded-2xl cursor-pointer hover:scale-105 transition-all"
                    />
                </div>
                <div className="w-[25%]">
                    <Image 
                        src="/Small-entrepreneurs-2.jpg"
                        alt="Entrepreneurs"
                        width={100}
                        height={100}
                        layout="responsive"
                        className="rounded-2xl cursor-pointer hover:scale-105 transition-all"
                    />
                </div>
                <div className="w-[25%]">
                    <Image 
                        src="/Small-entrepreneurs-1.jpg"
                        alt="Entrepreneurs"
                        width={100}
                        height={100}
                        layout="responsive"
                        className="rounded-2xl cursor-pointer hover:scale-105 transition-all"
                    />
                </div>
            </div>
          </div>
      </div>
    );
  }
  