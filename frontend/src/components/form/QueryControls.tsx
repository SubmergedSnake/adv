import { useState } from "react";
import type { QueryControls } from "../../types/QueryControls";
import CheckBoxes from "./CheckBoxes";
interface QueryControlsProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function QueryControls({ handleChange }: QueryControlsProps) {
  const [controls, setControls] = useState<Partial<QueryControls>>({});

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
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center lg:mr-[2em] rounded-lg outline dark:bg-gray-950/50 m-[1em] p-[1em]">
        <form className="flex flex-col space-y-4">
          <h1>Aircraft Registration</h1>
          <input
            className={inputClass}
            type="string"
            id="registration"
            name="registration"
            value={controls.aircraft_registration}
            onChange={handleChange}
          />
          <h1>Reported after</h1>
          <input
            className={inputClass}
            type="date"
            id="reported_after"
            name="reported_after"
            value={controls.reported_after}
            onChange={handleChange}
          />
          <h1>Reported before</h1>
          <input
            className={inputClass}
            type="date"
            id="reported_before"
            name="reported_before"
            value={controls.reported_before}
            onChange={handleChange}
          />
          <CheckBoxes
            handleChange={handleChange}
            items={defectTypes}
            label="Defect Types"
          />
          <CheckBoxes
            handleChange={handleChange}
            items={severity}
            label="Severity"
          />
        </form>
      </div>
    </div>
  );
}
