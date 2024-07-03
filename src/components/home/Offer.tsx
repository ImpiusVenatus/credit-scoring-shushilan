import Image from "next/image";

export default function Offer() {
    return (
      <div>
          <div className="relative">
            <div className="bg-teal-400 py-8 ">
                <h2 className="text-6xl text-center font-bold z-50 text-white">What we offer</h2>
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
                    <h6 className="text-center font-bold pt-4 text-xl">Small Enterprise Loans</h6>
                    <p className="text-center text-gray-500">Finance for small enterprises underserved by mainstream banks</p>
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
                    <h6 className="text-center font-bold pt-4 text-xl">Small Enterprise Loans</h6>
                    <p className="text-center text-gray-500">Collateral free micro-loans given exclusively to women through women’s groups</p>
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
                    <h6 className="text-center font-bold pt-4 text-xl">Small Enterprise Loans</h6>
                    <p className="text-center text-gray-500">Supporting foreign employment opportunities and economic stability for migrant households</p>
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
                    <h6 className="text-center font-bold pt-4 text-xl">Small Enterprise Loans</h6>
                    <p className="text-center text-gray-500">Loans exclusively for agriculture workers looking to invest on farming and increase their yield</p>
                </div>
            </div>
          </div>
      </div>
    );
  }
  