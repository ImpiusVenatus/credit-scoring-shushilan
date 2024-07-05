import React from 'react';
import { useState } from 'react';
import CustomSelect from '../ui/CustomSelect';

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

interface LandFarmingFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const LandFarmingForm: React.FC<LandFarmingFormProps> = ({
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
      <h2 className='text-xl text-gray-800 font-semibold pb-4'>Step 3: Land and Farming Activity</h2>

      {questions.map((question, index) => (
        <div
          key={index}
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
        </div>
      ))}
      <div className='flex gap-4'>
        <button onClick={prevStep} className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Previous
        </button>
        <button onClick={nextStep} className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default LandFarmingForm;
