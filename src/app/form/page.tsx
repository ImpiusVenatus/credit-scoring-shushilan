"use client"

import { CreditScoringForm } from "@/components/Form";


const UploadPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl py-2 mb-16 border-b-2 border-white">Credit Scoring Model Demo</h1>
      <CreditScoringForm />
    </main>
  );
};

export default UploadPage;
