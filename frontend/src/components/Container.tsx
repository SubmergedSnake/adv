import DefectList from "./DefectList";
import QueryControls from "./form/QueryControls";

export default function Container() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.id);
  };
  return (
    <div className="flex">
      <QueryControls handleChange={handleChange} />
      <DefectList />
    </div>
  );
}
