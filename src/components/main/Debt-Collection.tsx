import Image from "next/image"
import { FaArrowRight } from "react-icons/fa"

export default function DebtCollection() {
    return (
    <div className="container flex gap-8 py-12">
          <div className="w-[50%]">
            <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold w-[70%]">
              Debt Collection Agencies
            </h4>
            <p className="py-8 w-[80%] text-[#74788b] text-md">
            AI software for debt collection agencies fuses data analytics and machine learning to maximize 
            debt recovery efficiency. Focus your collection efforts on accounts brimming with repayment 
            potential, optimizing resources and trimming operational costs. Rini crafts tailor-made 
            debt collection strategies, creating a streamlined workflow that minimizes manual labor.
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