import React from 'react';
import CustomSelect from '../ui/CustomSelect';

interface DemographicsProps {
  formData: {
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
  };
  setFormData: React.Dispatch<React.SetStateAction<{
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
  }>>;
  nextStep: () => void;
}

const DemographicsForm: React.FC<DemographicsProps> = ({
  formData,
  setFormData,
  nextStep,
}) => {
  const handleChange = (input: keyof DemographicsProps['formData'], value: string | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [input]: typeof value === 'boolean' ? value.toString() : value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className='bg-white border border-gray-400/20 rounded-xl p-8'>
      <h2 className='text-xl text-gray-800 font-semibold pb-4'>Step 1: Demographics Form</h2>
      
      <CustomSelect
        label="Age Range"
        value={formData.ageRange}
        onChange={(value: string) => handleChange('ageRange', value)}
        options={[
          { value: "18-25 years", label: "18-25 years" },
          { value: "26-35 years", label: "26-35 years" },
          { value: "36-45 years", label: "36-45 years" },
          { value: "46-60 years", label: "46-60 years" },
          { value: "60+ years", label: "60+ years" }
        ]}
      />
      
      <CustomSelect
        label="Gender"
        value={formData.gender}
        onChange={(value: string) => handleChange('gender', value)}
        options={[
          { value: "Male", label: "Male" },
          { value: "Female", label: "Female" },
          { value: "Other", label: "Other" }
        ]}
      />
      
      <CustomSelect
        label="Marital Status"
        value={formData.maritalStatus}
        onChange={(value: string) => handleChange('maritalStatus', value)}
        options={[
          { value: "Single", label: "Single" },
          { value: "Married", label: "Married" },
          { value: "Widowed/Divorced", label: "Widowed/Divorced" }
        ]}
      />
      
      <CustomSelect
        label="Dependents"
        value={formData.dependents}
        onChange={(value: string) => handleChange('dependents', value)}
        options={[
          { value: "0", label: "0" },
          { value: "1-2", label: "1-2" },
          { value: "3-4", label: "3-4" },
          { value: "5+", label: "5+" }
        ]}
      />
      
      <CustomSelect
        label="Education Level"
        value={formData.educationLevel}
        onChange={(value: string) => handleChange('educationLevel', value)}
        options={[
          { value: "No formal education", label: "No formal education" },
          { value: "Primary education", label: "Primary education" },
          { value: "Secondary education", label: "Secondary education" },
          { value: "Higher education", label: "Higher education" }
        ]}
      />
      
      <CustomSelect
        label="Primary Occupation"
        value={formData.primaryOccupation}
        onChange={(value: string) => handleChange('primaryOccupation', value)}
        options={[
          { value: "Farming", label: "Farming" },
          { value: "Business", label: "Business" },
          { value: "Laborer", label: "Laborer" },
          { value: "Other", label: "Other" }
        ]}
      />
      
      <CustomSelect
        label="Do you have any secondary occupations or sources of income?"
        value={formData.secondaryOccupation.toString()}
        onChange={(value: string) => handleChange('secondaryOccupation', value === 'true')}
        options={[
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ]}
      />
      
      <CustomSelect
        label="How long have you been living in this residence?"
        value={formData.residenceDuration}
        onChange={(value: string) => handleChange('residenceDuration', value)}
        options={[
          { value: "Less than 1 year", label: "Less than 1 year" },
          { value: "1-5 years", label: "1-5 years" },
          { value: "6-10 years", label: "6-10 years" },
          { value: "More than 10 years", label: "More than 10 years" }
        ]}
      />
      
      <CustomSelect
        label="Do you own or rent your home?"
        value={formData.homeOwnership}
        onChange={(value: string) => handleChange('homeOwnership', value)}
        options={[
          { value: "Own", label: "Own" },
          { value: "Rent", label: "Rent" }
        ]}
      />
      
      <CustomSelect
        label="How many people live in your household?"
        value={formData.householdSize}
        onChange={(value: string) => handleChange('householdSize', value)}
        options={[
          { value: "1-2", label: "1-2" },
          { value: "3-5", label: "3-5" },
          { value: "6-8", label: "6-8" },
          { value: "9+", label: "9+" }
        ]}
      />

      <button type='submit' className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Next
      </button>
    </form>
  );
};

export default DemographicsForm;
