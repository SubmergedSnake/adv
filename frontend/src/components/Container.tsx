import { useQuery } from "@tanstack/react-query";
import { fetchDefects } from "../api/fetchDefects";
import DefectList from "./DefectList";
import QueryControls from "./form/QueryControls";
import { useState } from "react";
import type { IQueryControls } from "../types/IQueryControls";

export default function Container() {
  const [controls, setControls] = useState<Partial<IQueryControls>>({});

  const {
    isPending,
    error,
    data: defects,
  } = useQuery({
    queryKey: ["defects", controls],
    queryFn: ({ queryKey }) => fetchDefects(queryKey[1] as IQueryControls),
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    const actualValue = event.target.getAttribute("data-value") || "";
    let currentCheckboxes = [...(controls[name as keyof IQueryControls] || [])];
    if (checked) {
      if (!currentCheckboxes.includes(actualValue)) {
        currentCheckboxes.push(actualValue);
      }
    } else {
      currentCheckboxes = currentCheckboxes.filter(
        (currentValue) => currentValue !== actualValue,
      );
    }
    setControls({ ...controls, [name]: currentCheckboxes });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(`Handling input change for ${name}:${value}`);
    setControls({ ...controls, [event.target.name]: event.target.value });
  };

  if (error) return "There was an error loading the defects.";
  if (isPending) return "Loading...";
  return (
    <div className="flex">
      <QueryControls
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        queryControls={controls}
      />
      <DefectList defects={defects} />
    </div>
  );
}
