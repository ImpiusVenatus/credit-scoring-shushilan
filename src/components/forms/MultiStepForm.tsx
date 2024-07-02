// components/CreditScoringForm.tsx
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { FormSchemaType } from "./schemas";

const CreditScoringForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormSchemaType>({} as FormSchemaType);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = (data: FormSchemaType) => {
    console.log("Form submitted successfully", data);
    // Handle form submission here (e.g., API call)
  };

  return (
    <div>
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
        />
      )}
      {currentStep === 4 && (
        <Step4
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleFormSubmit}
          onPrev={handlePrevStep}
        />
      )}
    </div>
  );
};

export default CreditScoringForm;
