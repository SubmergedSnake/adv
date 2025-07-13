import { useEffect, useState } from "react";
import type { IQueryControls } from "../../types/IQueryControls";
import CheckBoxes from "./CheckBoxes";
interface QueryControlsProps {
  debouncedSetControls: React.Dispatch<
    React.SetStateAction<Partial<IQueryControls>>
  >;
}

export default function QueryControls({
  debouncedSetControls,
}: QueryControlsProps) {
  const [queryControls, setQueryControls] = useState<Partial<IQueryControls>>(
    {},
  );

  useEffect(() => {
    debouncedSetControls(queryControls);
  }, [queryControls]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    const actualValue = event.target.getAttribute("data-value") || "";
    let currentCheckboxes = [
      ...(queryControls[name as keyof IQueryControls] || []),
    ];
    if (checked) {
      if (!currentCheckboxes.includes(actualValue)) {
        currentCheckboxes.push(actualValue);
      }
    } else {
      currentCheckboxes = currentCheckboxes.filter(
        (currentValue) => currentValue !== actualValue,
      );
    }
    setQueryControls({ ...queryControls, [name]: currentCheckboxes });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = event.target;
    if (name === "aircraft_registration") {
      value = value.toUpperCase();
    }
    setQueryControls({ ...queryControls, [name]: value });
  };

  const inputClass = "bg-gray-800";

  // Hardcoded for now - should be maintained and retrieved from db, eventually
  const defectTypes = [
    "Vibration anomaly",
    "Oil pressure anomaly",
    "Hydraulic leak",
    "Fan blade damage",
    "Compressor stall",
    "Fuel pump failure",
    "Turbine blade crack",
    "Throttle control issue",
    "Exhaust gas temperature spike",
    "Ignition system fault",
  ];

  const severity = ["Low", "Medium", "High"];

  return (
    <div className="flex-none basis-1/4">
      <div className="flex items-center justify-center lg:mr-[2em] rounded-lg outline dark:bg-gray-950/50 m-[1em] p-[1em]">
        <form className="flex flex-col space-y-4">
          <h1>Aircraft Registration</h1>
          <input
            className={inputClass}
            type="string"
            id="aircraft_registration"
            name="aircraft_registration"
            onChange={handleInputChange}
            value={queryControls.aircraft_registration}
          />
          <h1>Reported after</h1>
          <input
            className={inputClass}
            type="date"
            id="reported_after"
            name="reported_after"
            value={queryControls?.reported_after}
            onChange={handleInputChange}
          />
          <h1>Reported before</h1>
          <input
            className={inputClass}
            type="date"
            id="reported_before"
            name="reported_before"
            value={queryControls?.reported_before}
            onChange={handleInputChange}
          />
          <CheckBoxes
            handleCheckboxChange={handleCheckboxChange}
            items={defectTypes}
            label="Defect Types"
            selection={queryControls?.defect_type}
            queryControlField="defect_type"
          />
          <CheckBoxes
            handleCheckboxChange={handleCheckboxChange}
            items={severity}
            label="Severity"
            selection={queryControls?.severity}
            queryControlField="severity"
          />
        </form>
      </div>
    </div>
  );
}
