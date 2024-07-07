import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import DemographicsForm from './DemographicForm';
import BusinessQuestionsForm from './BusinessQuestionsForm';
import FinancialPlanningForm from './FinancialLiteracyPlanning';
import SocialNetworkForm from './SocialNetworking';
import CommunityVouchingForm from './CommunityVouching';
import { MultiStepLoader  } from '../ui/multi-step-loader';
import UserForm from './UserForm';

const loadingStates = [
  { text: "Logging data to the database" },
  { text: "Calculating the credit score" },
  { text: "Welcome to your dashboard" },
];

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

const MultiStepFormContainer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    //Demographic Data
    fullName: '',
    email: '',
    photo: '',
    ageRange: '',
    gender: '',
    maritalStatus: '',
    dependents: '',
    educationLevel: '',
    primaryOccupation: '',
    secondaryOccupation: '',
    residenceDuration: '',
    homeOwnership: '',
    householdSize: '',

    //Business Data
    profession: '',
    businessDuration: '',
    productTypes: '',
    monthlyRevenue: '',
    regularCustomers: '',
    businessLicense: '',
    salesRecords: '',
    savingsAccount: '',
    businessLoan: '',
    creditManagement: '',
    loanPurpose: '',
    awareOfTerms: '',

    //Land and Farming Data
    ownAgriculturalLand: '',
    acresOwned: '',
    cropTypes: '',
    cropCyclesPerYear: '',
    cropRotation: '',
    irrigationFacilities: '',
    ownLivestock: '',
    livestockTypes: '',
    livestockCount: '',
    farmingExperience: '',
    modernFarmingTechniques: '',
    farmingTechniquesUsed: '',
    annualCropYield: '',
    sellProduceLocally: '',
    storageFacilities: '',
    cropLossPastFiveYears: '',
    cropLossReasons: '',

    //Financial Literacy Data
    phoneType: '',
    useMobileForTransactions: '',
    haveSavingsAccount: '',
    otherFormsOfSavings: '',
    takenLoanBefore: '',
    loanRepaidOnTime: '',
    outstandingLoans: '',
    budgetMonthlyExpenses: '',
    keepFinancialRecords: '',
    formalFinancialEducation: '',

    //Social Network Data
    communityMember: '',
    leadershipPosition: '',
    participateCommunityEvents: '',
    goodReputation: '',
    recommendedForLoan: '',
    familySuccessfulLoans: '',
    collaborateCommunity: '',
    disputesCommunity: '',
    interactLocalLeaders: '',
    socialSupport: '',
    communityVouching: '',
  });

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/submitForm', formData);
      setTimeout(() => {
        router.push("/dashboard");
      }, loadingStates.length * 2000);
      setTimeout(() => {
        setLoading(false);
      }, (loadingStates.length * 2000) + 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <UserForm 
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )
      case 2:
        return (
          <DemographicsForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <BusinessQuestionsForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <FinancialPlanningForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <SocialNetworkForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 6:
        return (
          <CommunityVouchingForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            prevStep={prevStep}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div>
      {loading ? (
        <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={3000} />
      ) : (
        <div>
          {renderStep()}
        </div>
      )}
    </div>
  );
};

export default MultiStepFormContainer;
