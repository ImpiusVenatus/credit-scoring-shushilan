import React from 'react';

interface FormData {
  fullName: string;
  email: string;
  photo: string;
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

interface UserFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  formData,
  setFormData,
  nextStep,
}) => {

  const handleChange = (input: keyof FormData, value: string | boolean) => {
    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setFormData(prevState => ({
        ...prevState,
        photo: fileURL,
      }));
    }
  };

  return (
    <div className='bg-white border border-gray-400/20 rounded-xl p-8 w-[30rem]'>
      <h2 className='text-xl text-gray-800 font-semibold pb-4'>Step 1: User Info</h2>
      <div className='flex flex-col gap-4'>
        <div>
          <label className='block text-gray-700'>Full Name</label>
          <input
            type='text'
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 p-2'
          />
        </div>
        <div>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 p-2'
          />
        </div>
        <div>
          <label className='block text-gray-700'>Photo</label>
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50 p-2'
          />
          {formData.photo && (
            <div className='mt-4'>
              <img src={formData.photo} alt="Selected" className='w-32 h-32 object-cover rounded-full mx-auto' />
            </div>
          )}
        </div>
        <button
          onClick={nextStep}
          className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserForm;
