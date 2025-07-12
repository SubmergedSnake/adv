import { useQuery } from "@tanstack/react-query";
import { fetchDefects } from "../api/fetchDefects";
import DefectList from "./DefectList";
import QueryControls from "./form/QueryControls";

export default function Container() {
  const {
    isPending,
    error,
    data: defects,
  } = useQuery({
    queryKey: ["defects"],
    queryFn: fetchDefects,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, event.target.id);
  };

  if (error) return "There was an error loading the defects.";
  if (isPending) return "Loading...";
  return (
    <div className="flex">
      <QueryControls handleChange={handleChange} />
      <DefectList defects={defects} />
    </div>
  );
}
