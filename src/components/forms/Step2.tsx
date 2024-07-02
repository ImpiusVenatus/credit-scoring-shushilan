import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Step2Schema, FormSchemaType } from "./schemas";

interface StepProps {
  formData: FormSchemaType;
  setFormData: React.Dispatch<React.SetStateAction<FormSchemaType>>;
  onNext: () => void;
  onPrev: () => void;
}

const Step2: React.FC<StepProps> = ({ formData, setFormData, onNext, onPrev }) => {
  const form = useForm({
    resolver: zodResolver(Step2Schema),
    defaultValues: {
      householdSize: formData.householdSize || 1,
      primaryIncomeSource: formData.primaryIncomeSource || "",
      secondaryIncomeSources: formData.secondaryIncomeSources || [],
    },
  });

  const handleSubmit = (data: z.infer<typeof Step2Schema>) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    onNext();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 space-y-6">
      <div>
        <label>Household Size</label>
        <input {...form.register("householdSize")} type="number" />
        <p>{form.formState.errors.householdSize?.message}</p>
      </div>
      <div>
        <label>Primary Income Source</label>
        <input {...form.register("primaryIncomeSource")} type="text" />
        <p>{form.formState.errors.primaryIncomeSource?.message}</p>
      </div>
      <div>
        <label>Secondary Income Sources</label>
        <input {...form.register("secondaryIncomeSources")} type="text" />
        <p>{form.formState.errors.secondaryIncomeSources?.message}</p>
      </div>
      <button type="button" onClick={onPrev}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
