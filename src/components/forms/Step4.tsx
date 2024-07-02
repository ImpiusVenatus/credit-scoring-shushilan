import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step4Schema, FormSchemaType } from "./schemas";

interface StepProps {
  formData: FormSchemaType;
  setFormData: React.Dispatch<React.SetStateAction<FormSchemaType>>;
  onSubmit: (data: FormSchemaType) => void;
  onPrev: () => void;
}

const Step4: React.FC<StepProps> = ({ formData, setFormData, onSubmit, onPrev }) => {
  const form = useForm({
    resolver: zodResolver(Step4Schema),
    defaultValues: {
      riskTolerance: formData.riskTolerance || "Low",
      futureOrientation: formData.futureOrientation || "Low",
      spendingPatterns: formData.spendingPatterns || "Frugal",
      savingHabits: formData.savingHabits || "Poor",
      repaymentHistory: formData.repaymentHistory || "Poor",
      mobileMoneyUsage: formData.mobileMoneyUsage || "Never",
      peerAssessments: formData.peerAssessments || "Poor",
      communityParticipation: formData.communityParticipation || "Low",
      communityReputation: formData.communityReputation || "Poor",
      proximityToFinancialServices: formData.proximityToFinancialServices || "Far",
      marketAccess: formData.marketAccess || "Poor",
    },
  });

  const handleSubmit = (data: z.infer<typeof Step4Schema>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    onSubmit({ ...formData, ...data });
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
      <div>
        <label>Risk Tolerance</label>
        <select {...form.register("riskTolerance")}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p>{form.formState.errors.riskTolerance?.message}</p>
      </div>
      <div>
        <label>Future Orientation</label>
        <select {...form.register("futureOrientation")}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p>{form.formState.errors.futureOrientation?.message}</p>
      </div>
      <div>
        <label>Spending Patterns</label>
        <select {...form.register("spendingPatterns")}>
          <option value="Frugal">Frugal</option>
          <option value="Average">Average</option>
          <option value="Lavish">Lavish</option>
        </select>
        <p>{form.formState.errors.spendingPatterns?.message}</p>
      </div>
      <div>
        <label>Saving Habits</label>
        <select {...form.register("savingHabits")}>
          <option value="Poor">Poor</option>
          <option value="Average">Average</option>
          <option value="Good">Good</option>
        </select>
        <p>{form.formState.errors.savingHabits?.message}</p>
      </div>
      <div>
        <label>Repayment History</label>
        <select {...form.register("repaymentHistory")}>
          <option value="Poor">Poor</option>
          <option value="Average">Average</option>
          <option value="Good">Good</option>
        </select>
        <p>{form.formState.errors.repaymentHistory?.message}</p>
      </div>
      <div>
        <label>Mobile Money Usage</label>
        <select {...form.register("mobileMoneyUsage")}>
          <option value="Never">Never</option>
          <option value="Occasionally">Occasionally</option>
          <option value="Frequently">Frequently</option>
        </select>
        <p>{form.formState.errors.mobileMoneyUsage?.message}</p>
      </div>
      <div>
        <label>Peer Assessments</label>
        <select {...form.register("peerAssessments")}>
          <option value="Poor">Poor</option>
          <option value="Average">Average</option>
          <option value="Good">Good</option>
        </select>
        <p>{form.formState.errors.peerAssessments?.message}</p>
      </div>
      <div>
        <label>Community Participation</label>
        <select {...form.register("communityParticipation")}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p>{form.formState.errors.communityParticipation?.message}</p>
      </div>
      <div>
        <label>Community Reputation</label>
        <select {...form.register("communityReputation")}>
          <option value="Poor">Poor</option>
          <option value="Average">Average</option>
          <option value="Good">Good</option>
        </select>
        <p>{form.formState.errors.communityReputation?.message}</p>
      </div>
      <div>
        <label>Proximity to Financial Services</label>
        <select {...form.register("proximityToFinancialServices")}>
          <option value="Far">Far</option>
          <option value="Average">Average</option>
          <option value="Near">Near</option>
        </select>
        <p>{form.formState.errors.proximityToFinancialServices?.message}</p>
      </div>
      <div>
        <label>Market Access</label>
        <select {...form.register("marketAccess")}>
          <option value="Poor">Poor</option>
          <option value="Average">Average</option>
          <option value="Good">Good</option>
        </select>
        <p>{form.formState.errors.marketAccess?.message}</p>
      </div>
      <button type="button" onClick={onPrev}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step4;
