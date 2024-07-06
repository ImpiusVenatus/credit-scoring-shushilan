import React from 'react';
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
  businessLicense : string;
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

interface FinancialPlanningFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const FinancialPlanningForm: React.FC<FinancialPlanningFormProps> = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
}) => {

  const handleChange = (input: keyof FormData, value: string | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));
  };

  const questions = [
    {
      question: 'phoneType',
      label: 'Do you own a smartphone or a normal phone?',
      options: [
        { value: 'Smartphone', label: 'Smartphone' },
        { value: 'Normal phone', label: 'Normal phone' },
        { value: 'No phone', label: 'No phone' },
      ],
    },
    {
      question: 'useMobileForTransactions',
      label: 'Do you use your mobile phone for any financial transactions?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'haveSavingsAccount',
      label: 'Do you have a savings account?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'otherFormsOfSavings',
      label: 'Do you have any other forms of savings (e.g., livestock, jewelry)?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'takenLoanBefore',
      label: 'Have you ever taken a loan before?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'loanRepaidOnTime',
      label: 'If yes, was the loan repaid on time?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'outstandingLoans',
      label: 'Do you have any outstanding loans?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'budgetMonthlyExpenses',
      label: 'Do you budget your monthly expenses?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'keepFinancialRecords',
      label: 'Do you keep financial records of your income and expenses?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
    {
      question: 'formalFinancialEducation',
      label: 'Do you have any formal financial education or training?',
      options: [
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
      ],
    },
  ];

  return (
    <div className='bg-white border border-gray-400/20 rounded-xl p-8'>
      <h2 className='text-xl text-gray-800 font-semibold pb-4'>Step 3: Financial Literacy and Planning</h2>

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

export default FinancialPlanningForm;
