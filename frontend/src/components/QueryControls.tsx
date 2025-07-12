import { useState } from "react";
import type { QueryControls } from "../types/QueryControls";
import lowerAndSnakeCase from "../utilities/lowerAndSnakeCase";
export default function QueryControls() {
  const [controls, setControls] = useState<Partial<QueryControls>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.id);
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

  return (
    <div className="flex-none basis-1/4">
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center lg:mr-[2em] rounded-lg outline dark:bg-gray-950/50 m-[1em] p-[1em]">
        <form className="flex flex-col space-y-4">
          <label htmlFor="registration">Aircraft Registration</label>
          <input
            className={inputClass}
            type="string"
            id="registration"
            name="registration"
            value={controls.aircraft_registration}
            onChange={handleChange}
          />
          <label htmlFor="reported_after">Reported after:</label>
          <input
            className={inputClass}
            type="date"
            id="reported_after"
            name="reported_after"
            value={controls.reported_after}
            onChange={handleChange}
          />
          <label htmlFor="reported_before">Reported before:</label>
          <input
            className={inputClass}
            type="date"
            id="reported_before"
            name="reported_before"
            value={controls.reported_before}
            onChange={handleChange}
          />
          <label htmlFor="defect_type">Defect Type</label>
          <div className="flex flex-wrap">
            {defectTypes.map((defect: string) => (
              <div>
                <input
                  type="checkbox"
                  id={lowerAndSnakeCase(defect)}
                  name={lowerAndSnakeCase(defect)}
                />
                <label
                  htmlFor={lowerAndSnakeCase(defect)}
                  className="cursor-pointer ml-1 mr-2"
                >
                  {defect}
                </label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
