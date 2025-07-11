import type { IDefect } from "../types/IDefect";

export default function Defect({ defect }: { defect: IDefect }) {
  const pling = (id: string) => console.log(`Open modal for item ${id}`);

  const tdClass =
    "border-b border-gray-100 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400";

  return (
    <tr
      onClick={() => pling(defect.id)}
      id={defect.id}
      className="hover:bg-gray-700 rounded-xs"
    >
      <td className={tdClass}>{defect.id}</td>
      <td className={tdClass}>{defect.aircraft_registration}</td>
      <td className={tdClass}>{defect.reported_at.toString()}</td>
      <td className={tdClass}>{defect.defect_type}</td>
      <td className={tdClass}>{defect.description}</td>
      <td className={tdClass}>{defect.severity}</td>
    </tr>
  );
}
