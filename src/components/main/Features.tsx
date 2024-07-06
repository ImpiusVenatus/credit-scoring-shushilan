import Image from "next/image";

export default function Features() {
    return (
        <div className="py-8 container">
        <h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-2xl font-bold w-[80%] m-auto text-center">Benefit from a Readymade Historical Datasets</h2>
        <p className="px-8 text-center text-md m-auto text-[#74788b] pt-4 pb-8">Accelerate your predictive modeling efforts, enhance decision-making and expand into new markets</p>
        <div className="flex gap-8">
          <div className="w-[33.33%]">
            <div className="max-w-[5rem] m-auto">
              <Image 
                alt="repayment rates icon"
                src="/Updates.svg"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-semibold">Credit repayment rates</h3>
            <p className="text-[#74788b] py-4">Access to extensive training data boosts AI model accuracy in assessing creditworthiness and debt repayment. This leads to improved loan approvals and repayment rates, enhancing financial performance.</p>
          </div>
          <div className="w-[33.33%]">
            <div className="max-w-[5rem] m-auto">
              <Image 
                alt="repayment rates icon"
                src="/Model.svg"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-semibold">Quick start</h3>
            <p className="text-[#74788b] py-4">Start predictive modeling without waiting to gather 1000 entries. Our Data Provision Services allow you to begin immediately, skipping the lengthy data collection phase, and accelerate your move towards data-driven decisions and predictions.</p>
          </div>
          <div className="w-[33.33%]">
            <div className="max-w-[5rem] m-auto">
              <Image 
                alt="repayment rates icon"
                src="/Improved Performance.svg"
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <h3 className="text-2xl font-semibold">Improved performance</h3>
            <p className="text-[#74788b] py-4">Our Data Provision Services enhances the model’s understanding of complex patterns and directly contributes to superior business outcomes by optimizing decision-making processes and strategic planning.</p>
          </div>
        </div>
      </div>
    )
}