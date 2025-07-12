import DefectList from "./DefectList";
import QueryControls from "./QueryControls";

export default function Container() {
  return (
    <div className="flex">
      <QueryControls />
      <DefectList />
    </div>
  );
}
