import { z } from "zod";

export const FormSchema = z.object({
  age: z.number().min(0, "Age must be greater than or equal to 0"),
  gender: z.enum(["Male", "Female", "Other"]),
  maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"]),
  householdSize: z.number().min(1, "Household size must be at least 1"),
  primaryIncomeSource: z.string().min(1, "Primary income source is required"),
  secondaryIncomeSources: z.array(z.string().min(1)).optional(),
  monthlyIncome: z.number().min(0, "Monthly income must be greater than or equal to 0"),
  monthlyExpenses: z.number().min(0, "Monthly expenses must be greater than or equal to 0"),
  financialLiteracy: z.enum(["Low", "Medium", "High"]),
  attitudeTowardsDebt: z.enum(["Negative", "Neutral", "Positive"]),
  riskTolerance: z.enum(["Low", "Medium", "High"]),
  futureOrientation: z.enum(["Low", "Medium", "High"]),
  spendingPatterns: z.enum(["Frugal", "Average", "Lavish"]),
  savingHabits: z.enum(["Poor", "Average", "Good"]),
  repaymentHistory: z.enum(["Poor", "Average", "Good"]),
  mobileMoneyUsage: z.enum(["Never", "Occasionally", "Frequently"]),
  peerAssessments: z.enum(["Poor", "Average", "Good"]),
  communityParticipation: z.enum(["Low", "Medium", "High"]),
  communityReputation: z.enum(["Poor", "Average", "Good"]),
  proximityToFinancialServices: z.enum(["Far", "Average", "Near"]),
  marketAccess: z.enum(["Poor", "Average", "Good"]),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export const Step1Schema = FormSchema.pick({
  age: true,
  gender: true,
  maritalStatus: true,
});

export const Step2Schema = FormSchema.pick({
  householdSize: true,
  primaryIncomeSource: true,
  secondaryIncomeSources: true,
});

export const Step3Schema = FormSchema.pick({
  monthlyIncome: true,
  monthlyExpenses: true,
  financialLiteracy: true,
  attitudeTowardsDebt: true,
});

export const Step4Schema = FormSchema.pick({
  riskTolerance: true,
  futureOrientation: true,
  spendingPatterns: true,
  savingHabits: true,
  repaymentHistory: true,
  mobileMoneyUsage: true,
  peerAssessments: true,
  communityParticipation: true,
  communityReputation: true,
  proximityToFinancialServices: true,
  marketAccess: true,
});
