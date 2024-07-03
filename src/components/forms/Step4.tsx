import { useState } from 'react';

interface Step4Props {
  formData: { interest: string };
  setFormData: React.Dispatch<React.SetStateAction<{ interest: string }>>;
  prevStep: () => void;
  handleSubmit: () => void;
}

const Step4Form: React.FC<Step4Props> = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl text-teal-400 font-bold mb-6">Step 4: Additional Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interest">
            Interest
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interest"
            type="text"
            name="interest"
            placeholder="Interest"
            value={formData.interest}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={prevStep}
          >
            Previous
          </button>
          <button
            className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step4Form;
