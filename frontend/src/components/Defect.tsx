import type { IDefect } from "../types/IDefect";

export default function Defect({ defect }: { defect: IDefect }) {
  const pling = (id: string) => console.log(`Open modal for item ${id}`);

  const severityBg = (severity: IDefect["severity"]) => {
    switch (severity) {
      case "Low":
        return "bg-yellow-100";
      case "Medium":
        return "bg-purple-100";
      case "High":
        return "bg-red-100";
      default:
        break;
    }
  };

  const tdClass =
    "border-b border-gray-100 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400";
  const tdClassSeverity = severityBg(defect.severity);

  return (
    <tr
      onClick={() => pling(defect.id)}
      id={defect.id}
      className="hover:bg-gray-700 rounded-xs"
    >
      <td className={tdClass}>{defect.aircraft_registration}</td>
      <td className={tdClass}>
        {new Date(defect.reported_at).toLocaleString(undefined, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </td>
      <td className={tdClass}>{defect.defect_type}</td>
      <td className={tdClass}>{defect.description}</td>
      <td className={`${tdClass} ${tdClassSeverity}`}>{defect.severity}</td>
    </tr>
  );
}
