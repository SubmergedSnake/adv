import { useQuery } from "@tanstack/react-query";
import { fetchDefects } from "../api/fetchDefects";
import DefectList from "./DefectList";
import QueryControls from "./form/QueryControls";
import { useEffect, useMemo, useState } from "react";
import type { IQueryControls } from "../types/IQueryControls";
import debounce from "../utilities/debounce";

export default function Container() {
  const [debouncedControls, setDebouncedControls] = useState({});
  const [controls, setControls] = useState<Partial<IQueryControls>>({});

  const debouncedSetControls = useMemo(
    () => debounce((nextControls) => setDebouncedControls(nextControls), 1500),
    [],
  );

  useEffect(() => {
    debouncedSetControls(controls);
  }, [controls, debouncedSetControls]);

  const {
    isPending,
    error,
    data: defects,
  } = useQuery({
    queryKey: ["defects", debouncedControls],
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
    let { name, value } = event.target;
    if (name === "aircraft_registration") {
      value = value.toUpperCase();
    }
    setControls({ ...controls, [name]: value });
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
