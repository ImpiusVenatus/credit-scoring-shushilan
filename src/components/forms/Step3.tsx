import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step3Schema, FormSchemaType } from "./schemas";

interface StepProps {
  formData: FormSchemaType;
  setFormData: React.Dispatch<React.SetStateAction<FormSchemaType>>;
  onNext: () => void;
  onPrev: () => void;
}

const Step3: React.FC<StepProps> = ({ formData, setFormData, onNext, onPrev }) => {
  const form = useForm({
    resolver: zodResolver(Step3Schema),
    defaultValues: {
      monthlyIncome: formData.monthlyIncome || 0,
      monthlyExpenses: formData.monthlyExpenses || 0,
      financialLiteracy: formData.financialLiteracy || "Low",
      attitudeTowardsDebt: formData.attitudeTowardsDebt || "Negative",
    },
  });

  const handleSubmit = (data: z.infer<typeof Step3Schema>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    onNext();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
      <div>
        <label>Monthly Income</label>
        <input {...form.register("monthlyIncome")} type="number" />
        <p>{form.formState.errors.monthlyIncome?.message}</p>
      </div>
      <div>
        <label>Monthly Expenses</label>
        <input {...form.register("monthlyExpenses")} type="number" />
        <p>{form.formState.errors.monthlyExpenses?.message}</p>
      </div>
      <div>
        <label>Financial Literacy</label>
        <select {...form.register("financialLiteracy")}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <p>{form.formState.errors.financialLiteracy?.message}</p>
      </div>
      <div>
        <label>Attitude Towards Debt</label>
        <select {...form.register("attitudeTowardsDebt")}>
          <option value="Negative">Negative</option>
          <option value="Neutral">Neutral</option>
          <option value="Positive">Positive</option>
        </select>
        <p>{form.formState.errors.attitudeTowardsDebt?.message}</p>
      </div>
      <button type="button" onClick={onPrev}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step3;
