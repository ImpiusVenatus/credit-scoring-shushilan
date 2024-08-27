import React from 'react';

interface ConfusionMatrixProps {
  matrix: { rows: { label: number, values: number[] }[] };
}

const ConfusionMatrix: React.FC<ConfusionMatrixProps> = ({ matrix }) => {
  return (
    <div className="confusion-matrix py-4">
      <h3 className="text-xl font-semibold mb-4">Confusion Matrix</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Render the column headers */}
        <div className="flex items-center justify-center font-bold">True Positives</div>
        <div className="flex items-center justify-center font-bold">False Negatives</div>
        <div className="flex items-center justify-center font-bold">False Positives</div>

        {/* Render the rows of the confusion matrix */}
        {matrix.rows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className="flex items-center justify-center font-semibold text-gray-700">
              {`Class ${row.label}`}
            </div>
            {row.values.map((value, colIndex) => (
              <div
                key={colIndex}
                className={`flex items-center justify-center p-4 border ${colIndex === 0 ? 'bg-green-100' : 'bg-red-100'} ${rowIndex === 0 ? 'border-b-2 border-gray-200' : 'border-t-2 border-gray-200'}`}
              >
                {value}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ConfusionMatrix;
