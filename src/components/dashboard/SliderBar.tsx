import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import axios from 'axios';
import Spinner from "../LoadingState";

type SliderProps = React.ComponentProps<typeof Slider>;

interface FormDataItem {
  id: string;
  demographicsScore: number;
  occupationScore: number;
  financeScore: number;
  socialScore: number;
  totalScore: number;
}

export function SliderBar({ className, ...props }: SliderProps) {
  const [value, setValue] = useState(69);
  const [data, setData] = useState({ aboveValue: 0, belowValue: 0 });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataItem[]>([]);

  const handleChange = (value: number[]) => {
    setValue(value[0]);
  };

  const applyCutoff = async (initialLoad = false) => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/cutoff-selection?value=${value}`);
      const result = response.data;
      setData({ aboveValue: result.aboveValue, belowValue: result.belowValue });

      if (initialLoad) {
        const formDataResponse = await axios.get('/api/fetch-formData');
        setFormData(formDataResponse.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    applyCutoff(true);
  }, []);

  return (
    <div>
      <h4 className="text-2xl font-semibold pb-4">
        Cutoff Selection {value}
      </h4>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        onValueChange={handleChange}
        {...props}
      />
      <button 
        className="sm:text-sm lg:text-lg mt-4 px-8 py-2 rounded-md bg-teal-400 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
        onClick={() => applyCutoff(false)}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Apply Cutoff'}
      </button>
      <div>
        {loading ? (
          <div className="my-8">
            <Spinner size={50} color="#14b8a6" />
          </div>
        ) : (
          <div>
            <div className="flex justify-between gap-8 py-4">
              <div>
                <p className="text-[#64748b] text-sm">Total Application: {formData.length}</p>
              </div>
            </div>
            <div className="flex justify-between gap-8">
              <div className="w-[50%]">
                <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">{data.aboveValue}</h6>
                <p className="text-[#64748b] text-sm">to be approved</p>
              </div>
              <div className="w-[50%]">
                <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">{data.belowValue}</h6>
                <p className="text-[#64748b] text-sm">to be rejected</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
