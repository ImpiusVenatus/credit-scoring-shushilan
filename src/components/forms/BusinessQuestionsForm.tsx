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
  secondaryOccupation: string;
  residenceDuration: string;
  homeOwnership: string;
  householdSize: string;
  profession: string;
  businessDuration: string;
  productTypes: string;
  monthlyRevenue: string;
  regularCustomers: string;
  businessLicense: string;
  salesRecords: string;
  savingsAccount: string;
  businessLoan: string;
  creditManagement: string;
  loanPurpose: string;
  awareOfTerms: string;
  ownAgriculturalLand: string;
  acresOwned: string;
  cropTypes: string;
  cropCyclesPerYear: string;
  cropRotation: string;
  irrigationFacilities: string;
  ownLivestock: string;
  livestockTypes: string;
  livestockCount: string;
  farmingExperience: string;
  modernFarmingTechniques: string;
  farmingTechniquesUsed: string;
  annualCropYield: string;
  sellProduceLocally: string;
  storageFacilities: string;
  cropLossPastFiveYears: string;
  cropLossReasons: string;
  phoneType: string;
  useMobileForTransactions: string;
  haveSavingsAccount: string;
  otherFormsOfSavings: string;
  takenLoanBefore: string;
  loanRepaidOnTime: string;
  outstandingLoans: string;
  budgetMonthlyExpenses: string;
  keepFinancialRecords: string;
  formalFinancialEducation: string;
  communityMember: string;
  leadershipPosition: string;
  participateCommunityEvents: string;
  goodReputation: string;
  recommendedForLoan: string;
  familySuccessfulLoans: string;
  collaborateCommunity: string;
  disputesCommunity: string;
  interactLocalLeaders: string;
  socialSupport: string;
  communityVouching: string;
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

  const retailQuestions = [
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
      question: 'businessLicense',
      label: 'Do you have any business licenses or permits?',
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

  const farmingQuestions = [
    {
      question: 'ownAgriculturalLand',
      label: 'Do you own any agricultural land?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'acresOwned',
      label: 'If yes, how many acres of land do you own?',
      options: [
        { value: 'Less than 1 acre', label: 'Less than 1 acre' },
        { value: '1-3 acres', label: '1-3 acres' },
        { value: 'More than 3 acres', label: 'More than 3 acres' },
      ],
    },
    {
      question: 'cropTypes',
      label: 'What type of crops do you primarily grow?',
      options: [
        { value: 'Staple crops (e.g., rice, wheat)', label: 'Staple crops (e.g., rice, wheat)' },
        { value: 'Cash crops (e.g., vegetables, fruits)', label: 'Cash crops (e.g., vegetables, fruits)' },
      ],
    },
    {
      question: 'cropCyclesPerYear',
      label: 'How many crop cycles do you complete in a year?',
      options: [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3+', label: '3+' },
      ],
    },
    {
      question: 'cropRotation',
      label: 'Do you practice crop rotation?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'irrigationFacilities',
      label: 'Do you have access to irrigation facilities?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'ownLivestock',
      label: 'Do you own any livestock?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'livestockTypes',
      label: 'If yes, what types of livestock do you own?',
      options: [
        { value: 'Cattle', label: 'Cattle' },
        { value: 'Goats/Sheep', label: 'Goats/Sheep' },
        { value: 'Poultry', label: 'Poultry' },
        { value: 'Other', label: 'Other' },
      ],
    },
    {
      question: 'livestockCount',
      label: 'How many livestock animals do you own?',
      options: [
        { value: 'Less than 5', label: 'Less than 5' },
        { value: '5-10', label: '5-10' },
        { value: 'More than 10', label: 'More than 10' },
      ],
    },
    {
      question: 'farmingExperience',
      label: 'How many years of farming experience do you have?',
      options: [
        { value: 'Less than 1 year', label: 'Less than 1 year' },
        { value: '1-5 years', label: '1-5 years' },
        { value: '6-10 years', label: '6-10 years' },
        { value: 'More than 10 years', label: 'More than 10 years' },
      ],
    },
    {
      question: 'modernFarmingTechniques',
      label: 'Do you use any modern farming techniques or equipment?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'farmingTechniquesUsed',
      label: 'If yes, please specify the techniques or equipment used.',
      options: [
        { value: 'Mechanized plowing', label: 'Mechanized plowing' },
        { value: 'Irrigation systems', label: 'Irrigation systems' },
        { value: 'Fertilizers/pesticides', label: 'Fertilizers/pesticides' },
      ],
    },
    {
      question: 'annualCropYield',
      label: 'What is the average annual yield of your primary crop?',
      options: [
        { value: 'Less than 1 ton', label: 'Less than 1 ton' },
        { value: '1-3 tons', label: '1-3 tons' },
        { value: 'More than 3 tons', label: 'More than 3 tons' },
      ],
    },
    {
      question: 'sellProduceLocally',
      label: 'Do you sell your produce at local markets?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'storageFacilities',
      label: 'Do you have storage facilities for your produce?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'cropLossPastFiveYears',
      label: 'Have you faced any significant crop losses in the past five years?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'cropLossReasons',
      label: 'If yes, what were the primary reasons for the crop losses?',
      options: [
        { value: 'Natural disasters', label: 'Natural disasters' },
        { value: 'Pest infestations', label: 'Pest infestations' },
        { value: 'Poor market prices', label: 'Poor market prices' },
        { value: 'Other', label: 'Other' },
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
          {retailQuestions.map((question, index) => (
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
        <>
          {farmingQuestions.map((question, index) => (
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
    </div>
  );
};

export default BusinessQuestionsForm;
