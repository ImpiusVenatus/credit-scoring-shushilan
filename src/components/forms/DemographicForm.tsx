import React from 'react';
import CustomSelect from '../ui/CustomSelect';

interface FormData {
  fullName: string,
  email: string,
  photo: string,
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

interface DemographicsFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
}

const DemographicsForm: React.FC<DemographicsFormProps> = ({
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
      question: 'ageRange',
      label: 'Age Range',
      options: [
        { value: "18-25 years", label: "18-25 years" },
        { value: "26-35 years", label: "26-35 years" },
        { value: "36-45 years", label: "36-45 years" },
        { value: "46-60 years", label: "46-60 years" },
        { value: "60+ years", label: "60+ years" }
      ],
    },
    {
      question: 'gender',
      label: 'Gender',
      options: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" }
      ],
    },
    {
      question: 'maritalStatus',
      label: 'Marital Status',
      options: [
        { value: "Single", label: "Single" },
        { value: "Married", label: "Married" },
        { value: "Widowed/Divorced", label: "Widowed/Divorced" }
      ],
    },
    {
      question: 'dependents',
      label: 'Dependents',
      options: [
        { value: "0", label: "0" },
        { value: "1-2", label: "1-2" },
        { value: "3-4", label: "3-4" },
        { value: "5+", label: "5+" }
      ],
    },
    {
      question: 'educationLevel',
      label: 'Education Level',
      options: [
        { value: "No formal education", label: "No formal education" },
        { value: "Primary education", label: "Primary education" },
        { value: "Secondary education", label: "Secondary education" },
        { value: "Higher education", label: "Higher education" }
      ],
    },
    {
      question: 'primaryOccupation',
      label: 'Primary Occupation',
      options: [
        { value: "Farming", label: "Farming" },
        { value: "Business", label: "Business" },
        { value: "Laborer", label: "Laborer" },
        { value: "Other", label: "Other" }
      ],
    },
    {
      question: 'secondaryOccupation',
      label: 'Do you have any secondary occupations or sources of income?',
      options: [
        { value: "true", label: "Yes" },
        { value: "false", label: "No" }
      ],
    },
    {
      question: 'residenceDuration',
      label: 'How long have you been living in this residence?',
      options: [
        { value: "Less than 1 year", label: "Less than 1 year" },
        { value: "1-5 years", label: "1-5 years" },
        { value: "6-10 years", label: "6-10 years" },
        { value: "More than 10 years", label: "More than 10 years" }
      ],
    },
    {
      question: 'homeOwnership',
      label: 'Do you own or rent your home?',
      options: [
        { value: "Own", label: "Own" },
        { value: "Rent", label: "Rent" }
      ],
    },
    {
      question: 'householdSize',
      label: 'How many people live in your household?',
      options: [
        { value: "1-2", label: "1-2" },
        { value: "3-5", label: "3-5" },
        { value: "6-8", label: "6-8" },
        { value: "9+", label: "9+" }
      ],
    },
  ];

  return (
    <div className='bg-white border border-gray-400/20 rounded-xl p-8'>
      <h2 className='text-xl text-gray-800 font-semibold pb-4'>Step 2: Demographics</h2>

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

export default DemographicsForm;
