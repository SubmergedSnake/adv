import type { IDefect } from "../types/IDefect";
import Defect from "./Defect";

interface DefectListProps {
  defects: IDefect[];
}

export default function DefectList({ defects }: DefectListProps) {
  if (defects.length > 0) {
    return (
      <div className="rounded-lg outline dark:bg-gray-950/50 m-[1em] p-[1em]">
        <table className="border-collapse table-auto">
          <thead className="sticky top-0 bg-gray-800 z-10">
            <tr>
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
  } else {
    return <div>No results</div>;
  }
}
