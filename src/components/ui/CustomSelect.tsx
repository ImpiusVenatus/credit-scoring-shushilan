import React from 'react';

interface CustomSelectProps {
  label: string;
  value: string | boolean; // Adjusted to accept boolean
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, value, options, onChange }) => {
  const handleSelect = (value: string) => {
    onChange(value);
  };

  return (
    <div className="relative mb-4">
      <div className="w-full mt-1 px-3 py-2 bg-white border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-teal-200 focus:ring-opacity-50">
        <div className="flex justify-between items-center">
          <span>{String(value) || 'Select an option'}</span>
        </div>
      </div>
      <div className="w-full mt-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`cursor-pointer flex items-center px-4 py-2 hover:bg-teal-100 ${
              String(option.value) === String(value) ? 'bg-teal-200' : ''
            }`}
          >
            <span className="mr-2">
              <input
                type="radio"
                name="custom-select"
                value={option.value}
                checked={String(option.value) === String(value)}
                onChange={() => handleSelect(option.value)}
                className="hidden"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 flex items-center ${
                  String(option.value) === String(value)
                    ? 'border-gray-800 bg-teal-400'
                    : 'border-gray-800'
                }`}
              ></span>
            </span>
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
