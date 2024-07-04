import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function CollectionScoring() {
    return (
    <div className="container flex gap-8 py-12">
          <div className="w-[50%]">
            <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold w-[70%]">
                Collection Scoring
            </h4>
            <p className="py-8 w-[80%] text-[#74788b] text-md">
            RiniMachine helps to prioritize debtors primed for fast payback. It suggests the most 
            effective collection tools, be it calls, messages, or other methods, based on scoring 
            parameters. The outcome? A significant boost in productivity for collection businesses and 
            a swift goodbye to time wasted on non-performing debts.
            </p>
            <a className="flex items-center gap-2 text-teal-500 cursor-pointer">Learn More <FaArrowRight /></a>
          </div>
          <div className="w-[50%]">
            <Image
              src="/data-quality.png.webp"
              alt="Data Quality"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
    )
}