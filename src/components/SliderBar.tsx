import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderBar({ className, ...props }: SliderProps) {
  const [value, setValue] = useState(69);

  const handleChange = (value: number[]) => {
    setValue(value[0]);
  };

  return (
    <div>
      <h4 className="text-2xl font-semibold py-4">
        Cutoff Selection {value / 100}
      </h4>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        onValueChange={handleChange}
        {...props}
      />
    </div>
  );
}
