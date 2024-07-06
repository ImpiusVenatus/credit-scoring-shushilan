import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function CreditScoring() {
    return (
    <div className="container flex gap-8 py-12">
        <div className="w-[50%]">
            <Image
              src="/asset01.png"
              alt="Data Quality"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="w-[50%]">
            <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold w-[70%]">
                Credit Scoring
            </h4>
            <p className="py-8 w-[80%] text-[#74788b] text-md">
            Sweep away the limitations of traditional credit scoring. Empower your business with AI 
            underwriting decision software, unlocking the potential to extend loans to even thin-file
            borrowers. Discover the perfect harmony between maximizing profits and managing risks.
            </p>
            <a className="flex items-center gap-2 text-teal-500 cursor-pointer">Learn More <FaArrowRight /></a>
          </div>
        </div>
    )
}