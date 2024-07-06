import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function DebtCollection() {
    return (
    <div className="container flex gap-8 py-12">
        <div className="w-[50%]">
            <Image
              src="/data-quality.png.webp"
              alt="Data Quality"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="w-[50%]">
            <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold w-[70%]">
              Alternative Lenders
            </h4>
            <p className="py-8 w-[80%] text-[#74788b] text-md">
            Rini scores credit applications and loans using diverse alternative data sources, 
            from rental and utility payments to asset ownership and public records. It’s like having a 
            crystal ball as it zeroes in on high-risk assets and anticipates loan repayments. Streamline 
            your operations with an automated pre-approval system for incoming applications and fine-tune 
            your credit portfolio risk.
            </p>
            <a className="flex items-center gap-2 text-teal-500 cursor-pointer">Learn More <FaArrowRight /></a>
          </div>
      </div>
    )
}