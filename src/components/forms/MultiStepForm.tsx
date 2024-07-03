import { useState } from 'react';
import { motion } from 'framer-motion';
import Step1Form from './Step1';
import Step2Form from './Step2';
import Step3Form from './Step3';
import Step4Form from './Step4';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state for each step
  const [formData1, setFormData1] = useState({ firstName: '', lastName: '' });
  const [formData2, setFormData2] = useState({ email: '', password: '' });
  const [formData3, setFormData3] = useState({ address: '', city: '', zipCode: '', country: '', phone: '' });
  const [formData4, setFormData4] = useState({ interest: '' });

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle final form submission
    console.log('Final Form Data:', {
      ...formData1,
      ...formData2,
      ...formData3,
      ...formData4,
    });
    // Add your submission logic here (e.g., API call)
  };

  // Calculate width of progress bar
  const progressBarWidth = `${((currentStep - 1) / 3) * 100}%`;

  return (
    <div>
      <div>
        {currentStep === 1 && (
          <Step1Form formData={formData1} setFormData={setFormData1} nextStep={nextStep} />
        )}
        {currentStep === 2 && (
          <Step2Form formData={formData2} setFormData={setFormData2} prevStep={prevStep} nextStep={nextStep} />
        )}
        {currentStep === 3 && (
          <Step3Form formData={formData3} setFormData={setFormData3} prevStep={prevStep} nextStep={nextStep} />
        )}
        {currentStep === 4 && (
          <Step4Form formData={formData4} setFormData={setFormData4} prevStep={prevStep} handleSubmit={handleSubmit} />
        )}
      </div>
      {/* Progress tracker */}
      <div className="mt-8">
        <p className="mb-2">Step {currentStep} of 4</p>
        <div className="w-full bg-gray-300 h-3">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: progressBarWidth }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="bg-teal-400 h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
