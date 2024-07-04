import React, { useState } from 'react';
import DemographicsForm from './DemographicForm';
import BusinessQuestionsForm from './BusinessQuestionsForm';
import LandFarmingForm from './LandAndFarmingActivity';
import FinancialPlanningForm from './FinancialLiteracyPlanning';
import SocialNetworkForm from './SocialNetworking';

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

const MultiStepFormContainer: React.FC = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    ageRange: '',
    gender: '',
    maritalStatus: '',
    dependents: '',
    educationLevel: '',
    primaryOccupation: '',
    secondaryOccupation: false,
    residenceDuration: '',
    homeOwnership: '',
    householdSize: '',
    profession: '',
    businessDuration: '',
    productTypes: '',
    monthlyRevenue: '',
    regularCustomers: false,
    businessLicense: false,
    salesRecords: false,
    savingsAccount: false,
    businessLoan: '',
    creditManagement: '',
    loanPurpose: '',
    awareOfTerms: false,
    ownAgriculturalLand: false,
    acresOwned: '',
    cropTypes: '',
    cropCyclesPerYear: '',
    cropRotation: false,
    irrigationFacilities: false,
    ownLivestock: false,
    livestockTypes: '',
    livestockCount: '',
    farmingExperience: '',
    modernFarmingTechniques: false,
    farmingTechniquesUsed: '',
    annualCropYield: '',
    sellProduceLocally: false,
    storageFacilities: false,
    cropLossPastFiveYears: false,
    cropLossReasons: '',
    phoneType: '',
    useMobileForTransactions: false,
    haveSavingsAccount: false,
    otherFormsOfSavings: false,
    takenLoanBefore: false,
    loanRepaidOnTime: false,
    outstandingLoans: false,
    budgetMonthlyExpenses: false,
    keepFinancialRecords: false,
    formalFinancialEducation: false,
    communityMember: false,
    leadershipPosition: false,
    participateCommunityEvents: false,
    goodReputation: false,
    recommendedForLoan: false,
    familySuccessfulLoans: false,
    collaborateCommunity: false,
    disputesCommunity: false,
    interactLocalLeaders: '',
    socialSupport: false,
  });  

  const nextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <DemographicsForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <BusinessQuestionsForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <LandFarmingForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 4:
        return (
          <FinancialPlanningForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 5:
        return (
          <SocialNetworkForm 
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      default:
        return null;
    }
  };

  console.log('Current Form Data:', formData);

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default MultiStepFormContainer;
