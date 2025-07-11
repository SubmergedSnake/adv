import type { IDefect } from "../types/IDefect";
import Defect from "./Defect";

export default function DefectList() {
  const defects: IDefect[] = [
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
    {
      id: "ug5hfzx4",
      aircraft_registration: "ME-AAS",
      reported_at: "2024-07-20T12:59:37.142000Z",
      defect_type: "Vibration anomaly",
      description:
        "Unusual vibration detected in engine nacelle.Unusual vibration detected in engine nacelle.",
      severity: "Medium",
    },
  ];

  return (
    <div className="rounded-lg outline dark:bg-gray-950/50 m-[1em] p-[1em]">
      <table className="border-collapse table-fixed">
        <thead>
          <tr>
            <th>ID</th>
            <th>Aircraft Registration</th>
            <th>Reported At</th>
            <th>Defect Type</th>
            <th>Description</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {defects.map((d) => (
            <Defect defect={d} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
