
"use client"
import React from "react";
import { Step1Schema, FormSchemaType } from "./schemas";


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
import { useToast } from "@/components/ui/use-toast"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from "@/components/ui/select"


interface StepProps {
  formData: FormSchemaType;
  setFormData: React.Dispatch<React.SetStateAction<FormSchemaType>>;
  onNext: () => void;
}

const Step1: React.FC<StepProps> = ({ formData, setFormData, onNext }) => {
  const form = useForm({
    resolver: zodResolver(Step1Schema),
    defaultValues: {
      age: formData.age || 18,
      gender: formData.gender || "Male",
      maritalStatus: formData.maritalStatus || "Single",
    },
  });


  function onSubmit(data: z.infer<typeof Step1Schema>) {
    setFormData((prevData) => ({ ...prevData, ...data }));
    onNext();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
      <button type="submit" className="px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
        Next
      </button>
    </form>
    </Form>
  );
};

export default Step1;
