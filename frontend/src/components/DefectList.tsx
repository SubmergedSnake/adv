import type { IDefect } from "../types/IDefect";
import Defect from "./Defect";

interface DefectListProps {
  defects: IDefect[];
}

export default function DefectList({ defects }: DefectListProps) {
  return (
    <div className="rounded-lg outline dark:bg-gray-950/50 m-[1em] p-[1em]">
      <table className="border-collapse table-auto">
        <thead className="sticky top-0 bg-gray-800 z-10">
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
          {defects.map((d: IDefect) => (
            <Defect key={d.id} defect={d} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
