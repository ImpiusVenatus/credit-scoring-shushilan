"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast, useToast } from "@/components/ui/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select"

const FormSchema = z.object({
  age: z.number().min(18, { message: "Age must be at least 18." }).max(100, { message: "Age must be less than or equal to 100." }),
  gender: z.enum(["Male", "Female"], { message: "Select a valid gender." }),
  maritalStatus: z.enum(["Single", "Married", "Divorced/Widowed"], { message: "Select a valid marital status." }),
  householdSize: z.number().min(1, { message: "Household size must be at least 1." }),
  primaryIncomeSource: z.enum(["Regular salaried job", "Small business owner", "Agriculture", "Casual labor"], { message: "Select a valid income source." }),
  secondaryIncomeSources: z.enum(["Multiple steady sources", "Occasional extra income", "No secondary income"], { message: "Select a valid secondary income source." }),
  monthlyIncome: z.enum(["Above average", "Average", "Below average"], { message: "Select a valid income level." }),
  monthlyExpenses: z.enum(["Low expenses", "Moderate expenses", "High expenses"], { message: "Select a valid expense level." }),
  financialLiteracy: z.enum(["High understanding", "Moderate understanding", "Low understanding"], { message: "Select a valid financial literacy level." }),
  attitudeTowardsDebt: z.enum(["Positive and responsible", "Neutral", "Negative"], { message: "Select a valid attitude towards debt." }),
  riskTolerance: z.enum(["High risk tolerance", "Moderate risk tolerance", "Low risk tolerance"], { message: "Select a valid risk tolerance." }),
  futureOrientation: z.enum(["Plans and saves for future", "Occasional planning", "No future planning"], { message: "Select a valid future orientation." }),
  spendingPatterns: z.enum(["Saves regularly", "Occasional savings", "Spends all income"], { message: "Select a valid spending pattern." }),
  savingHabits: z.enum(["Consistent savings", "Irregular savings", "No savings"], { message: "Select valid saving habits." }),
  repaymentHistory: z.enum(["Always on time", "Occasionally late", "Frequently late"], { message: "Select a valid repayment history." }),
  mobileMoneyUsage: z.enum(["Regular and high usage", "Moderate usage", "Low usage"], { message: "Select a valid mobile money usage." }),
  peerAssessments: z.enum(["Highly trusted", "Moderately trusted", "Low trust"], { message: "Select a valid peer assessment." }),
  communityParticipation: z.enum(["Active participant", "Occasional participant", "No participation"], { message: "Select a valid community participation." }),
  communityReputation: z.enum(["Highly respected", "Moderately respected", "Low respect"], { message: "Select a valid community reputation." }),
  proximityToFinancialServices: z.enum(["Close proximity", "Moderate distance", "Remote"], { message: "Select a valid proximity to financial services." }),
  marketAccess: z.enum(["Close proximity", "Moderate distance", "Remote"], { message: "Select a valid market access." }),
})

export function CreditScoringForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      age: 18,
      gender: "Male",
      maritalStatus: "Single",
      householdSize: 1,
      primaryIncomeSource: "Regular salaried job",
      secondaryIncomeSources: "No secondary income",
      monthlyIncome: "Below average",
      monthlyExpenses: "Moderate expenses",
      financialLiteracy: "Moderate understanding",
      attitudeTowardsDebt: "Neutral",
      riskTolerance: "Moderate risk tolerance",
      futureOrientation: "Occasional planning",
      spendingPatterns: "Occasional savings",
      savingHabits: "Irregular savings",
      repaymentHistory: "Occasionally late",
      mobileMoneyUsage: "Moderate usage",
      peerAssessments: "Moderately trusted",
      communityParticipation: "Occasional participant",
      communityReputation: "Moderately respected",
      proximityToFinancialServices: "Moderate distance",
      marketAccess: "Moderate distance",
    },
  })

  function calculateCreditScore(data: z.infer<typeof FormSchema>): number {
    let score = 0

    score += data.age >= 18 && data.age <= 25 ? 10 : data.age <= 40 ? 8 : 5
    score += data.gender === "Male" ? 5 : 5
    score += data.maritalStatus === "Married" ? 10 : 5
    score += data.householdSize > 4 ? 10 : 5
    score += data.primaryIncomeSource === "Regular salaried job" ? 15 : 10
    score += data.secondaryIncomeSources === "No secondary income" ? 5 : 10
    score += data.monthlyIncome === "Above average" ? 20 : data.monthlyIncome === "Average" ? 15 : 10
    score += data.monthlyExpenses === "Low expenses" ? 10 : data.monthlyExpenses === "Moderate expenses" ? 5 : 0
    score += data.financialLiteracy === "High understanding" ? 10 : data.financialLiteracy === "Moderate understanding" ? 5 : 0
    score += data.attitudeTowardsDebt === "Positive and responsible" ? 10 : data.attitudeTowardsDebt === "Neutral" ? 5 : 0
    score += data.riskTolerance === "High risk tolerance" ? 10 : data.riskTolerance === "Moderate risk tolerance" ? 5 : 0
    score += data.futureOrientation === "Plans and saves for future" ? 10 : data.futureOrientation === "Occasional planning" ? 5 : 0
    score += data.spendingPatterns === "Saves regularly" ? 10 : data.spendingPatterns === "Occasional savings" ? 5 : 0
    score += data.savingHabits === "Consistent savings" ? 10 : data.savingHabits === "Irregular savings" ? 5 : 0
    score += data.repaymentHistory === "Always on time" ? 10 : data.repaymentHistory === "Occasionally late" ? 5 : 0
    score += data.mobileMoneyUsage === "Regular and high usage" ? 10 : data.mobileMoneyUsage === "Moderate usage" ? 5 : 0
    score += data.peerAssessments === "Highly trusted" ? 10 : data.peerAssessments === "Moderately trusted" ? 5 : 0
    score += data.communityParticipation === "Active participant" ? 10 : data.communityParticipation === "Occasional participant" ? 5 : 0
    score += data.communityReputation === "Highly respected" ? 10 : data.communityReputation === "Moderately respected" ? 5 : 0
    score += data.proximityToFinancialServices === "Close proximity" ? 10 : data.proximityToFinancialServices === "Moderate distance" ? 5 : 0
    score += data.marketAccess === "Close proximity" ? 10 : data.marketAccess === "Moderate distance" ? 5 : 0

    return score
  }

  function determineLoanApproval(score: number): string {
    if (score >= 150) {
      return "Approved"
    } else if (score >= 100) {
      return "Approved with Conditions"
    } else {
      return "Not Approved"
    }
  }

  const { toast } = useToast();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const score = calculateCreditScore(data)
    const approvalStatus = determineLoanApproval(score)
    toast({
      title: "Credit Score Calculated",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-red-700 p-4">
          <code className="text-white">Score: {score}</code>
          <br />
          <code className="text-white">Loan Approval: {approvalStatus}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Age Field */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="Age" 
                  {...field} 
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Gender Field */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Gender</FormLabel>
              <FormControl>
                <RadioGroup 
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Male" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Female" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      FeMale
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Marital Status Field */}
        <FormField
          control={form.control}
          name="maritalStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marital Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Married">Married</SelectItem>
                    <SelectItem value="Divorced/Widowed">Divorced/Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Household Size Field */}
        <FormField
          control={form.control}
          name="householdSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Household Size</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  placeholder="Household Size" 
                  {...field} 
                  onChange={(e) => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Primary Income Source Field */}
        <FormField
          control={form.control}
          name="primaryIncomeSource"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primary Income Source</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary income source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Regular salaried job">Regular salaried job</SelectItem>
                    <SelectItem value="Small business owner">Small business owner</SelectItem>
                    <SelectItem value="Agriculture">Agriculture</SelectItem>
                    <SelectItem value="Casual labor">Casual labor</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Secondary Income Sources Field */}
        <FormField
          control={form.control}
          name="secondaryIncomeSources"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Secondary Income Sources</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select secondary income source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Multiple steady sources">Multiple steady sources</SelectItem>
                    <SelectItem value="Occasional extra income">Occasional extra income</SelectItem>
                    <SelectItem value="No secondary income">No secondary income</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Monthly Income Field */}
        <FormField
          control={form.control}
          name="monthlyIncome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Income</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select monthly income level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Above average">Above average</SelectItem>
                    <SelectItem value="Average">Average</SelectItem>
                    <SelectItem value="Below average">Below average</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Monthly Expenses Field */}
        <FormField
          control={form.control}
          name="monthlyExpenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Monthly Expenses</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select monthly expense level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low expenses">Low expenses</SelectItem>
                    <SelectItem value="Moderate expenses">Moderate expenses</SelectItem>
                    <SelectItem value="High expenses">High expenses</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Financial Literacy Field */}
        <FormField
          control={form.control}
          name="financialLiteracy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Financial Literacy</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select financial literacy level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High understanding">High understanding</SelectItem>
                    <SelectItem value="Moderate understanding">Moderate understanding</SelectItem>
                    <SelectItem value="Low understanding">Low understanding</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Attitude Towards Debt Field */}
        <FormField
          control={form.control}
          name="attitudeTowardsDebt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attitude Towards Debt</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select attitude towards debt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Positive and responsible">Positive and responsible</SelectItem>
                    <SelectItem value="Neutral">Neutral</SelectItem>
                    <SelectItem value="Negative">Negative</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Risk Tolerance Field */}
        <FormField
          control={form.control}
          name="riskTolerance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Risk Tolerance</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk tolerance" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High risk tolerance">High risk tolerance</SelectItem>
                    <SelectItem value="Moderate risk tolerance">Moderate risk tolerance</SelectItem>
                    <SelectItem value="Low risk tolerance">Low risk tolerance</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Future Orientation Field */}
        <FormField
          control={form.control}
          name="futureOrientation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Future Orientation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select future orientation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Plans and saves for future">Plans and saves for future</SelectItem>
                    <SelectItem value="Occasional planning">Occasional planning</SelectItem>
                    <SelectItem value="No future planning">No future planning</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Spending Patterns Field */}
        <FormField
          control={form.control}
          name="spendingPatterns"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spending Patterns</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select spending patterns" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Saves regularly">Saves regularly</SelectItem>
                    <SelectItem value="Occasional savings">Occasional savings</SelectItem>
                    <SelectItem value="Spends all income">Spends all income</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Saving Habits Field */}
        <FormField
          control={form.control}
          name="savingHabits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Saving Habits</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select saving habits" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Consistent savings">Consistent savings</SelectItem>
                    <SelectItem value="Irregular savings">Irregular savings</SelectItem>
                    <SelectItem value="No savings">No savings</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Repayment History Field */}
        <FormField
          control={form.control}
          name="repaymentHistory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repayment History</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select repayment history" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Always on time">Always on time</SelectItem>
                    <SelectItem value="Occasionally late">Occasionally late</SelectItem>
                    <SelectItem value="Frequently late">Frequently late</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mobile Money Usage Field */}
        <FormField
          control={form.control}
          name="mobileMoneyUsage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Money Usage</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select mobile money usage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Regular and high usage">Regular and high usage</SelectItem>
                    <SelectItem value="Moderate usage">Moderate usage</SelectItem>
                    <SelectItem value="Low usage">Low usage</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Peer Assessments Field */}
        <FormField
          control={form.control}
          name="peerAssessments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Peer Assessments</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select peer assessments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Highly trusted">Highly trusted</SelectItem>
                    <SelectItem value="Moderately trusted">Moderately trusted</SelectItem>
                    <SelectItem value="Low trust">Low trust</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Community Participation Field */}
        <FormField
          control={form.control}
          name="communityParticipation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Community Participation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select community participation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active participant">Active participant</SelectItem>
                    <SelectItem value="Occasional participant">Occasional participant</SelectItem>
                    <SelectItem value="No participation">No participation</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Community Reputation Field */}
        <FormField
          control={form.control}
          name="communityReputation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Community Reputation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select community reputation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Highly respected">Highly respected</SelectItem>
                    <SelectItem value="Moderately respected">Moderately respected</SelectItem>
                    <SelectItem value="Low respect">Low respect</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Proximity To Financial Services Field */}
        <FormField
          control={form.control}
          name="proximityToFinancialServices"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proximity To Financial Services</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select proximity to financial services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Close proximity">Close proximity</SelectItem>
                    <SelectItem value="Moderate distance">Moderate distance</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Market Access Field */}
        <FormField
          control={form.control}
          name="marketAccess"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Market Access</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select market access" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Close proximity">Close proximity</SelectItem>
                    <SelectItem value="Moderate distance">Moderate distance</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
