import Image from 'next/image';
import React from 'react';
export default function Hero() {
  return (
    <div className='container'>
      <div
        className="pt-16 pb-8 text-center"
      >
        <h1 className="text-gray-800 text-center font-bold text-5xl py-8 m-auto rounded-2xl max-w-[40rem]">
          No-Code AI Decision-Making Software
        </h1>
        <p className="text-gray-500 pb-8">
          Build a predictive model in a few clicks and get actionable business insights.
        </p>
        <a href="/onboarding">
          <button
            className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
          >
            Start Free Trial
          </button>
        </a>
      </div>
      <div className='mx-8'>
        <Image 
          src="/dashboard.jpg"
          alt='dashboard'
          width={100}
          height={100}
          layout='responsive'
          className='rounded-xl shadow-lg'
        />
      </div>
    </div>
  );
}
