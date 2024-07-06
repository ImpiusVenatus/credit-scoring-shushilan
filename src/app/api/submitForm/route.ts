import { NextRequest, NextResponse } from 'next/server';
import { MongoClient, MongoNetworkError, ServerApiVersion } from 'mongodb';
import { Parser } from 'json2csv';

interface FormData {
  // Demographic details
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

  // Business details
  businessDuration: string;
  productTypes: string;
  monthlyRevenue: string;
  regularCustomers: string;
  businessLicense: string;
  salesRecord: string;
  savingsAccount: string;
  businessLoan: string,
  creditManagement: string;
  loanPurpose: string;
  awareOfTerms: string;

   // Land and farming details
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
   
    // Finance details
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

     //Social Network Data
     communityMember: string,
     leadershipPosition: string,
     participateCommunityEvents: string,
     goodReputation: string,
     recommendedForLoan: string,
     familySuccessfulLoans: string,
     collaborateCommunity: string,
     disputesCommunity: string,
     interactLocalLeaders: string,
     socialSupport: string,
     communityVouching: string,
}

const mongoUri = process.env.MONGODB_URI || '';
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function POST(req: NextRequest) {
  try {

    await client.connect();
    const db = client.db();
    const formData = await req.json();

    const demographicsScore = calculateDemographicsScore(formData);
    const businessScore = calculateBusinessScore(formData);
    const farmingScore = calculateFarmingScore(formData);
    const occupationScore = businessScore + farmingScore;
    const financeScore = calculateFinanceScore(formData);
    const socialScore = calculateSocialScore(formData);
    const totalScore = (demographicsScore*0.2) + (occupationScore*0.25) + (financeScore*0.30) + (socialScore*0.25);

    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(formData);

    const collection = db.collection('formData');
    const result = await collection.insertOne({
      formData,
      csvData: csv,
      demographicsScore,
      occupationScore,
      financeScore,
      socialScore,
      totalScore,
      approval: 'pending',
    });

    console.log('Form data saved to MongoDB:', result.insertedId);

    await client.close();

    return NextResponse.json({
      message: 'Form data processed and saved successfully',
      formDataId: result.insertedId.toString(),
    });
  } catch (error) {
    if (error instanceof MongoNetworkError) {
      console.error('MongoDB network error:', error);
      return NextResponse.json({ message: 'MongoDB network error' }, { status: 500 });
    } else {
      console.error('Error processing form data:', error);
      return NextResponse.json({ message: 'Error processing form data' }, { status: 500 });
    }
  }
}

function calculateDemographicsScore(formData: FormData): number {
  let demographicsScore = 0;

  // Age Range
  switch (formData.ageRange) {
    case '18-25 years':
      demographicsScore += 5;
      break;
    case '26-35 years':
      demographicsScore += 10;
      break;
    case '36-45 years':
      demographicsScore += 15;
      break;
    case '46-60 years':
      demographicsScore += 10;
      break;
    case '60+ years':
      demographicsScore += 5;
      break;
    default:
      break;
  }

  // Gender
  switch (formData.gender) {
    case 'Male':
    case 'Female':
    case 'Other':
      demographicsScore += 10;
      break;
    default:
      break;
  }

  // Marital Status
  switch (formData.maritalStatus) {
    case 'Single':
      demographicsScore += 5;
      break;
    case 'Married':
      demographicsScore += 10;
      break;
    case 'Widowed/Divorced':
      demographicsScore += 5;
      break;
    default:
      break;
  }

  // Dependents
  switch (formData.dependents) {
    case '0':
      demographicsScore += 10;
      break;
    case '1-2':
      demographicsScore += 8;
      break;
    case '3-4':
      demographicsScore += 5;
      break;
    case '5+':
      demographicsScore += 2;
      break;
    default:
      break;
  }

  // Education Level
  switch (formData.educationLevel) {
    case 'No formal education':
      demographicsScore += 2;
      break;
    case 'Primary education':
      demographicsScore += 5;
      break;
    case 'Secondary education':
      demographicsScore += 10;
      break;
    case 'Higher education':
      demographicsScore += 15;
      break;
    default:
      break;
  }

  // Primary Occupation
  switch (formData.primaryOccupation) {
    case 'Farming':
    case 'Business':
      demographicsScore += 15;
      break;
    case 'Laborer':
      demographicsScore += 10;
      break;
    case 'Other':
      demographicsScore += 5;
      break;
    default:
      break;
  }

  // Secondary Occupation
  if (formData.secondaryOccupation === 'true') {
    demographicsScore += 10;
  } else if (formData.secondaryOccupation === 'false') {
    demographicsScore += 5;
  }

  // Residence Duration
  switch (formData.residenceDuration) {
    case 'Less than 1 year':
      demographicsScore += 2;
      break;
    case '1-5 years':
      demographicsScore += 5;
      break;
    case '6-10 years':
      demographicsScore += 8;
      break;
    case 'More than 10 years':
      demographicsScore += 10;
      break;
    default:
      break;
  }

  // Home Ownership
  switch (formData.homeOwnership) {
    case 'Own':
      demographicsScore += 15;
      break;
    case 'Rent':
      demographicsScore += 5;
      break;
    default:
      break;
  }

  // Household Size
  switch (formData.householdSize) {
    case '1-2':
      demographicsScore += 10;
      break;
    case '3-5':
      demographicsScore += 15;
      break;
    case '6-8':
      demographicsScore += 10;
      break;
    case '9+':
      demographicsScore += 5;
      break;
    default:
      break;
  }

  if (demographicsScore >= 100) {
    demographicsScore = 100;
    return demographicsScore;
  }
  else {
  return demographicsScore;
  }
}

function calculateBusinessScore(formData: FormData): number {
  let businessScore = 0;

  // Business Duration
  switch (formData.businessDuration) {
    case 'Less than 1 year':
      businessScore += 2;
      break;
    case '1-3 years':
      businessScore += 5;
      break;
    case 'More than 3 years':
      businessScore += 10;
      break;
    default:
      break;
  }

  // Product Types
  switch (formData.productTypes) {
    case 'Variety of essential goods':
      businessScore += 10;
      break;
    case 'Specific niche products':
      businessScore += 5;
      break;
    default:
      break;
  }

  // Monthly Revenue
  switch (formData.monthlyRevenue) {
    case 'Less than 10,000 BDT':
      businessScore += 2;
      break;
    case '10,000-20,000 BDT':
      businessScore += 5;
      break;
    case 'More than 20,000 BDT':
      businessScore += 10;
      break;
    default:
      break;
  }

  // Regular Customers
  if (formData.regularCustomers === 'Yes') {
    businessScore += 10;
  } else if (formData.regularCustomers === 'No') {
    businessScore += 5;
  }

  // Business Licenses
  if (formData.businessLicense === 'Yes') {
    businessScore += 10;
  } else if (formData.businessLicense === 'No') {
    businessScore += 5;
  }

  // Sales Record
  if(formData.salesRecord === 'Yes') {
    businessScore += 10;
  } else if (formData.salesRecord === 'No') {
    businessScore += 5;
  }

  // Savings Account for Business
  if (formData.savingsAccount === 'Yes') {
    businessScore += 10;
  } else if (formData.savingsAccount === 'No') {
    businessScore += 5;
  }

  // Taken Business Loan Before and Repayment
  if (formData.businessLoan === 'Yes, repaid on time') {
    businessScore += 15;
  } else if (formData.businessLoan === 'Yes, but not repaid on time') {
    businessScore += 5;
  } else if (formData.businessLoan === 'No') {
    businessScore += 10;
  }

   // Credit Management
   switch (formData.creditManagement) {
    case 'Yes, well managed':
      businessScore += 10;
      break;
    case 'Yes, poorly managed':
      businessScore += 5;
      break;
    case 'No':
      businessScore += 10;
      break;
    default:
      break;
  }

  // Loan Purpose
  switch (formData.loanPurpose) {
    case 'Business expansion':
    case 'Inventory purchase':
      businessScore += 10;
      break;
    case 'Other':
      businessScore += 5;
      break;
    default:
      break;
  }

  // Aware of Loan Terms
  if (formData.awareOfTerms === 'Yes') {
    businessScore += 10;
  } else if (formData.awareOfTerms === 'No') {
    businessScore += 5;
  }

  if (businessScore >= 100) {
    businessScore = 100;
    return businessScore;
  }
  else {
  return businessScore;
  }
}

function calculateFarmingScore(formData: FormData): number {
  let farmingScore = 0;

  // Own Agricultural Land
  if (formData.ownAgriculturalLand === 'Yes') {
    farmingScore += 20;
  }

  // Acres Owned
  switch (formData.acresOwned) {
    case 'Less than 1 acre':
      farmingScore += 5;
      break;
    case '1-3 acres':
      farmingScore += 10;
      break;
    case 'More than 3 acres':
      farmingScore += 20;
      break;
    default:
      break;
  }

  // Crop Types
  switch (formData.cropTypes) {
    case 'Staple crops (e.g., rice, wheat)':
      farmingScore += 10;
      break;
    case 'Cash crops (e.g., vegetables, fruits)':
      farmingScore += 15;
      break;
    default:
      break;
  }

  // Crop Cycles per Year
  switch (formData.cropCyclesPerYear) {
    case '1':
      farmingScore += 5;
      break;
    case '2':
      farmingScore += 10;
      break;
    case '3+':
      farmingScore += 15;
      break;
    default:
      break;
  }

  // Crop Rotation
  if (formData.cropRotation === 'Yes') {
    farmingScore += 10;
  } else if (formData.cropRotation === 'No') {
    farmingScore += 5;
  }

  // Irrigation Facilities
  if (formData.irrigationFacilities === 'Yes') {
    farmingScore += 15;
  } else if (formData.irrigationFacilities === 'No') {
    farmingScore += 5;
  }

  // Own Livestock
  if (formData.ownLivestock === 'Yes') {
    farmingScore += 10;

    // Livestock Types
    switch (formData.livestockTypes) {
      case 'Cattle':
        farmingScore += 10;
        break;
      case 'Goats/Sheep':
        farmingScore += 8;
        break;
      case 'Poultry':
        farmingScore += 5;
        break;
      case 'Other':
        farmingScore += 2;
        break;
      default:
        break;
    }

    // Livestock Count
    switch (formData.livestockCount) {
      case 'Less than 5':
        farmingScore += 5;
        break;
      case '5-10':
        farmingScore += 10;
        break;
      case 'More than 10':
        farmingScore += 15;
        break;
      default:
        break;
    }
  }

  // Farming Experience
  switch (formData.farmingExperience) {
    case 'Less than 1 year':
      farmingScore += 2;
      break;
    case '1-5 years':
      farmingScore += 5;
      break;
    case '6-10 years':
      farmingScore += 10;
      break;
    case 'More than 10 years':
      farmingScore += 15;
      break;
    default:
      break;
  }

  // Modern Farming Techniques
  if (formData.modernFarmingTechniques === 'Yes') {
    farmingScore += 10;
  } else if (formData.modernFarmingTechniques === 'No') {
    farmingScore += 5;
  }

  // Farming Techniques Uses
  switch (formData.farmingTechniquesUsed) {
    case 'Mechanized plowing':
      farmingScore += 5;
      break;
    case 'Irrigation systems':
      farmingScore += 5;
      break;
    case 'Fertilizers/pesticides':
      farmingScore += 5;
      break;
    default:
      break;
  }

   // Annual Crop Yield
   switch (formData.annualCropYield) {
    case 'Less than 1 ton':
      farmingScore += 1;
      break;
    case '1-3 tons':
      farmingScore += 5;
      break;
    case 'More than 3 tons':
      farmingScore += 10;
      break;
    default:
      break;
  }

  // Local Product Sell
  if (formData.sellProduceLocally === 'Yes') {
    farmingScore += 10;
  } else if (formData.sellProduceLocally === 'No') {
    farmingScore += 5;
  }

  // Storage Facility
  if (formData.storageFacilities === 'Yes') {
    farmingScore += 10;
  } else if (formData.storageFacilities === 'No') {
    farmingScore += 5;
  }

  // Crop Loss in Past Five Years
  if (formData.cropLossPastFiveYears === 'Yes') {
    farmingScore += 2;
  } else if (formData.cropLossPastFiveYears === 'No') {
    farmingScore += 10;
  }

   // Crop Loss Reasons
   switch (formData.annualCropYield) {
    case 'Natural disasters':
      farmingScore += 5;
      break;
    case 'Pest infestations':
      farmingScore += 5;
      break;
    case 'Poor market prices':
      farmingScore += 5;
      break;
    case 'Other':
      farmingScore += 2;
      break;
    default:
      break;
  }

  if (farmingScore >= 100) {
    farmingScore = 100;
    return farmingScore;
  }
  else {
  return farmingScore;
  }
}

function calculateFinanceScore(formData: FormData): number {
  let financeScore = 0;

  // Do you own a smartphone or a normal phone?
  switch (formData.phoneType) {
    case 'Smartphone':
      financeScore += 10;
      break;
    case 'Normal phone':
      financeScore += 5;
      break;
    // Assuming 'No phone' does not add any points
    default:
      break;
  }

  // Do you use your mobile phone for any financial transactions?
  if (formData.useMobileForTransactions === 'Yes') {
    financeScore += 15;
  } else if (formData.useMobileForTransactions === 'No') {
    financeScore += 5;
  }

  // Do you have a savings account?
  if (formData.haveSavingsAccount === 'Yes') {
    financeScore += 20;
  }

  // Do you have any other forms of savings?
  if (formData.otherFormsOfSavings === 'Yes') {
    financeScore += 20;
  }

  // Have you ever taken a loan before?
  if (formData.takenLoanBefore === 'Yes') {
    financeScore += 15;

    // If yes, was the loan repaid on time?
    if (formData.loanRepaidOnTime === 'Yes') {
      financeScore += 20;
    } else if (formData.loanRepaidOnTime === 'No') {
      financeScore += 5;
    }
  }
  else if(formData.takenLoanBefore === 'No') {
    financeScore += 5;
  }

  // Do you have any outstanding loans?
  if (formData.outstandingLoans === 'Yes') {
    financeScore += 5;
  } else if (formData.outstandingLoans === 'No') {
    financeScore += 20;
  }

  // Do you budget your monthly expenses?
  if (formData.budgetMonthlyExpenses === 'Yes') {
    financeScore += 15;
  } else if (formData.budgetMonthlyExpenses === 'No') {
    financeScore += 5;
  }

  // Do you keep financial records of your income and expenses?
  if (formData.keepFinancialRecords === 'Yes') {
    financeScore += 15;
  } else if (formData.keepFinancialRecords === 'No') {
    financeScore += 5;
  }

  // Do you have any formal financial education or training?
  if (formData.formalFinancialEducation === 'Yes') {
    financeScore += 10;
  } else if (formData.formalFinancialEducation === 'No') {
    financeScore += 5;
  }

  if (financeScore >= 100) {
    financeScore = 100;
    return financeScore;
  }
  else {
  return financeScore;
  }
}

function calculateSocialScore(formData: FormData): number {
  let socialScore = 0;

  // Are you a member of any community organizations or cooperatives?
  if (formData.communityMember === 'Yes') {
    socialScore += 20;
  }

  // Do you hold any leadership positions in your community?
  if (formData.leadershipPosition === 'Yes') {
    socialScore += 15;
  } else if (formData.leadershipPosition === 'No') {
    socialScore += 5;
  }

  // Do you participate in community events and activities?
  if (formData.participateCommunityEvents === 'Yes') {
    socialScore += 15;
  } else if (formData.participateCommunityEvents === 'No') {
    socialScore += 5;
  }

  // Do you have a good reputation in your community?
  if (formData.goodReputation === 'Yes') {
    socialScore += 30;
  } else if (formData.goodReputation === 'No') {
    socialScore += 5;
  }

  // Have you ever been recommended for a loan by a community member?
  if (formData.recommendedForLoan === 'Yes') {
    socialScore += 25;
  } else if (formData.recommendedForLoan === 'No') {
    socialScore += 10;
  }

  // Do you have any family members or friends who have successfully repaid loans?
  if (formData.familySuccessfulLoans === 'Yes') {
    socialScore += 20;
  } else if (formData.familySuccessfulLoans === 'No') {
    socialScore += 5;
  }

  // Do you collaborate with other community members for business or farming activities?
  if (formData.collaborateCommunity === 'Yes') {
    socialScore += 15;
  } else if (formData.collaborateCommunity === 'No') {
    socialScore += 5;
  }

  // Do you have any disputes or unresolved issues with community members?
  if (formData.disputesCommunity === 'Yes') {
    socialScore += 5;
  } else if (formData.disputesCommunity === 'No') {
    socialScore += 20;
  }

  // How often do you interact with local leaders or influential community members?
  switch (formData.interactLocalLeaders) {
    case 'Regularly':
      socialScore += 10;
      break;
    case 'Occasionally':
      socialScore += 5;
      break;
    // Rarely does not add any points
    default:
      break;
  }

  // Do you receive any social support or aid from the community during difficult times?
  if (formData.socialSupport === 'Yes') {
    socialScore += 10;
  } else if (formData.socialSupport === 'No') {
    socialScore += 5;
  }

  if (formData.communityVouching === 'Yes') {
    socialScore += 20;
  } else if (formData.communityVouching === 'No') {
    socialScore += 5;
  }

  if (socialScore >= 100) {
    socialScore = 100;
    return socialScore;
  }
  else {
  return socialScore;
  }
}

