import React from 'react';
import { useState } from 'react';
import CustomSelect from '../ui/CustomSelect';
import { motion } from 'framer-motion';

interface FormData {
  ageRange: string;
  gender: string;
  maritalStatus: string;
  dependents: string;
  educationLevel: string;
  primaryOccupation: string;
  secondaryOccupation: boolean;
  residenceDuration: string;
  homeOwnership: string;
  householdSize: string;
  profession: string;
  businessDuration: string;
  productTypes: string;
  monthlyRevenue: string;
  regularCustomers: boolean;
  businessLicense: boolean;
  salesRecords: boolean;
  savingsAccount: boolean;
  businessLoan: string;
  creditManagement: string;
  loanPurpose: string;
  awareOfTerms: boolean;
  ownAgriculturalLand: boolean;
  acresOwned: string;
  cropTypes: string;
  cropCyclesPerYear: string;
  cropRotation: boolean;
  irrigationFacilities: boolean;
  ownLivestock: boolean;
  livestockTypes: string;
  livestockCount: string;
  farmingExperience: string;
  modernFarmingTechniques: boolean;
  farmingTechniquesUsed: string;
  annualCropYield: string;
  sellProduceLocally: boolean;
  storageFacilities: boolean;
  cropLossPastFiveYears: boolean;
  cropLossReasons: string;
  phoneType: string;
  useMobileForTransactions: boolean;
  haveSavingsAccount: boolean;
  otherFormsOfSavings: boolean;
  takenLoanBefore: boolean;
  loanRepaidOnTime: boolean;
  outstandingLoans: boolean;
  budgetMonthlyExpenses: boolean;
  keepFinancialRecords: boolean;
  formalFinancialEducation: boolean;
  communityMember: boolean;
  leadershipPosition: boolean;
  participateCommunityEvents: boolean;
  goodReputation: boolean;
  recommendedForLoan: boolean;
  familySuccessfulLoans: boolean;
  collaborateCommunity: boolean;
  disputesCommunity: boolean;
  interactLocalLeaders: string;
  socialSupport: boolean;
}

interface BusinessQuestionsFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const BusinessQuestionsForm: React.FC<BusinessQuestionsFormProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (input: keyof FormData, value: string | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));
  };

  const questions = [
    {
      question: 'businessDuration',
      label: 'How long have you been running this shop?',
      options: [
        { value: 'Less than 1 year', label: 'Less than 1 year' },
        { value: '1-3 years', label: '1-3 years' },
        { value: 'More than 3 years', label: 'More than 3 years' },
      ],
    },
    {
      question: 'productTypes',
      label: 'What types of products do you sell?',
      options: [
        { value: 'Variety of essential goods', label: 'Variety of essential goods' },
        { value: 'Specific niche products', label: 'Specific niche products' },
      ],
    },
    {
      question: 'monthlyRevenue',
      label: 'What is your average monthly revenue?',
      options: [
        { value: 'Less than 10,000 BDT', label: 'Less than 10,000 BDT' },
        { value: '10,000-20,000 BDT', label: '10,000-20,000 BDT' },
        { value: 'More than 20,000 BDT', label: 'More than 20,000 BDT' },
      ],
    },
    {
      question: 'regularCustomers',
      label: 'Do you have any regular customers?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'salesRecords',
      label: 'Do you keep records of your sales and expenses?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'savingsAccount',
      label: 'Do you have a savings account for your business?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'businessLoan',
      label: 'Have you ever taken a business loan before?',
      options: [
        { value: 'Yes, repaid on time', label: 'Yes, repaid on time' },
        { value: 'Yes, but not repaid on time', label: 'Yes, but not repaid on time' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'creditManagement',
      label: 'Do you offer credit to your customers?',
      options: [
        { value: 'Yes, well managed', label: 'Yes, well managed' },
        { value: 'Yes, poorly managed', label: 'Yes, poorly managed' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'loanPurpose',
      label: 'How do you plan to use the loan you are applying for?',
      options: [
        { value: 'Business expansion', label: 'Business expansion' },
        { value: 'Inventory purchase', label: 'Inventory purchase' },
        { value: 'Other', label: 'Other' },
      ],
    },
    {
      question: 'awareOfTerms',
      label: 'Are you aware of the interest rates and terms of the loan you are applying for?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
  ];

  return (
    <div className='bg-white border border-gray-400/20 rounded-xl p-8'>
      <h2 className='text-xl text-gray-800 font-semibold pb-4'>Step 2: Business Questions</h2>

      <CustomSelect
        label="Select your profession"
        value={formData.profession}
        onChange={(value: string) => handleChange('profession', value)}
        options={[
          { value: 'Small Retail Shop Owner', label: 'Small Retail Shop Owner' },
          { value: 'Farmer', label: 'Farmer'}
        ]}
      />
      <br />
      <br />

      {formData.profession === 'Small Retail Shop Owner' && (
        <>
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-4"
            >
              <label className="block text-gray-700">{question.label}</label>
              <CustomSelect
                label={`Select ${question.label}`}
                value={formData[question.question as keyof FormData]}
                onChange={(value: string) => handleChange(question.question as keyof FormData, value)}
                options={question.options}
              />
              <br />
            </motion.div>
          ))}
          <div className='flex gap-4'>
            <button onClick={prevStep} className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Previous
            </button>
            <button onClick={nextStep} className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Next
            </button>
          </div>
        </>
      )}
      {formData.profession === 'Farmer' && (
        <div>
          <label className="block text-gray-700">Farm Details: Describe your farming activity</label>
          <textarea
            value={formData.businessDuration}
            onChange={(e) => handleChange('businessDuration', e.target.value)}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
          <br />
          <div className='flex gap-4'>
            <button onClick={prevStep} className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Previous
            </button>
            <button onClick={nextStep} className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessQuestionsForm;
