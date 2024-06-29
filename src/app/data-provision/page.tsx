import Image from "next/image";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/x'
import 'react-social-icons/youtube'
import { FaCheck } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container flex-col gap-8 p-24">
      <div className="flex gap-8">
        <div className="pr-16 w-[50%]">
          <h2 className="text-6xl md:text-5xl font-bold">Data Provision Services for Precised Scoring</h2>
          <p className="py-8 text-lg text-[#74788b]">Access a vast repository of historical data, the cornerstone for 
            enhancing your machine learning models. Bypass the extensive data collection 
            phase and focus squarely on achieving unparalleled accuracy in credit scoring.
          </p>
          <div className="flex justify-start gap-16">
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Get Dataset
            </button>
          </div>
          <p className="py-8 text-blue-600">buckyypaymentsolutions@gmail.com</p>
          <div className="flex gap-4">
              <SocialIcon network="facebook" href="https://www.facebook.com" />
              <SocialIcon network="linkedin" href="https://www.linkedin.com" />
              <SocialIcon network="x" href="https://www.x.com" />
              <SocialIcon network="youtube" href="https://www.youtube.com" />
          </div>
        </div>
        <div className="w-[50%] border-r-8">
          <Image 
              src='/data-provision-banner.png.webp'
              alt="contact image"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between py-8">
        <div className="w-[50%] flex flex-wrap">
          <div className="flex items-center gap-2 py-4">
            <FaCheck className="text-4xl bg-blue-600 text-white rounded-full p-2" />
            <p className="text-[#74788b] w-[70%]">Immediate start in data scoring</p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <FaCheck className="text-4xl bg-blue-600 text-white rounded-full p-2" />
            <p className="text-[#74788b] w-[70%]">Tailored credit analysis data</p>
          </div>
        </div>
        <div className="w-[50%] flex flex-wrap">
          <div className="flex items-center gap-2 py-4">
            <FaCheck className="text-4xl bg-blue-600 text-white rounded-full p-2" />
            <p className="text-[#74788b] w-[70%]">Enhanced data quality and accuracy</p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <FaCheck className="text-4xl bg-blue-600 text-white rounded-full p-2" />
            <p className="text-[#74788b] w-[70%]">Compliance and robust security</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 p-8 rounded-3xl">
        <div className="pr-16 w-[60%]">
          <h2 className="text-6xl md:text-5xl font-bold">Data Provision for Finance Machine Learning Modeling</h2>
          <p className="py-8 text-lg text-[#74788b]">
            Businesses often lack the necessary historical data to develop their 
            ML models. Whether you’re a startup in debt collection or lending, or 
            a large financial institution exploring new markets, our Data Provision 
            Services are tailored to support your projects.
          </p>
        </div>
      </div>
      <div className="py-8">
        <h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-2xl font-bold w-[80%] m-auto text-center">Benefit from a Readymade Historical Datasets</h2>
        <p className="px-8 text-center text-xl m-auto text-[#74788b] py-4">Accelerate your predictive modeling efforts, enhance decision-making and expand into new markets</p>
        <div className="flex gap-8">
          <div className="w-[33.33%]">
            <h3 className="text-2xl font-semibold">Credit repayment rates</h3>
            <p className="text-[#74788b] py-4">Access to extensive training data boosts AI model accuracy in assessing creditworthiness and debt repayment. This leads to improved loan approvals and repayment rates, enhancing financial performance.</p>
          </div>
          <div className="w-[33.33%]">
            <h3 className="text-2xl font-semibold">Quick start</h3>
            <p className="text-[#74788b] py-4">Start predictive modeling without waiting to gather 1000 entries. Our Data Provision Services allow you to begin immediately, skipping the lengthy data collection phase, and accelerate your move towards data-driven decisions and predictions.</p>
          </div>
          <div className="w-[33.33%]">
            <h3 className="text-2xl font-semibold">Improved performance</h3>
            <p className="text-[#74788b] py-4">Our Data Provision Services enhances the model’s understanding of complex patterns and directly contributes to superior business outcomes by optimizing decision-making processes and strategic planning.</p>
          </div>
        </div>
        <div className="flex gap-8 py-8">
          <div className="w-[33.33%]">
            <h3 className="text-2xl font-semibold">Enhanced fraud detection</h3>
            <p className="text-[#74788b] py-4">More training on historical data increases the chance of detecting fraud in real databases. Our services include historical cases of negative outcomes, enabling your AI model to more effectively identify and prevent fraudulent activities.</p>
          </div>
          <div className="w-[33.33%]">
            <h3 className="text-2xl font-semibold">Continuous updates</h3>
            <p className="text-[#74788b] py-4">Maintain your AI model’s effectiveness by regularly enriching it with fresh, diverse data. Adapt swiftly to changing customer behaviors and evolving market dynamics to ensure your offerings remain relevant for your clients.</p>
          </div>
          <div className="w-[33.33%]">
            <h3 className="text-2xl font-semibold">New market expansion</h3>
            <p className="text-[#74788b] py-4">Facing a shortage of data from a particular region? Rely on the data sets we provide to gain deep and valuable insights into new markets.This will help you make informed decisions and mitigate risks.</p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/action-box-bg.png')] bg-cover p-8 rounded-3xl">
        <div className="py-8 flex gap-4">
          <h2 className="w-[50%] text-6xl md:text-5xl font-bold text-white">Data Provision for Predictive Analytics</h2>
          <div className="w-[50%]">
            <p className="text-lg text-white opacity-50">
              Businesses often lack the necessary historical data to develop their 
              ML models. Whether you’re a startup in debt collection or lending, or 
              a large financial institution exploring new markets, our Data Provision 
              Services are tailored to support your projects.
            </p>
            <button className="my-4 shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black font-semibold rounded-md transition duration-200 ease-linear">
              Get a guide
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
