import Image from "next/image";
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import 'react-social-icons/x'
import 'react-social-icons/youtube'
import { FaCheck } from "react-icons/fa";
import { NavigationMenuBar } from "@/components/ShadcnNavbar";
import Footer from "@/components/Footer";

export default function DataPreparation() {
  return (
    <div>
      <NavigationMenuBar />
      <main className="container flex-col gap-8 p-12">
        <div className="flex gap-8">
          <div className="pr-16 w-[50%]">
            <h2 className="text-6xl md:text-5xl font-bold">Data Preparation
            Services for ML</h2>
            <p className="py-8 text-lg text-[#74788b]">Prepare your data for machine learning processing to attain the highest 
            quality in AI data analytics. The data science experts at Rini provide services in data cleaning and preparation, 
            designed to enhance the accuracy of your ML models.
            </p>
            <div className="flex justify-start gap-16">
              <button className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
                Get Dataset
              </button>
            </div>
          </div>
          <div className="w-[50%]">
            <Image 
                src='/asset05.png'
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
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">Machine learning engineer oversight</p>
            </div>
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">Reduce data loss by 50%</p>
            </div>
          </div>
          <div className="w-[50%] flex flex-wrap">
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">99% fewer errors and inaccuracies</p>
            </div>
            <div className="flex items-center gap-2 py-4">
              <FaCheck className="text-4xl bg-teal-400 text-white rounded-full p-2" />
              <p className="text-[#74788b] w-[70%]">90% more precise ML model</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/bg.png')] bg-cover bg-no-repeat p-8 rounded-3xl">
          <div className="pr-16 w-[60%]">
            <h2 className="text-6xl md:text-5xl font-bold text-white">Data Cleaning and Preparation Services</h2>
            <p className="py-8 text-lg text-gray-300">
            Our team of data engineers will eliminate irrelevant records, duplicates, and manual errors 
            from your initial data and ensure that all the essential attributes required for thorough 
            analysis are included in your dataset.
            </p>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-6xl lg:text-5xl md:text-4xl sm:text-2xl font-bold w-[80%] m-auto text-center">Why is Data Preparation Important</h2>
          <p className="px-8 text-center text-xl m-auto text-[#74788b] py-4">With data preparation, models are trained on clean, high-quality datasets, leading to more accurate predictions and insights</p>
        </div>

        <div className="flex gap-8 py-12">
          <div className="w-[50%]">
            <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold w-[70%]">
              Elevated Data Reliability
            </h4>
            <p className="py-8 w-[80%] text-[#74788b] text-md">
              Raw data usually contains errors, inconsistencies, missing values, and outliers. 
              Data preparation ensures that these issues are identified and addressed, resulting in a 
              higher-quality dataset that serves as a reliable foundation for model training.
            </p>
          </div>
          <div className="w-[50%]">
            <Image
              src="/asset04.png"
              alt="Data Quality"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>

        <div className="flex  gap-8 py-12">
          <div className="w-[50%]">
            <Image
              src="/asset06.png"
              alt="Data Quality"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="w-[50%]">
            <h4 className="lg:text-5xl md:text-4xl text-2xl font-bold w-[70%]">
            Boosted Model Generalization
            </h4>
            <p className="py-8 w-[80%] text-[#74788b] text-md">
            A model trained on well-prepared data is more likely to generalize to new, 
            unseen data. Without proper data preparation, models might overfit to noise 
            or specific characteristics of the training data, leading to poor generalization.
            </p>
          </div>
        </div>

        <div className="bg-[url('/action-box-bg.png')] bg-cover p-8 rounded-3xl">
          <div className="py-8 flex gap-4">
            <h2 className="w-[50%] text-6xl md:text-5xl font-bold text-white">Unlock the Power of Your Data</h2>
            <div className="w-[50%]">
              <p className="text-lg text-white opacity-50">
              Explore our comprehensive guide to guarantee your datasets meet the highest standards. 
              Unlock the full potential of your data with expert insights and practical tips.
              </p>
              <button className="my-4 shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 bg-[#fff] text-black font-semibold rounded-md transition duration-200 ease-linear">
                Get started now
              </button>
            </div>
          </div>
        </div>
        <div className="text-center py-32">
          <h4 className="lg:text-6xl md:text-4xl font-semibold max-w-[60rem] md:max-w-[40rem] mx-auto py-8 text-[#0b102c">
          Benefit from Data Preparation
          for Your Business
          </h4>
          <p className="px-8 text-center text-xl m-auto text-[#74788b] py-4">For any type of AI-driven decisioning, we ensure the precision
of seed data for better outcomes</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
